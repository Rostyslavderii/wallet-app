import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { GrClose } from 'react-icons/gr';
import * as yup from 'yup';
import {
  ADDButton,
  CloseButton,
  ModalForm,
  ModalTitle,
  Comment,
  Amount,
} from 'components/ModalAddTransaction/ModalAddTransaction.styled';

import { updateTransaction } from 'redux/transactions/transactionOperation';
import { selectCategories } from 'redux/categories/categoriesSelectors';

export const EditModal = ({ transaction, close }) => {
  const categories = useSelector(selectCategories);
  const dispatch = useDispatch();
  const validationSchema = yup.object({
    amount: yup
      .number('Please, enter only numbers')
      .moreThan(0, 'Please, enter number more than 0')
      .required('Amount is required'),
  });
  const { handleSubmit, values, handleChange, errors } = useFormik({
    initialValues: {
      comment: transaction.comment,
      amount: Math.abs(transaction.amount),
    },
    validationSchema,
    onSubmit: values => {
      const amount =
        transaction.type === 'INCOME'
          ? Number(values.amount)
          : -Number(values.amount);
      dispatch(updateTransaction({ ...transaction, ...values, amount }));
      close();
    },
  });
  return (
    <>
      <ModalTitle>Edit transaction</ModalTitle>
      <ModalForm onSubmit={handleSubmit}>
        <p>
          Category:{' '}
          {
            categories.find(category => category.id === transaction.categoryId)
              .name
          }
        </p>
        <Amount
          type="text"
          placeholder="0.00"
          name="amount"
          onChange={handleChange}
          value={values.amount}
          required
        />
        {errors.amount && <div>{errors.amount}</div>}
        <Comment
          type="text"
          placeholder="Comment"
          name="comment"
          onChange={handleChange}
          value={values.comment}
        />

        <ADDButton type="submit">Update</ADDButton>
        <CloseButton type="button" onClick={close}>
          <GrClose />
        </CloseButton>
      </ModalForm>
    </>
  );
};
