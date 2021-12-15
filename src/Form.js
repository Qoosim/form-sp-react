import React from 'react';

function Form() {
  const [values, setValues] = React.useState({
    firstName: '',
    lastName: '',
    email: ''
  })

  const [submitted, setSubmitted] = React.useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setValues(prevValues => {
      return {
        ...prevValues,
        [name]: value
      }
    })
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

 return (
    <div className="form-container">
      <form className="register-form" onSubmit={handleSubmit}>
        {/* Uncomment the next line to show the success message */}
        {/* <div class="success-message">Success! Thank you for registering</div> */}
        <input
          id="first-name"
          className="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
          value={values.firstName}
          onChange={handleChange}
        />
        {/* Uncomment the next line to show the error message */}
        {/* <span id="first-name-error">Please enter a first name</span> */}
        <input
          id="last-name"
          className="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={values.lastName}
          onChange={handleChange}
        />
        {/* Uncomment the next line to show the error message */}
        {/* <span id="last-name-error">Please enter a last name</span> */}
        <input
          id="email"
          className="form-field"
          type="text"
          placeholder="Email"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
        {/* Uncomment the next line to show the error message */}
        {/* <span id="email-error">Please enter an email address</span> */}
        <button className="form-field" type="submit">
          Register
        </button>
      </form>

      {submitted && <div className='success-message'>Success! Thank you for registering</div>}

    </div>
  );
}

export default Form;
