import SubmitForm from "../component/Form";
import PropTypes from 'prop-types';
import {connect} from "react-redux"
import {submitForm} from "../actions/form";


const mapDisPatchToProps = (dispatch) => {
    return {
        onSubmitForm: (values) => {
            console.log("container");
            console.log(values);
            dispatch(submitForm(values));
        }
    }
};

SubmitForm.propTypes = {
    onSubmitForm: PropTypes.func.isRequired
};

export default connect(() => {
    return {}
}, mapDisPatchToProps)(SubmitForm)

