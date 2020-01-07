import React from 'react';
import Proptypes from 'prop-types';
import { retrieveImage } from '../firebase_chatroom';

const RoomList = props => {
    const { rooms, currentRoom, connectToRoom, currentUser } = props;
    const roomList = rooms.map(room => {

        // labels individiual rooms and chats with emoticons
        const roomIcon = !room.isPrivate ? '😸' : '🔒';
        // if room id equals active room show as active
        const isRoomActive = room.id === currentRoom.id ? 'active' : '';

        return (
            <div>
                <li
                    className={isRoomActive}
                    key={room.id}
                    onClick={() => connectToRoom(room.id)}
                >
                    <span className="room-icon">{roomIcon}</span>
                    {room.customData && room.customData.isDirectMessage ? (
                        <span className="room-name">
                            {room.customData.userIds.filter(id => id !== currentUser.id)[0]}
                        </span>
                    ) : (
                            <span className="room-name">{room.name}</span>
                        )}
                </li>
            </div>
        );
    });
    return (
        <div className="rooms">
            <ul className="chat-rooms">{roomList}</ul>
            {/* retrieve images from firebase on click */}
            <button id="mybtn" onClick={() => retrieveImage('photo-1482066490729-6f26115b60dc.jpeg', 'img01')}>Renton Adoptions</button>
            <button id="mybtn" onClick={() => retrieveImage('download.jpeg', 'img01')}>Bellevue Adoptions</button>
            <button id="mybtn" onClick={() => retrieveImage('photo-1482066490729-6f26115b60dc.jpeg', 'img01')}>Issaquah Adoptions</button>


            <div id="myModal" class="modal">
                <span class="close">&times;</span>
                <img class="modal-content" id="img01" />
                <div id="caption"></div>
            </div>
        </div>
    );
};

RoomList.propTypes = {
    rooms: Proptypes.array.isRequired,
    currentRoom: Proptypes.object.isRequired,
    connectToRoom: Proptypes.func.isRequired,
    currentUser: Proptypes.object.isRequired,
};

export default RoomList;