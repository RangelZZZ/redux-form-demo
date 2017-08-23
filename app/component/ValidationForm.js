import React from "react"
import {Field, reduxForm} from "redux-form";

const required = value => value ? undefined : "can't  empty";
const maxLength = (max, value) => value && value.length > 15 ? `Must be ${max} characters or less` : undefined;

const renderField = ({
                         input,
                         label,
                         type,
                         meta: {touched, error, warning}
                     }) => (
    <div>
            <label>
            {label}
        </label>
        <div>
            <input {...input} type={type} placeholder={type}/>
            {touched && ((error && <span>{error}</span> || warning && <span>{warning}</span>))}
        </div>
    </div>
);

const ValidateForm = (props) => {
    const {handleSubmit, pristine, reset, submitting} = props;
    /* pristine if the value as the initial state*/

    return <form onSubmit={handleSubmit(values => console.log(values))}>
        <Field name="username"
               type="text"
               component={renderField}
               validate={[required, maxLength]}
        />
        <div>
            <button type="submit" disabled={submitting}>Submit</button>
            <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
        </div>
    </form>

};

export default reduxForm({
    form: "validateForm",       /*为什么要这个东西*/

})(ValidateForm)



