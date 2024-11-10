import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from './SubmitForm.module.css';
import { toast, Toaster } from 'react-hot-toast';

export default function SubmitForm() {

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    bookingDate: Yup.date()
      .min(new Date(), "Booking date must be a future date")
      .required("Booking date is required, must be in format dd.mm.yyyy"),
    comment: Yup.string(),
  });

  const handleSubmit = (values, actions) => {
    console.log(values);
    
    toast.success("Your booking was successful!", {
      duration: 4000,
      position: 'top-right',
      style: {
        background: '#4caf50',
        color: '#fff',
        padding: '16px',
        borderRadius: '8px',
      },
    });

    actions.resetForm();
  };

  return (
    <div className={css.wrapper}>
      <div className={css.textBox}>
        <h2 className={css.title}>Book your campervan now</h2>
        <p className={css.desc}>Stay connected! We are always ready to help you.</p>
      </div>
      <Formik
        initialValues={{
          name: '',
          email: '',
          bookingDate: '',
          comment: '',
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className={css.form}>
            <div>
              <Field
                className={css.input}
                type="text"
                id="name"
                name="name"
                placeholder="Name"
              />
              <ErrorMessage name="name" component="div" style={{ color: 'red' }} />
            </div>

            <div>
              <Field
                className={css.input}
                type="email"
                id="email"
                name="email"
                placeholder="Email"
              />
              <ErrorMessage name="email" component="div" style={{ color: 'red' }} />
            </div>

            <div>
              <Field
                className={`${css.input} ${css.dateInput}`}
                type="text"
                id="bookingDate"
                name="bookingDate"
                placeholder="Booking date"
              />
              <ErrorMessage name="bookingDate" component="div" style={{ color: 'red' }} />
            </div>

            <div>
              <Field
                className={css.input}
                as="textarea"
                rows="5"
                id="comment"
                name="comment"
                placeholder="Comment"
              />
              <ErrorMessage name="comment" component="div" style={{ color: 'red' }} />
            </div>

            <div className={css.buttonBox}>
              <button className={css.submitButton} type="submit">Send</button>
            </div>
          </Form>
        )}
      </Formik>
      <Toaster />
    </div>
  );
}
