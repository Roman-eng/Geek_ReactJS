import React from 'react';
import PropTypes from "prop-types";
import MessageField from './MessageField.jsx';
import ChatList from './ChatList.jsx';
import Header from './Header.jsx';
import '../styles/layout.css';


export default class Layout extends React.Component {

    render() {
        return (
            <div className="layout">
                <Header chatId={ this.props.chatId } />
                <div className="layout-canvas">
                    <div className="layout-left-side">
                        <ChatList />
                    </div>
                    <div className="layout-right-side">
                        <MessageField chatId={ this.props.chatId } />
                    </div>
                </div>
            </div>
        )
    }
}

Layout.propTypes = {
    propTypes: {
        chatId: PropTypes.number,
    },
    defaultProps: {
        chatId: 1,
    }
}