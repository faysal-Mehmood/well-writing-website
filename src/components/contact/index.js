import React from "react";
import { Formik } from 'formik';
import axios from 'axios';
import './styles.scss';

const Index =
  () => {
    return (
      <>
        <div className='contact_form'>
          <div className='contact_from_title'>
            <h2 className='header-one'>
              DROP
              A
              LINE.
            </h2>
            <div className='heading-ver-line' />
            <p className='heading-two'>
              WE
              WILL
              BE
              GLAD
              TO
              HEAR
              FROM
              YOU
              ABOUT
              A
              NEW
              EXCITING
              PROJECT!
            </p>
          </div>
          <div className='contact_main_form'>
            <Formik
              initialValues={{
                name: '',
                email:
                  '',
                message:
                  '',
                phone:
                  '',
              }}
              validate={values => {
                const errors =
                  {};
                if (
                  !values.name
                ) {
                  errors.name =
                    'Required';
                }
                if (
                  !values.email
                ) {
                  errors.email =
                    'Required';
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                    values.email
                  )
                ) {
                  errors.email =
                    'Invalid email address';
                }
                return errors;
              }}
              onSubmit={(
                values,
                {
                  setSubmitting,
                }
              ) => {
                axios
                  .post(
                    'https://www.imdomainrouter.com/form_submit',
                    {
                      xprs_mail_to:
                        'wellwrittenorders@gmail.com',
                      xprs_site_name:
                        'www.well-written-online.com',
                      Name: 'Name',
                      Email:
                        'Email',
                      Telephone:
                        'Telephone',
                      Message:
                        'Message',
                      fields_order:
                        'Name&&&Email&&&Telephone&&&Message',
                      separator:
                        '&&&',
                    }
                  )
                  .then(
                    function (
                      response
                    ) {
                      console.log(
                        response
                      );
                    }
                  )
                  .catch(
                    function (
                      error
                    ) {
                      console.log(
                        error
                      );
                    }
                  );
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
              }) => (
                <form
                  onSubmit={
                    handleSubmit
                  }
                >
                  <div className='contact_main'>
                    <input
                      type='name'
                      name='name'
                      placeholder='Name'
                      onChange={
                        handleChange
                      }
                      onBlur={
                        handleBlur
                      }
                      value={
                        values.name
                      }
                      className='contact_form_input1'
                    />
                    {errors.name &&
                      touched.name &&
                      errors.name}
                  </div>

                  <div className='contact_main'>
                    <input
                      type='email'
                      name='email'
                      onChange={
                        handleChange
                      }
                      onBlur={
                        handleBlur
                      }
                      value={
                        values.email
                      }
                      placeholder='Email'
                      className='contact_form_input1'
                    />
                    {errors.email &&
                      touched.email &&
                      errors.email}
                  </div>

                  <div className='contact_main'>
                    <input
                      type='text '
                      name='phone'
                      placeholder='Telephone'
                      onChange={
                        handleChange
                      }
                      onBlur={
                        handleBlur
                      }
                      value={
                        values.phone
                      }
                      className='contact_form_input1'
                    />
                    {errors.phone &&
                      touched.phone &&
                      errors.phone}
                  </div>

                  <div className='contact_main'>
                    <input
                      type='text '
                      name='message'
                      placeholder='Message'
                      onChange={
                        handleChange
                      }
                      onBlur={
                        handleBlur
                      }
                      value={
                        values.message
                      }
                      className='contact_form_input1'
                    />
                    {errors.message &&
                      touched.message &&
                      errors.message}
                  </div>

                  <button
                    className='contact_form_button'
                    type='submit'
                    disabled={
                      isSubmitting
                    }
                  >
                    Submit
                  </button>
                </form>
              )}
            </Formik>
          </div>
        </div>
        {/* <div className="contcat-iframe">
      <iframe src="https://us6.list-manage.com/contact-form?u=07bca3f7895bbbe1e7211e2d0&form_id=c3a8b49710e803548a4663d9943fc20a" />
      </div> */}
      </>
    );
  };

export default Index;
