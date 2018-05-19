import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Message } from 'semantic-ui-react';

const ConfirmEmailMessage = () => (
    <Message info>
        <Message.Header>Please, verify your email to unlock awesomeness</Message.Header>        
    </Message>
);


ConfirmEmailMessage.propTypes = {

};

export default ConfirmEmailMessage;