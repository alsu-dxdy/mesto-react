import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card(props) {
    const { card, onCardClick, onCardLike, onCardDelete } = props;
    const currentUser = React.useContext(CurrentUserContext);
    // Определяем, являемся ли мы владельцем текущей карточки
    const isOwn = card.owner._id === currentUser._id;

    // Создаём переменную, которую после зададим в `className` для кнопки удаления
    const cardDeleteButtonClassName = (
        `place-card__delete-icon ${isOwn ? 'place-card__delete-icon_visible' : ''}`
    );

    // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    // Создаём переменную, которую после зададим в `className` для кнопки лайка
    const cardLikeButtonClassName = `place-card__like-icon ${isLiked ? 'place-card__like-icon_liked' : ''}`;

    function handleClick() {
        onCardClick(card);
    }

    function handleLikeClick() {
        onCardLike(card);
    }

    function handleDeleteClick() {
        onCardDelete(card)
    }

    return (
        <div className="place-card">
            <div className="place-card__image" onClick={handleClick} style={{ backgroundImage: `url(${card.link})` }}>
                <button onClick={handleDeleteClick} className={cardDeleteButtonClassName}></button>
            </div>
            <div className="place-card__description">
                <h3 className="place-card__name">{card.name}</h3>
                <div className="place-card__right-container">
                    <button onClick={handleLikeClick} className={cardLikeButtonClassName} />
                    <p className="place-card__count">{card.likes.length}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;