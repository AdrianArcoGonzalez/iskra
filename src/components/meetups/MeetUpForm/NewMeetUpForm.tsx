import { Field, Form, Formik } from "formik";
import Card from "../../Card/Card";
import classes from "./NewMeetupForm.module.css";
import newMeetUpValidations from "./data/validations";
import useMeetups from "../../../hooks/useMeetups";
import { useNavigate } from "react-router-dom";
import { ALL_MEETUP_PAGE } from "../../../utils/constants";

interface FormValues {
  title: string;
  image: string;
  address: string;
  description: string;
}

export default function NewMeetUpForm() {
  const { addMeetUp, createRandomId } = useMeetups();
  const navigate = useNavigate();
  const submitHandler = async (values: FormValues) => {
    const meetUp = await addMeetUp({ ...values, id: createRandomId() });

    if (meetUp) {
      navigate(ALL_MEETUP_PAGE);
    }
  };

  const initialValues: FormValues = {
    title: "",
    image: "",
    address: "",
    description: "",
  };

  return (
    <Card>
      <Formik
        initialValues={initialValues}
        onSubmit={submitHandler}
        validationSchema={newMeetUpValidations}
      >
        {({ errors, touched }) => (
          <Form className={classes.form}>
            <div className={classes.control}>
              <label
                htmlFor="title"
                className={classes.label}
                aria-label="Add meetup form"
              >
                Meetup title
              </label>
              <Field
                aria-label="Meetup title"
                id="title"
                name="title"
                placeholder="Title"
                type="text"
                className={classes.input}
              />
              {errors.title && touched.title && (
                <div className={classes.error}>{errors.title}</div>
              )}
            </div>
            <div className={classes.control}>
              <label
                htmlFor="image"
                className={classes.label}
                aria-label="Meetup image url"
              >
                Meetup Image
              </label>
              <Field
                aria-label="Meetup image url field"
                id="image"
                name="image"
                placeholder="Image URL"
                type="url"
                className={classes.input}
              />
              {errors.image && touched.image && (
                <div className={classes.error}>{errors.image}</div>
              )}
            </div>
            <div className={classes.control}>
              <label
                htmlFor="address"
                className={classes.label}
                aria-label="Meetup address"
              >
                Address
              </label>
              <Field
                aria-label="Meetup address field"
                className={classes.input}
                id="address"
                name="address"
                placeholder="Address"
                type="text"
              />
              {errors.address && touched.address && (
                <div className={classes.error}>{errors.address}</div>
              )}
            </div>
            <div className={classes.control}>
              <label
                htmlFor="description"
                className={classes.label}
                aria-label="Meetup description"
              >
                Description
              </label>
              <Field
                aria-label="Meetup description field"
                as="textarea"
                className={classes.textArea}
                id="description"
                name="description"
                placeholder="Description"
              />
              {errors.description && touched.description && (
                <div className={classes.error}>{errors.description}</div>
              )}
            </div>
            <button
              disabled={Object.keys(errors).length > 0}
              type="submit"
              className={classes.actions}
              aria-label="Add meetup button"
            >
              Add Meetup
            </button>
          </Form>
        )}
      </Formik>
    </Card>
  );
}
