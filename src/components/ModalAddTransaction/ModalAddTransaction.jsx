import { GrClose } from 'react-icons/gr';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
import { useState } from 'react';
import { selectCategories } from 'redux/transactions/transactionSelectors';
import { addTransaction } from 'redux/transactions/transactionOperation';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';

export const ModalAddTransaction = ({ onClose }) => {
  const categories = useSelector(selectCategories);
  const [transactionDate, setTransactionDate] = useState('');
  const dispatch = useDispatch();

  const validationSchema = yup.object({
    amount: yup
      .number('Please, enter only numbers')
      .required('Amount is required'),
  });

  const changeDate = date => {
    setTransactionDate(date._d);
  };
  const { handleSubmit, values, handleChange, errors, resetForm } = useFormik({
    initialValues: {
      type: false,
      categoryId: '',
      comment: '',
      amount: '',
    },
    validationSchema,
    onSubmit: ({ type, categoryId, comment, amount }) => {
      const newTransaction = {
        transactionDate,
        type: type ? 'EXPENSE' : 'INCOME',
        categoryId: categoryId
          ? categoryId
          : '063f1132-ba5d-42b4-951d-44011ca46262',
        comment,
        amount: type ? -Number(amount) : Number(amount),
      };

      console.log(newTransaction);

      dispatch(addTransaction(newTransaction));

      resetForm();
    },
  });

  return (
    <>
      <h2>Add transaction</h2>
      <form onSubmit={handleSubmit} autoComplete="off">
        <label>
          <span>Income</span>
          <input
            type="checkbox"
            name="type"
            value={values.type}
            onChange={handleChange}
          />
          <span>Expense</span>
        </label>
        {values.type && (
          <>
            <select name="categoryId" onChange={handleChange} required>
              {categories.reduce(
                (acc, categori) => {
                  if (categori.type !== 'INCOME') {
                    acc.push(
                      <option key={categori.id} value={categori.id}>
                        {categori.name}
                      </option>
                    );
                  }
                  return acc;
                },
                [
                  <option key="1" value="">
                    Select Category
                  </option>,
                ]
              )}
            </select>
            {/* <input
              list="category"
              placeholder="Select a category"
              name="categoryName"
              onChange={handleChange}
            />
            <datalist id="category">
              {categories.reduce((acc, categori) => {
                if (categori.type !== 'INCOME') {
                  acc.push(<option key={categori.id} value={categori.name} />);
                }
                return acc;
              }, [])}
            </datalist> */}
          </>
        )}

        <div>
          <input
            type="text"
            placeholder="0.00"
            name="amount"
            value={values.amount}
            onChange={handleChange}
            required
          />
          {errors.amount && <div>{errors.amount}</div>}
          <Datetime
            type="date"
            name="transactionDate"
            value={values.transactionDate}
            onChange={evt => {
              changeDate(evt);
            }}
          />
        </div>
        <input
          type="text"
          placeholder="Comment"
          name="comment"
          value={values.comment}
          onChange={handleChange}
        />
        <button type="submit">ADD</button>
        <button type="button">CANCEL</button>
        <button type="button" onClick={onClose}>
          <GrClose />
        </button>
      </form>
    </>
  );
};
