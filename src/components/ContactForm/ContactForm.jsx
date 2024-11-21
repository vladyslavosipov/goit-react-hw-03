import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import css from "./ContactForm.module.css";

const ContactForm = ({ onAddContact }) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Name is required")
      .min(3, "Name must be at least 3 characters")
      .max(50, "Name cannot exceed 50 characters"),
    number: Yup.string()
      .required("Number is required")
      .matches(/^\d+$/, "Number must be numeric"),
  });

  const handleSubmit = (values, { resetForm }) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };
    onAddContact(newContact);
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form className={css.contactForm}>
          <div>
            <label htmlFor="name">Name</label>
            <Field type="text" id="name" name="name" placeholder="Enter name" />
            <ErrorMessage name="name" component="div" className={css.error} />
          </div>
          <div>
            <label htmlFor="number">Number</label>
            <Field
              type="text"
              id="number"
              name="number"
              placeholder="Enter phone number"
            />
            <ErrorMessage name="number" component="div" className={css.error} />
          </div>
          <button type="submit">Add Contact</button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;