import React, { useState } from 'react';

function Form() {
  const [ formValues, setFormValues ] = useState({
    firstName: '',
    lastName: '', // Add all input starting values here
    email: ''
  });
  const handleChange = e => {
    // For this to work, each input must have a "name" attribute
    // set to the same value as the key in state that holds 
    // that inputs value
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  }
  const handleSubmit = e => {
    e.preventDefault();

    console.log('Form submitted with the following data:', formValues);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-control">
        <label htmlFor="fName">First Name</label>
        <input type="text" id="fName" name="firstName" value={formValues.firstName} onChange={handleChange}/>
      </div>
      <div className="form-control">
        <label htmlFor="lName">Last Name</label>
        <input type="text" id="lName" name="lastName" value={formValues.lastName} onChange={handleChange} />
      </div>
      <div className="form-control">
        <label htmlFor="email">Email</label>
        <input type="text" id="email" name="email" value={formValues.email} onChange={handleChange} />
      </div>
      <div className="form-control">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default Form;
