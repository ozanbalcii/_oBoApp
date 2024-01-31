import React from "react";
import * as Yup from "yup";
import Swal from "sweetalert2";
import { useFormik } from "formik";
import {
  CustomerContext,
  useCustomerContext,
} from "../../../../contexts/Customer/CustomerProvider";
import Input from "../../../../components/common/Input";
import SubmitButton from "../../../../components/common/Button/SubmitButton";
import CustomSelect from "../../../../components/common/Select";

export default function AddCustomerForm() {
  const { setUserData, userRoles, userStatus } =
    useCustomerContext(CustomerContext);

  const passwordRules = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{5,}$/;

  const customerSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    surname: Yup.string().required("Surname is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    status: Yup.string().required("Status is required"),
    role: Yup.string().required(" Role is required"),
    password: Yup.string()
      .matches(
        passwordRules,
        "Min 5 chars, 1 uppercase, 1 lowercase, 1 number)"
      )
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirmation is required"),
  });

  const { handleSubmit, handleChange, values, touched, errors, getFieldProps } =
    useFormik({
      validationSchema: customerSchema,
      initialValues: {
        name: "",
        surname: "",
        birthdate: "",
        password: "",
        confirmPassword: "",
        email: "",
        lastSeen: "",
        phone: "",
        role: "",
        status: "",
      },
      onSubmit: (values, { resetForm }) => {
        setTimeout(() => {
          setUserData((prevState) => [
            ...prevState,
            {
              id: Math.floor(Math.random() * 1000),
              name: values.name,
              surname: values.surname,
              password: values.password,
              confirmPassword: values.confirmPassword,
              email: values.email,
              lastSeen: values.lastSeen,
              phone: values.phone ? values.phone : "-",
              role: values.role,
              status: values.status,
            },
          ]);
          Swal.fire({
            icon: "success",
            text: "Customer added successfully!",
            showConfirmButton: false,
            cancelButtonText: "Close",
            showCancelButton: true,
            allowOutsideClick: false,
          });
        }, 600);
        resetForm();
      },
    });
  return (
    <form onSubmit={handleSubmit} noValidate className="px-8 pt-2">
      <div className="text-darky">
        <div className="grid grid-cols">
          <label className="fw-bold text-gray-300 text-[17px]">Name</label>
          <div className="text-xl">
            <Input
              required={"required"}
              className="rounded-[4px] required"
              type={"text"}
              name="name"
              placeholder="Name"
              onChange={handleChange}
              value={values.name}
            />
            {touched.name && errors.name && (
              <div className="text-red-300 text-[15px]">{errors.name}</div>
            )}
            <div className="pt-2">
              <label className="fw-bold text-gray-300 text-[17px]">Surname</label>
              <div className="text-xl">
                <Input
                  className="rounded-[4px]"
                  type={"text"}
                  name="surname"
                  placeholder="Surname"
                  onChange={handleChange}
                  value={values.surname}
                />
                {touched.surname && errors.surname && (
                  <div className="text-red-300 text-[15px]">
                    {errors.surname}
                  </div>
                )}
              </div>
            </div>
            <div className="pt-2">
              <label className="fw-bold text-gray-300 text-[17px]">Email</label>
              <div className="text-xl">
                <Input
                  type={"text"}
                  name="email"
                  placeholder="Email"
                  onChange={handleChange}
                  value={values.email}
                />
                {touched.email && errors.email && (
                  <div className="text-red-300 text-[15px]">{errors.email}</div>
                )}
              </div>
            </div>
            <div className="pt-2">
              <label className="fw-bold text-gray-300 text-[17px]">Phone</label>
              <div className="text-xl">
                <Input
                  type={"text"}
                  name="phone"
                  placeholder="Phone"
                  onChange={handleChange}
                  value={values.phone}
                />
              </div>
            </div>
            <div className="pt-2">
              <label className="fw-bold text-gray-300 text-[17px]">Role</label>
              <div className="">
                <CustomSelect
                  className="rounded-[20px] w-52"
                  name="role"
                  placeholder="Role"
                  onChange={handleChange}
                  value={values.role}
                  options={[{ label: "Empty", value: null }, ...userRoles]}
                />
                {touched.role && errors.role && (
                  <div className="text-red-300 text-[15px]">{errors.role}</div>
                )}
              </div>
            </div>
            <div className="pt-2">
              <label className="fw-bold text-gray-300 text-[17px]">Status</label>
              <div className="">
                <CustomSelect
                  className="rounded-[20px] w-52"
                  name="status"
                  placeholder="Status"
                  onChange={handleChange}
                  value={values.status}
                  options={[{ label: "Empty", value: null }, ...userStatus]}
                />
                {touched.status && errors.status && (
                  <div className="text-red-300 text-[15px]">
                    {errors.status}
                  </div>
                )}
              </div>
              <div className="pt-2">
                <label className="fw-bold text-gray-300 text-[17px]">Password</label>
                <div className="">
                  <Input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                    value={values.password}
                    autoComplete="off"
                    {...getFieldProps("password")}
                    className={`form-control form-control-solid rounded-[4px] text-xl ${
                      touched.password && errors.password
                        ? "is-invalid"
                        : touched.password && !errors.password
                        ? "is-valid"
                        : ""
                    }`}
                  />
                  {touched.password && errors.password && (
                    <div className="text-red-300 text-[15px]">
                      <span role="alert">{errors.password}</span>
                    </div>
                  )}
                </div>
                <div className="pt-2">
                  <label className="fw-bold text-gray-300 text-[17px]">
                    Password Confirmation
                  </label>
                  <div className="">
                    <Input
                      type="password"
                      name="confirmPassword"
                      placeholder="Password Confirmation"
                      onChange={handleChange}
                      value={values.confirmPassword}
                      autoComplete="off"
                      {...getFieldProps("confirmPassword")}
                      className={`form-control form-control-solid rounded-[4px] text-xl ${
                        touched.confirmPassword && errors.confirmPassword
                          ? "is-invalid"
                          : touched.confirmPassword && !errors.confirmPassword
                          ? "is-valid"
                          : ""
                      }`}
                    />
                    {touched.confirmPassword && errors.confirmPassword && (
                      <div>
                        <div className="text-red-300 text-[15px] ">
                          <span role="alert">{errors.confirmPassword}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-3">
        <SubmitButton
          submit={"submit"}
          type={"submit"}
          text={"Submit"}
          className="border border-gray-500 text-green-700 hover:border-green-700 hover:text-gray-500 p-2 rounded-md w-full "
        />
      </div>
    </form>
  );
}
