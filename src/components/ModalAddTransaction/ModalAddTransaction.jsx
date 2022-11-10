import { GrClose } from 'react-icons/gr';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import 'react-datetime/css/react-datetime.css';
// import Datetime from 'react-datetime';

export const ModalAddTransaction = ({ onClose }) => {
  return (
    <>
      <h2>Add transaction</h2>
      <Formik
        initialValues={{
          income: false,
          category: '',
          summ: '',
          date: '',
          comment: '',
        }}
        validate={values => {
          const errors = {};
          if (!values.summ) {
            errors.summ = 'Required';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting, values }) => {
          return (
            <Form>
              <label>
                <span>Income</span>
                <Field type="checkbox" name="income" />
                <span>Expense</span>
              </label>
              {values.income && (
                <Field
                  as="select"
                  list="category"
                  placeholder="Select a category"
                  name="category"
                >
                  <option value="Main">Main</option>
                  <option value="Food">Food</option>
                  <option value="Auto">Auto</option>
                  <option value="Development">Development</option>
                  <option value="Children">Children</option>
                  <option value="House">House</option>
                  <option value="Education">Education</option>
                  <option value="Reset">Reset</option>
                </Field>
              )}
              <div>
                <Field type="text" placeholder="0.00" name="summ" />
                <ErrorMessage name="summ" component="div" />
                <Field name="date" type="date" />
                {/* <Datetime /> */}
              </div>
              <Field type="text" placeholder="Comment" name="comment" />
              <button type="submit" disabled={isSubmitting}>
                ADD
              </button>
              <button type="button">CANCEL</button>
              <button type="button" onClick={onClose}>
                <GrClose />
              </button>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};
