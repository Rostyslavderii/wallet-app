import { GrClose } from 'react-icons/gr';
import { BsCalendar4Week } from 'react-icons/bs'; //BsBorder;
import styles from '../ModalAddTransaction/ModalAddTransaction.module.css';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
import { useState } from 'react';
import { selectCategories } from 'redux/categories/categoriesSelectors';
import { addTransaction } from 'redux/transactions/transactionOperation';
import { Button } from 'components/Button/Button';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import {
  ModalTitle,
  ModalForm,
  InputCheckBox,
  TypeLabel,
  CheckBox,
  CheckButton,
  Plus,
  Minus,
  Span,
  SpanIncome,
  SpanExpense,
  SelectCategory,
  OptionCategory,
  DivSumm,
  Amount,
  DateInput,
  Calendar,
  Comment,
  ButtonCard,
  CloseButton,
  } from './ModalAddTransaction.styled';
import { FormButton } from 'components/Forms/Forms.styled';
import { useMedia } from 'react-use';

export const ModalAddTransaction = ({ onClose }) => {
  const categories = useSelector(selectCategories);
  const [transactionDate, setTransactionDate] = useState(new Date());
  const dispatch = useDispatch();
  
  const isMobile = useMedia('(max-width: 767px)');
    
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
      dispatch(addTransaction(newTransaction));
      resetForm();
    },
  });

  return (
    <>
      <ModalTitle>Add transaction</ModalTitle>
      <ModalForm onSubmit={handleSubmit} autoComplete="off">
        <TypeLabel>
          {values.type ? <Span>Income</Span> : <SpanIncome>Income</SpanIncome>}
          <InputCheckBox
            type="checkbox"
            name="type"
            value={values.type}
            onChange={handleChange}
          />
          <CheckBox>
            <CheckButton props={values.type}>
              {!values.type ? <Plus /> : <Minus />}
            </CheckButton>
          </CheckBox>
          {!values.type ? (
            <Span>Expense</Span>
          ) : (
            <SpanExpense>Expense</SpanExpense>
          )}
        </TypeLabel>
        {values.type && (
          <>
            <SelectCategory name="categoryId" onChange={handleChange} required>
              {categories.reduce(
                (acc, categori) => {
                  if (categori.type !== 'INCOME') {
                    acc.push(
                      <OptionCategory key={categori.id} value={categori.id}>
                        {categori.name}
                      </OptionCategory>
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
            </SelectCategory>
          </>
        )}

        <DivSumm>
          <div>
            <Amount
              type="text"
              placeholder="0.00"
              name="amount"
              value={values.amount}
              onChange={handleChange}
              required
            />
            {errors.amount && <div>{errors.amount}</div>}
          </div>

          <DateInput>
            <Datetime
              dateFormat="DD.MM.YY"
              timeFormat={false}
              name="transactionDate"
              value={transactionDate}
              onChange={evt => {
                changeDate(evt);
              }}
              inputProps={{ className: styles.dateTime }}
            />
            <Calendar>
              <BsCalendar4Week />
            </Calendar>
          </DateInput>
        </DivSumm>
        <Comment          
          placeholder="Comment"
          name="comment"
          value={values.comment}
          onChange={handleChange}
        />
        <ButtonCard>
          <FormButton type="submit">ADD</FormButton>
          <Button type="button" onClick={onClose}>
            CANCEL
          </Button>
        </ButtonCard>
        {!isMobile && <CloseButton type="button" onClick={onClose}>
          <GrClose />
        </CloseButton>}
      </ModalForm>
    </>
  );
};
