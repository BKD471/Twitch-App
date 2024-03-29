import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamForm extends React.Component {
  renderError({ touched, error }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    let errorClass = meta.error && meta.touched ? "error" : "";
    return (
      <div className={`field ${errorClass}`}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {/* <div>{formProps.values.title}</div> */}
        <div>{this.renderError(meta)}</div>
      </div>
    );
  };
  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field
          name="title"
          component={this.renderInput}
          label="Enter a title"
        />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter a description"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {};

  if (!formValues.title) errors.title = "Please enter a title";
  if (!formValues.description)
    errors.description = "Please enter a description";

  return errors;
};

export default reduxForm({
  form: "streamForm",
  validate,
})(StreamForm);
