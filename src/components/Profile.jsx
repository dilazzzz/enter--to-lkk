import React, {useState} from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import {withRouter} from "react-router-dom";

const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    lastName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
});
 const Profile = ({history}) => {


     const [isRedact, setIsRedact] = useState(false)
     const [userName, setUserName] = useState(localStorage.getItem('userName') || '')
     const [userSurname, setUserSurname] = useState(localStorage.getItem('userSurname') || '')
     const [userMail, setUserMail] = useState(localStorage.getItem('userMail') || '')

     return (

     <div style={{display: "flex", flexDirection: "column", alignItems: "start", width:1000, margin: "auto"}}>
        <h1 style={{textAlign: "start"}}>Личный кабинет</h1>
        <Formik
         initialValues={{
             firstName: userName,
             lastName: userSurname,
             email: userMail,
         }}
         validationSchema={SignupSchema}
         onSubmit={values => {
             console.log(values);
             localStorage.setItem('userName', values.firstName)
             localStorage.setItem('userSurname', values.lastName)
             localStorage.setItem('userMail', values.email)
             setIsRedact(false)
         }}
        >
         {({ errors, touched, resetForm, submitForm }) => {
             const cancelChange = () => {
                 resetForm()
             }

             return (
                 <Form style={{display: "flex", flexDirection: "column"}}>
                     <Field name="firstName" disabled={!isRedact}/>
                     {errors.firstName && touched.firstName ? (
                         <div>{errors.firstName}</div>
                     ) : null}
                     <Field name="lastName" disabled={!isRedact}/>
                     {errors.lastName && touched.lastName ? (
                         <div>{errors.lastName}</div>
                     ) : null}
                     <Field name="email" type="email" disabled={!isRedact}/>
                     {errors.email && touched.email ? <div>{errors.email}</div> : null}
                     <button
                         type="button"
                         onClick={() => {
                            if (!isRedact) {
                                setIsRedact(!isRedact)
                            } else {
                                submitForm()
                            }
                         }}>
                         {isRedact ?
                             'Save'
                             :
                             'Redact'
                         }
                     </button>
                     {isRedact ?
                         <button type="button" onClick={cancelChange}>Cancel</button>
                         :
                         ''
                     }
                     {!isRedact ?
                         <button onClick={() => history.goBack()}>Back</button>
                         :
                         ''
                     }
                 </Form>
             )
         }}
        </Formik>
    </div>
 );
 }



 export default withRouter(Profile)