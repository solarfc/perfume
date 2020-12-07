import React from "react";
import {Field, Form, Formik} from "formik";

const CartForm = () => {

    return (
        <Formik
            initialValues = {{
            username: '',
            phone: '',
            order: ''
        }}
            onSubmit={values => {
            setTimeout(() => {
                alert(JSON.stringify(values, null, 2))
            }, 500)
        }}
            render={({errors, touched}) => (
            <Form className="form-container">
                <label htmlFor="username">Username</label>
                <Field name="username" placeholder="Your name" type="text" />
                {
                    errors.username && touched.username && <div className="field-error">{errors.username}</div>
                }
                <label htmlFor="phone">Phone</label>
                <Field name="phone" placeholder="Your phone" type="tel"/>
                {
                    errors.phone && touched.phone && <div className="field-error">{errors.phone}</div>
                }
                <button type="submit">Отправить</button>
            </Form>
        )}
        />

    )
}

export default CartForm;