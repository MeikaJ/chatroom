import React from 'react';
import Proptypes from 'prop-types';


// maps throught the lists of users
const RoomUsers = props => {
    const { roomUsers, sendDM, currentUser } = props;
    const users = roomUsers.map(user => {
        return (
            <li className="room-member" key={user.id}>
                <div>
                    {/* shows rather or not the user presencce is actice or not */}
                    <span className={`presence ${user.presence.state}`} />
                    <span>{user.name}</span>
                </div>
                {currentUser.id !== user.id ? (
                    // button to send _____ a Dm
                    <button
                        onClick={() => sendDM(user.id)}
                        title={`Send ${user.name} a direct message`}
                        className="send-dm"
                    >
                        +
              </button>
                ) : null
                }
            </li >
        );
    });

    return (
        <div className="room-users">
            <ul>{users}</ul>
        </div>
    );
};

RoomUsers.propTypes = {
    roomUsers: Proptypes.array.isRequired,
    sendDM: Proptypes.func.isRequired,
    currentUser: Proptypes.object.isRequired,
};


export default RoomUsers;