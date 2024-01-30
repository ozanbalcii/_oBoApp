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
  const { setUserData, userRoles, userStatus} = useCustomerContext(CustomerContext);
  

  const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
  // const userSchema = Yup.object().shape({
  //   password: Yup.string()
  //     .matches(passwordRules, { message: "Please create a stronger password" })
  //     .required("Required"),
  //   confirmPassword: Yup.string()
  //     .oneOf([Yup.ref("password"), null], "Passwords must match")
  //     .required("Required"),
  // });

  const { handleSubmit, handleChange, values } = useFormik({
    // validationSchema: userSchema,
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
            phone: values.phone,
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
    <form onSubmit={handleSubmit} noValidate className=" px-24 py-5 ">
      <div className="text-darky">
        <div className="grid grid-rows-6 gap-3">
          <div className="col-span-1">
            <label className="fw-bold  mb-2 text-gray-300 ">Name</label>
          </div>
          <div className="col-span-5">
            <Input
              className='rounded-[4px]'
              type={"text"}
              name="name"
              placeholder="Name"
              onChange={handleChange}
              value={values.name}
            />
          </div>
          <div className="col-span-1">
            <label className="fw-bold  mb-2 text-gray-300 ">Surname</label>
          </div>
          <div className="col-span-5">
            <Input
              className='rounded-[4px]'
              type={"text"}
              name="surname"
              placeholder="Surname"
              onChange={handleChange}
              value={values.surname}
            />
          </div>

          <div className="col-span-1">
            <label className="fw-bold  mb-2 text-gray-300 ">Email</label>
          </div>
          <div className="col-span-5">
            <Input
              className='rounded-[4px]'
              type={"text"}
              name="email"
              placeholder="Email"
              onChange={handleChange}
              value={values.email}
            />

          </div>
          <div className="col-span-1">
            <label className="fw-bold  mb-2 text-gray-300 ">Phone</label>
          </div>
          <div className="col-span-5">
            <Input
              className='rounded-[4px]'
              type={"text"}
              name="phone"
              placeholder="Phone"
              onChange={handleChange}
              value={values.phone}
            />
          </div>
          <div className="col-span-1">
            <label className="fw-bold  mb-2 text-gray-300 ">Role</label>
          </div>
          <div className="col-span-5">
            <CustomSelect
              className='rounded-[20px]'
              name="role"
              placeholder="Role"
              onChange={handleChange}
              value={values.role}
              options={[{label: 'Empty', value: null}, ...userRoles]}
            />
          </div>

          <div className="col-span-1">
            <label className="fw-bold  mb-2 text-gray-300 ">Status</label>
          </div>
          <div className="col-span-5">
            <CustomSelect
              className='rounded-[20px]'
              name="status"
              placeholder="Status"
              onChange={handleChange}
              value={values.status}
              options={[{label: 'Empty', value: null}, ...userStatus]}
            />
          </div>
        </div>
      </div>
      <div className="pt-5">
        <SubmitButton
          submit={"submit"}
          type={"submit"}
          text={"Submit"}
          className="border border-gray-500 text-green-700 hover:border-green-700 hover:text-gray-500 p-2 rounded-md w-full"
        />
      </div>
    </form>
  );
}
