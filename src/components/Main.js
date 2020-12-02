import React from 'react';
import Card from './Card';

function Main(props) {

    return (
        <>
            <div className="profile root__section">
                <div className="user-info">
                    <div className="user-info__photo" style={{ backgroundImage: `url(${props.userAvatar})` }} onClick={props.onEditAvatar}></div>
                    <div className="user-info__data">
                        <h1 className="user-info__name">{props.userName}</h1>
                        <p className="user-info__job">{props.userDescription}</p>
                    </div>
                    <button className="button_edit_profile" onClick={props.onEditProfile}>Edit</button>
                    <button className="button user-info__button" onClick={props.onAddPlace}>+</button>
                </div>
            </div>

            <div className="places-list root__section">
                {
                    props.cards.map(item =>
                        <Card key={item._id} card={item} />
                    )
                }
            </div>
        </>
    );
}

export default Main;