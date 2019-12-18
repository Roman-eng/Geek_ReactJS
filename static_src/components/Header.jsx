import React from 'react';
import PropTypes from "prop-types";

export default class Header extends React.Component {
    
    render() {
        return (
            <div className="header">
                <span style={ { fontSize: '20px' } }>Чат { this.props.chatId }</span>
            </div>
        )
    }
}

Header.propTypes = {
    propTypes: {
        chatId: PropTypes.number,
    },
    defaultProps: {
        chatId: 1,
    }
}

