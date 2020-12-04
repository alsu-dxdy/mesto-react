import React from 'react';
import Card from './Card';

function Main(props) {
    const {
        onEditAvatar, onEditProfile, onAddPlace,
        onCardClick, cards,
        userAvatar, userName, userDescription,
    } = props;

    return (
        <>
            <div className="profile root__section">
                <div className="user-info">
                    <div className="user-info__photo" style={{ backgroundImage: `url(${userAvatar})` }} onClick={onEditAvatar}></div>
                    <div className="user-info__data">
                        <h1 className="user-info__name">{userName}</h1>
                        <p className="user-info__job">{userDescription}</p>
                    </div>
                    <button className="button_edit_profile" onClick={onEditProfile}>Edit</button>
                    <button className="button user-info__button" onClick={onAddPlace}>+</button>
                </div>
            </div>

            <div className="places-list root__section">
                {
                    cards.map(item =>
                        <Card key={item._id} card={item} onCardClick={onCardClick} />
                    )
                }
            </div>
        </>
    );
}

export default Main;