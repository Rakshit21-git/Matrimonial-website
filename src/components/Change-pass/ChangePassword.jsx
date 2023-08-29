import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import "./changePass.css";

export default function ChangePassword() {
  const formSchema = Yup.object().shape({
    oldPassword: Yup.string().required("Old Password is mendatory"),
    password: Yup.string()
      .required("Password is mendatory")
      //   .min(8, 'Password must be at 3 char long')
      .matches(
        /^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&?@ "]).*$/,
        "Enter a valid password"
      ),
    confirmPwd: Yup.string()
      //   .required("Password is mendatory")
      .oneOf([Yup.ref("password")], "Passwords does not match"),
  });
  const formOptions = { resolver: yupResolver(formSchema) };
  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;
  function onSubmit(data) {
    alert(data);
    return false;
  }
  return (
    <section className="change_pass">
      <div className="bg_img d-flex  align-items-center justify-content-center ">
        <h2 className="text-light my-5 py-5">
          <span className="color_rose">Change</span> Password
        </h2>
      </div>
      <div>
        {" "}
        <h3 className="text-center fw-normal mt-5">
          <span className="color_rose ">Change</span> Password{" "}
          <img src="3heart.png" className="mb-5" alt="" />
        </h3>
      </div>
      <div className="mx-auto col-md-5">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group mb-3">
            <label>Old Password</label>
            <input
              name="oldPassword"
              type="password"
              {...register("oldPassword")}
              className={`shadow-none border-0 border-bottom border-dark form-control ${
                errors.oldPassword ? "is-invalid" : ""
              }`}
            />
            <div className="invalid-feedback">
              {errors.oldPassword?.message}
            </div>
          </div>
          <div className="form-group mb-3">
            <label>Password</label>
            <input
              name="password"
              type="password"
              {...register("password")}
              className={`shadow-none border-0 border-bottom border-dark form-control form-control ${
                errors.password ? "is-invalid" : ""
              }`}
            />
            <div className="invalid-feedback">{errors.password?.message}</div>
          </div>
          <div className="form-group mb-3">
            <label>Confirm Password</label>
            <input
              name="confirmPwd"
              type="password"
              {...register("confirmPwd")}
              className={`shadow-none border-0 border-bottom border-dark form-control form-control ${
                errors.confirmPwd ? "is-invalid" : ""
              }`}
            />
            <div className="invalid-feedback">{errors.confirmPwd?.message}</div>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="w-50 bg_rose mt-3 shadow-none border-0 py-2 rounded text-light h4 fw-normal"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
