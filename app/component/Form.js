import React, {Component} from 'react'
import {Field, reduxForm} from 'redux-form'

class SimpleForm extends React.Component {

    submitForm(values) {
        console.log("component");
        console.log(values);
        this.props.onSubmitForm(values)
    }

    render() {
        const {handleSubmit, pristine, submitting, reset} = this.props;
        return (
            <form onSubmit={handleSubmit(values => this.submitForm(values))}>
                <div>
                    <label>First Name</label>
                    <div>
                            <Field name="firstName" component="input" type="text" placeholder="First Name"/>
                    </div>
                </div>
                <div>
                    <label>Last Name</label>
                    <div>
                        <Field name="lastName" component="input" type="text" placeholder="Last Name"/>
                    </div>
                </div>
                <div>
                    <button type="submit" disabled={pristine || submitting}>Submit</button>
                    <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
                </div>
            </form>
        )

    }
};

export default reduxForm({
    form: 'simple'
})(SimpleForm)