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
  DivSumm,
  Amount,
  DateInput,
  Calendar,
  Comment,
  ButtonCard,
  CloseButton,
  customStylesSelect,
} from './ModalAddTransaction.styled';
import Select from 'react-select';
import { FormButton } from 'components/Forms/Forms.styled';
import { useMedia } from 'react-use';
import { selectBalance } from 'redux/transactions/transactionSelectors';
import { toast } from 'react-toastify';
import { toastStyled } from 'utils/GlobalStyle';

export const ModalAddTransaction = ({ onClose }) => {
  const categories = useSelector(selectCategories);
  const balance = useSelector(selectBalance);
  const [transactionDate, setTransactionDate] = useState(new Date());
  const [categoryId, setCategoryId] = useState('');
  const dispatch = useDispatch();

  const isMobile = useMedia('(max-width: 767px)');

  const validationSchema = yup.object({
    amount: yup
      .number('Please, enter only numbers')
      .required('Amount is required')
      .moreThan(0, 'Please, enter number more than 0'),
  });

  const changeDate = date => {
    setTransactionDate(date._d);
  };
  const changeCategory = categoryId => {
    setCategoryId(categoryId.value);
  };
  const { handleSubmit, values, handleChange, errors, resetForm } = useFormik({
    initialValues: {
      type: false,
      comment: '',
      amount: '',
    },
    validationSchema,
    onSubmit: ({ type, comment, amount }) => {
      const newTransaction = {
        transactionDate,
        type: type ? 'EXPENSE' : 'INCOME',
        categoryId: categoryId
          ? categoryId
          : '063f1132-ba5d-42b4-951d-44011ca46262',
        comment,
        amount: type ? -Number(amount) : Number(amount),
      };
      if (balance + newTransaction.amount < 0) {
        toast.warn(
          'Insufficient balance to complete the transaction!',
          toastStyled
        );
        return;
      }
      dispatch(addTransaction(newTransaction));
      resetForm();
      onClose();
    },
  });

  const selectOption = () =>
    categories.reduce((acc, categori) => {
      if (categori.type !== 'INCOME') {
        acc.push({
          value: `${categori.id}`,
          label: `${categori.name}`,
        });
      }
      return acc;
    }, []);

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
          <Select
            name="categoryId"
            styles={customStylesSelect(isMobile)}
            onChange={evt => {
              changeCategory(evt);
            }}
            options={selectOption()}
          ></Select>
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
        {!isMobile && (
          <CloseButton type="button" onClick={onClose}>
            <GrClose />
          </CloseButton>
        )}
      </ModalForm>
    </>
  );
};
