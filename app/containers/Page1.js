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

@reduxForm(
  {
    form: 'page',
    fields,
    validate,
  },
)
export default class Page1 extends Component {
  static propTypes = {
    fields: PropTypes.object.isRequired,
  }

  errorMessageElement(field) {
    let errorNode = ''
    if (field['error']) {
      errorNode = <div className="validation-label">{field['error']}</div>;
    }
    return errorNode;
  }

  submit(values, dispatch) {
    console.log('Submit', values);
  }

  render() {
    const {fields: {firstName, lastName, email}, resetForm, handleSubmit, submitting} = this.props;
    return (
      <div className="container">
        <div className="row _center">
          <div className="D-6 _left">
            <h2>Redux form</h2>
            <form onSubmit={handleSubmit(this.submit)}>
              <div className="box-form-input">
                <label className="form-label">First Name</label>
                <div className="wrap-form-input error">
                  <input type="text" className="form-input" placeholder="First Name" {...firstName}/>
                  {this.errorMessageElement(firstName)}
                </div>
              </div>
              <div className="box-form-input">
                <label className="form-label">Last Name</label>
                <div className="wrap-form-input error">
                  <input type="text" className="form-input" placeholder="Last Name" {...lastName}/>
                  {this.errorMessageElement(lastName)}
                </div>
              </div>
              <div className="box-form-input">
                <label className="form-label">Email</label>
                <div className="wrap-form-input error">
                  <input type="email" className="form-input" placeholder="Email" {...email}/>
                  {this.errorMessageElement(email)}
                </div>
              </div>
              <div className="button-inline">
                <button type="submit" className="button blue" disabled={submitting}>
                  {submitting ? <i/> : <i/>}Submit
                </button>
                <button type="button" className="button-outline" disabled={submitting} onClick={resetForm}>
                  Clear Values
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
