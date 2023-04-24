import { useFormik } from "formik";
import * as Yup from "yup";
import "./signup.css";

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      phone: "",
      password: "",
      confirmedPassword: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Required")
        .min(4, "Must be 4 characters or more"),
      email: Yup.string()
        .required("Required")
        .matches(
          /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
          "Please enter a valid email address"
        ),
      password: Yup.string()
        .required("Required")
        .matches(
          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
          "Password must be 8 characters and at least two letters, one number and a special character"
        ),
      confirmedPassword: Yup.string()
        .required("Required")
        .oneOf([Yup.ref("password"), null], "Password must match"),
      phone: Yup.string()
        .required("Required")
        .matches(
          /(84|0[3|5|7|8|9])+([0-9]{8})\b/,
          "Must be a valid phone number"
        ),
    }),
    onSubmit: (values) => {
      alert("Form submission");
      console.log(values);
    },
  });

  return (
    <section>
      <form className="infoform" onSubmit={formik.handleSubmit}>
        <label>You name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formik.values.name}
          placeholder="Enter your name"
          onChange={formik.handleChange}
        />
        {formik.errors.name && <p className="errorMsg">{formik.errors.name}</p>}
        <label>Email address</label>
        <input
          type="text"
          id="email"
          name="email"
          value={formik.values.email}
          placeholder="Enter your email"
          onChange={formik.handleChange}
        />
        {formik.errors.email && (
          <p className="errorMsg">{formik.errors.email}</p>
        )}
        <label>Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formik.values.password}
          placeholder="Enter your password"
          onChange={formik.handleChange}
        />
        {formik.errors.password && (
          <p className="errorMsg">{formik.errors.password}</p>
        )}
        <label>Confirm Password</label>
        <input
          type="password"
          id="confirmedPassword"
          name="confirmedPassword"
          value={formik.values.confirmedPassword}
          placeholder="Confirm your password"
          onChange={formik.handleChange}
        />
        {formik.errors.confirmedPassword && (
          <p className="errorMsg">{formik.errors.confirmedPassword}</p>
        )}
        <label>Phone number</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formik.values.phone}
          placeholder="Enter your phone numbers"
          onChange={formik.handleChange}
        />
        {formik.errors.phone && (
          <p className="errorMsg">{formik.errors.phone}</p>
        )}
        <button type="submit">Continue</button>
      </form>
    </section>
  );
};

export default SignupForm;
