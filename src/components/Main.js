import React from 'react';
import Card from './Card';
import {
    api
} from '../utils/API';

function Main(props) {

    const [userName, setUserName] = React.useState('');
    const [userDescription, setuserDescription] = React.useState('');
    const [userAvatar, setuserAvatar] = React.useState('');
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {

        Promise.all([api.getUserInfo(), api.getInitialCards()]).then(
            ([userData, initialCards]) => {
                setUserName(userData.name);
                setuserDescription(userData.about);
                setuserAvatar(userData.avatar);
                setCards(initialCards);
            }
        )
            .catch((err) => {
                console.log(err);
            });
    });

    const firstTenCards = cards.slice(0, 10);
    console.log(firstTenCards);
    return (
        <>
            <div className="profile root__section">
                <div className="user-info">
                    <div className="user-info__photo" style={{ backgroundImage: `url(${userAvatar})` }} onClick={props.onEditAvatar}></div>
                    <div className="user-info__data">
                        <h1 className="user-info__name">{userName}</h1>
                        <p className="user-info__job">{userDescription}</p>
                    </div>
                    <button className="button_edit_profile" onClick={props.onEditProfile}>Edit</button>
                    <button className="button user-info__button" onClick={props.onAddPlace}>+</button>
                </div>
            </div>

            <div className="places-list root__section">
                {
                    firstTenCards.map(item =>
                        <Card key={item._id} card={item} />
                    )
                }
            </div>
        </>
    );
}

export default Main;