
import React ,{useState } from 'react'
import { Formik, Field, Form } from 'formik';
function Loginform() {
  return (
    <div>
<h1>Sign Up</h1>
    <Formik
      initialValues={{
        email: '',
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
      <Form>
        <label htmlFor="email">Email</label>
        <Field
          id="email"
          name="email"
          placeholder="jane@acme.com"
          type="email"
        />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
    
    </div>

  )
}

export default Loginform;