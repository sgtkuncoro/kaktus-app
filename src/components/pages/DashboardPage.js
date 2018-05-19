import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import ConfirmEmailMessage from '../messages/ConfirmEmailMessage';

const DashboardPage = ({isConfirmed}) => (
    <div>
        {!isConfirmed && <ConfirmEmailMessage/>}        
    </div>
)

DashboardPage.prototType = {
    isConfirmed: PropTypes.bool.isRequired,
}

function mapStateToProps(state){
    return {
        /**
         * @description "!!state.user.confirmed" if that value undefined this
         * code will return false and if defined thus is will be returned
         * value true (just convert in boolean) for avoid warning course
         * undefined value
         */
        isConfirmed: !!state.user.confirmed
    }
}
export default connect(mapStateToProps)(DashboardPage); 