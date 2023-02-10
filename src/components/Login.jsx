import React, {useState} from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import {withRouter} from "react-router-dom";

const SignupSchema = Yup.object().shape({
    login: Yup.string()
        .min(2, 'Минимум 2 символа')
        .max(20, 'Максимум 20 символов')
        .required('Обязательное поле'),
    password: Yup.string()
        .min(2, 'Минимум 2 символа')
        .max(20, 'Максимум 20 символов')
        .required('Обязательное поле'),
});

function Login({history}) {

    const [isLogin, setIsLogin] = useState(false)
    const [userData, setUserData] = useState({
        login: 'egor',
        password: '123'
    })

    // console.log(props)
    return (
        <div>
            <h1>Sign in</h1>
            <Formik
                initialValues={{
                    login: '',
                    password: '',
                }}
                validationSchema={SignupSchema}
                onSubmit={(values, actions) => {
                    if ( values.login === userData.login && values.password === userData.password) {
                        console.log(111)
                        localStorage.setItem('isLogin', 'true')
                        history.push('/main')
                        console.log(222)
                    } else {
                        console.log(333)
                        actions.setFieldError('global', 'Неправильный логин или пароль')
                    }
                }}
            >
                {({ errors, touched }) => (
                    <Form style={{display: "flex", flexDirection: "column", alignItems: "center", gap:'10px 0'}}>
                        <Field name="login" placeholder='login'/>
                        {errors.login && touched.login ? (
                            <div>{errors.login}</div>
                        ) : null}
                        <Field name="password" placeholder='password' />
                        {errors.password && touched.password ? (
                            <div>{errors.password}</div>
                        ) : null}
                        <button style={{cursor: "pointer"}} type="submit">Sign in</button>
                        {errors.global ? (
                            <div>{errors.global}</div>
                        ) : null}
                    </Form>
                )}
            </Formik>
        </div>
        )
}

export default withRouter(Login)