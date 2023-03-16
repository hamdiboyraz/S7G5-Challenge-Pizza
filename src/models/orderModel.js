import * as Yup from "yup";

const orderSchema = Yup.object({
  name: Yup.string()
    .required()
    .min(2, "Name must be at least 2 characters long"),
  size: Yup.string().required("Please choose an option"),
  thickness: Yup.string().required(),
});

export default orderSchema;
