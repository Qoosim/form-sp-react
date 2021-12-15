import React from 'react';

function Form() {
  const [values, setValues] = React.useState({
    firstName: '',
    lastName: '',
    email: ''
  })

  const [submitted, setSubmitted] = React.useState(false);
  const [valid, setValid] = React.useState(false);

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
    if (values.firstName && values.lastName && values.email) {
      setValid(true);
    }
    setSubmitted(true);
  }

 return (
    <div className="form-container">
      <form className="register-form" onSubmit={handleSubmit}>

        {submitted && valid && <div className="success-message" >Success! Thank you for registering</div>}

        <input
          id="first-name"
          className="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
          value={values.firstName}
          onChange={handleChange}
        />

        {submitted && !values.firstName && <span id="first-name-error">Please enter a first name</span>}

        <input
          id="last-name"
          className="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={values.lastName}
          onChange={handleChange}
        />

        {submitted && !values.lastName && <span id="last-name-error">Please enter a last name</span>}

        <input
          id="email"
          className="form-field"
          type="text"
          placeholder="Email"
          name="email"
          value={values.email}
          onChange={handleChange}
        />

        {submitted && !values.email && <span id="email-error">Please enter an email address</span>}

        <button className="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

export default Form;
