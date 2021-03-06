import React from 'react';

// runs typechecking on components to make sure its valid
import Proptypes from 'prop-types';

// javascript dates library 
import { format } from 'date-fns';

const ChatSession = props => {
    const { messages } = props;
    // maps through the messages and adds the latest ones with time stamp
    return messages.map(message => {
        const time = format(new Date(`${message.updatedAt}`), 'HH:mm');

        return (
            <li className="message" key={message.id}>
                <div>
                    <span className="user-id">{message.senderId}</span>
                    <span>{message.text}</span>
                </div>
                <span className="message-time">{time}</span>
            </li>
        );
    });
};


// this requires that an array is indeed returned
ChatSession.propTypes = {
    messages: Proptypes.arrayOf(Proptypes.object).isRequired,
};

export default ChatSession;