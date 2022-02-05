import React from 'react'
import Layout from '../components/layout'
import TextError from '../components/TextError'
import { bodytext } from '../components/layout.module.css'
import { Formik, Form, Field, ErrorMessage } from 'formik'

export default () => (
    <Layout pageTitle="Contact">
        <Formik
        initialValues={{
            name: '',
            email: '',
            message: '',
        }}
        onSubmit={(values, actions) => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
        }}
        validate={values => {
            const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
            const errors = {};
            if(!values.name) {
              errors.name = 'Name Required'
            }
            if(!values.email || !emailRegex.test(values.email)) {
              errors.email = 'Valid Email Required'
            }
            if(!values.message) {
              errors.message = 'Message Required'
            }
            return errors;
          }}
        >
       
        <Form>
            <label class={bodytext} htmlFor="name">Name: </label>
            <Field name="name" />
            <ErrorMessage name="name" component={TextError} /><br />
    
            <label class={bodytext} htmlFor="email">Email: </label>
            <Field name="email" />
            <ErrorMessage name="email" component={TextError} /><br />
    
            <label class={bodytext} htmlFor="message">Message: </label>
            <Field name="message" component="textarea"/>
            <ErrorMessage name="message" component={TextError} /><br />
    
            <button type="submit">Send</button>
        </Form>

        </Formik>
    </Layout>
  )
