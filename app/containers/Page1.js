import React, { Component, PropTypes } from 'react'
import { reduxForm } from 'redux-form'

export const fields = ['firstName', 'lastName', 'email'];

const validate = values => {
  const errors = {}
  if (!values.firstName) {
    errors.firstName = 'Required'
  } else if (values.firstName.length > 15) {
    errors.firstName = 'Must be 15 characters or less'
  }

  if (!values.lastName) {
    errors.lastName = 'Required'
  } else if (values.lastName.length > 15) {
    errors.lastName = 'Must be 15 characters or less'
  }

  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  return errors
}

class Page1 extends Component {
  static propTypes = {
    fields: PropTypes.object.isRequired,
  }

  errorMessageElement(field) {
    if (field['error']) {
      return <div className='error'>{field['error']}</div>
    }
  }
  submit(values, dispatch){
    console.log("sad", values);
  }
  render() {
    console.log("PAGE1", this.props);
    const {fields: {firstName, lastName, email}, resetForm, handleSubmit, submitting} = this.props;
    return (
      <div className="container">
        <div className="row text-center">
          <div className="D-6 text-left">
            <h2>Redux form</h2>
            <form onSubmit={handleSubmit(this.submit)}>
              <div className="form-group">
                <label>First Name</label>
                <input type="text" className="form-control" placeholder="First Name" {...firstName}/>
                {this.errorMessageElement(firstName)}
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input type="text" className="form-control" placeholder="Last Name" {...lastName}/>
                {this.errorMessageElement(lastName)}
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" className="form-control" placeholder="Email" {...email}/>
                {this.errorMessageElement(email)}
              </div>
              <button type="submit" className="btn btn-primary" disabled={submitting}>
                {submitting ? <i/> : <i/>} Submit
              </button>
              <button type="button" className="btn" disabled={submitting} onClick={resetForm}>
                Clear Values
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default reduxForm(
  {
    form: 'page',
    fields,
    validate,
  },
)(Page1)
