import * as Yup from "yup";

const newMeetUpValidations = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  image: Yup.string().url("Invalid URL").required("Image URL is required"),
  address: Yup.string().required("Address is required"),
  description: Yup.string().required("Description is required"),
});

export default newMeetUpValidations;
