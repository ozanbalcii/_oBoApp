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
  

  const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/
  const customerSchema = Yup.object().shape({
    password: Yup.string()
      .matches(passwordRules, {message: 'Please create a stronger password'})
      .required('Required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Required'),
  })

  const { handleSubmit, handleChange, values, touched, errors, getFieldProps } = useFormik({
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

          <div className="col-span-">
            <label className="fw-bold  mb-2 text-gray-300 ">Password</label>
          </div>
          <div className="col-span-5">
          <Input
              type='password'
              name='password'
              placeholder='Password'
              onChange={handleChange}
              value={values.password}
              autoComplete='off'
              {...getFieldProps('password')}
              className={`form-control form-control-solid  ${
                touched.password && errors.password
                  ? 'is-invalid'
                  : touched.password && !errors.password
                  ? 'is-valid'
                  : ''
              }`}
            />
             {touched.password && errors.password && (
              <div className='text-red-300 '>
                <div className='fv-help-block'>
                  <span role='alert'>{errors.password}</span>
                </div>
              </div>
            )}
          </div>

          <div className="col-span-1">
            <label className="fw-bold  mb-2 text-gray-300 ">Password Confirmation</label>
          </div>
          <div className="col-span-5">
          <Input
              type='password'
              name='confirmPassword'
              placeholder='Password Confirmation'
              onChange={handleChange}
              value={values.confirmPassword}
              autoComplete='off'
              {...getFieldProps('confirmPassword')}
              className={`form-control form-control-solid  ${
                touched.confirmPassword && errors.confirmPassword
                  ? 'is-invalid'
                  : touched.confirmPassword && !errors.confirmPassword
                  ? 'is-valid'
                  : ''
              }`}
            />
             {touched.confirmPassword && errors.confirmPassword && (
              <div className='fv-plugins-message-container'>
                <div className='fv-help-block text-red-300'>
                  <span role='alert'>{errors.confirmPassword}</span>
                </div>
              </div>
            )}
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
