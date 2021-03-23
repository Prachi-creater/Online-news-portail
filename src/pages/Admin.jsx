import React from 'react'
import Header from '../reuseableComponent/Header'
import InputField from '../reuseableComponent/InputField'
import Password from '../reuseableComponent/Password'
import SubmitButton from '../reuseableComponent/Button'
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import '../pages/style.css'
import { useFormik } from 'formik'
import * as yup from 'yup'

export default function Admin() {
    const schema = yup.object().shape({
        Username: yup.string().required("This field is required"),
        Password: yup.string().required("This field is required").min(8, "Password must be atleast 8 character"),

    })


    const formik = useFormik(
        {
            initialValues: {
                Username: "",
                Password: ""
            },
            validationSchema: schema,
            onSubmit: (data) => {
                console.log(data)
            }
        }
    )


    return (
        console.log(formik),
        <div className="App">
            <div className="Admin-div">
            <AssignmentIndIcon className="logo"/>
                <Header name="Admin Login"></Header>

                <form onSubmit={formik.handleSubmit}>

                <InputField lable="Username"
                    name="Username"
                    values={formik.values.username}
                    onChange={formik.handleChange}
                    handleChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    touched={formik.touched.Username}
                    error={formik.errors.Username} /><br></br>

                <Password Content="Password"
                    name="Password"
                    values={formik.values.Password}
                    onChange={formik.handleChange}
                    handleChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    touched={formik.touched.Password}
                    error={formik.errors.Password}></Password><br></br><br></br>

                <SubmitButton buttonContaint="Submit"></SubmitButton><br></br>
                </form>

            </div>

        </div>
    )
}