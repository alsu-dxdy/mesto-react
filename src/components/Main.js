import React from 'react';
import {
    api
} from '../utils/API';

function Main(props) {

    const [userName, setUserName] = React.useState('');
    const [userDescription, setuserDescription] = React.useState('');
    const [userAvatar, setuserAvatar] = React.useState('');

    React.useEffect(() => {
        api
            .getUserInfo()
            .then(userData => {
                setUserName(userData.name);
                setuserDescription(userData.about);
                setuserAvatar(userData.avatar);
            })
            .catch((err) => {
                alert(err.message);
            });
    });

    /* Значение можно задать сразу (без промежуточной переменной). 
     Для этого используются двойные фигурные скобки {{...}}: 
     внешние означают подстановку значения, 
     а внутренние относятся к объекту, описывающему набор стилей */

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

            <div className="places-list root__section"></div>

        </>
    );
}

export default Main;