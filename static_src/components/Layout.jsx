import React from 'react';
import MessageField from './MessageField.jsx';
import ChatList from './ChatList.jsx';
import Header from './Header.jsx';
import '../styles/layout.css';


export default class Layout extends React.Component {

    render() {
        return (
            <div className="layout">
                <Header />
                <div className="layout-canvas">
                    <div className="layout-left-side">
                        <ChatList />
                    </div>
                    <div className="layout-right-side">
                        <MessageField />
                    </div>
                </div>
            </div>
        )
    }
}