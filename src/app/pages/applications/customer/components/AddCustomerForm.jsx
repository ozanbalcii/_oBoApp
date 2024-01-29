import React from 'react'
import * as Yup from 'yup'
import Swal from 'sweetalert2'
import {useFormik} from 'formik'
import { CustomerContext, useCustomerContext } from '../../../../contexts/Customer/CustomerProvider';
import Input from '../../../../components/common/Input';

export default function AddCustomerForm() {
    const { setUserData } = useCustomerContext(CustomerContext);

    const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/
    const userSchema = Yup.object().shape({
      password: Yup.string()
        .matches(passwordRules, {message: 'Please create a stronger password'})
        .required('Required'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Required'),
    })

    const {handleSubmit,  handleChange, values, touched, errors, getFieldProps} = useFormik({
        validationSchema: userSchema,
        initialValues:{
            name: '',
            surname: '',
            email: '',
            phone: '',
            role: '',
            password: '',
            confirmPassword: '',
            status: '',
        },
        onSubmit: (values) => {
            setTimeout(() => {
                setUserData((prev) =>[
                    ...prev,
                    {
                        id: Math.floor(Math.random() * 10),
                        name: values.name,
                        surname: values.surname,
                        email: values.email,
                        phone: values.phone,
                        password: values,
                        confirmPassword: values.confirmPassword,
                    }
                ])
                Swal.fire({
                    icon: 'success',
                    text: 'Customer added successfully!',
                    showConfirmButton: !1,
                    cancelButtonText: 'Close',
                    showCancelButton: !0,
                    allowOutsideClick: !1,
                  })
            }, 600)
        }
    })
  return (
    <form onSubmit={handleSubmit} noValidate className='form px-7 py-5 ' >
        {/* SET SHOULD BE GRID */}
        {/* SET SHOULD BE GRID */}
        {/* SET SHOULD BE GRID */}
        {/* SET SHOULD BE GRID */}
        {/* SET SHOULD BE GRID */}
        <div className='text-gray-300 '>
        <label className='fw-bold  mb-2  required'>Name</label>
            <Input
            placeholder={'Name'}
            />
        </div>
    </form>
  )
}
