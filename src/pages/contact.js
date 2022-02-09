import React from 'react'
import {graphql} from 'gatsby';
import Layout from '../components/layout'
import TextError from '../components/TextError'
import { bodytext, heading } from '../components/layout.module.css'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import {Trans} from 'gatsby-plugin-react-i18next'

//export default () => (
  const ContactPage = () => {
    return (
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
          <h1 className={heading}><Trans>Contact</Trans></h1>
            <label className={bodytext} htmlFor="name"><Trans>Name</Trans>: </label>
            <Field name="name" />
            <ErrorMessage name="name" component={TextError} /><br />
    
            <label className={bodytext} htmlFor="email"><Trans>Email</Trans>: </label>
            <Field name="email" />
            <ErrorMessage name="email" component={TextError} /><br />
    
            <label className={bodytext} htmlFor="message"><Trans>Message</Trans>: </label>
            <Field name="message" component="textarea"/>
            <ErrorMessage name="message" component={TextError} /><br />
    
            <button type="submit"><Trans>Send</Trans></button>
        </Form>

        </Formik>
    </Layout>
    )
  }
  
         export default ContactPage

  export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;