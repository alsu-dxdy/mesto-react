import React, { useState } from 'react';
import Header from './Header';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import AddPlacePopup from './AddPlacePopup';
import Footer from './Footer';
import {
  api
} from '../utils/API';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

import '../index.css';

function App() {
  // Хук, управляющий внутренним состоянием.
  const [isEditProfilePopupOpen, setisEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setisAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setisEditAvatarPopupOpen] = useState(false);

  // <CurrentUserContext.Provider value={currentUser}>
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = useState([]);

  const [selectedCard, setSelectedCard] = useState({
    isImageOpen: false,
    link: '',
    name: '',
  });

  React.useEffect(() => {

    Promise.all([api.getUserInfo(), api.getInitialCards()]).then(
      ([userData, initialCards]) => {
        const myCards = initialCards.filter(item => item.owner._id === userData._id);
        setCurrentUser(userData);
        setCards(myCards);
      }
    )
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // Добавление новой карточки
  function handleAddPlaceApi(data) {
    api.addCard(data.name, data.link)
      .then((newCardData) => {
        setCards([...cards, newCardData]);
        closeAllPopups()
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
  }

  // Лайк/дизлайк карточки
  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      // Формируем новый массив на основе имеющегося, подставляя в него новую карточку
      const newCards = cards.map((c) => c._id === card._id ? newCard : c);
      // Обновляем стейт
      setCards(newCards);
    });
  }

  /*Открытие попапов*/
  function handleEditProfileClick() {
    setisEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  function handleAddPlaceClick() {
    setisAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  function handleEditAvatarClick() {
    setisEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  function handleCardClick(card) {
    const { link, name } = card;
    setSelectedCard({ isImageOpen: true, link: link, name: name });
  }

  /*Закрытие попапов*/
  function closeAllPopups() {
    setisEditProfilePopupOpen(false);
    setisAddPlacePopupOpen(false);
    setisEditAvatarPopupOpen(false);
    setSelectedCard({
      isImageOpen: false,
      link: '',
      name: '',
    });
  }

  // Закрытие попапа с формой: клик вне контента
  function closePopupFormClickOutContent(e) {
    if (e.target.closest('.popup__content') == null) {
      closeAllPopups();
    }
  }

  // Закрытие попапа с Imagepopup: клик вне контента
  function closeImagePopupClickOutContent(e) {
    if (e.target.closest('.popup_image_container') == null) {
      closeAllPopups();
    }
  }

  return (
    <div className="root">
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        {/*к названиям onEditProfile...onEditAvatar добавить слово Popup */}
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          cards={cards}
          onCardClick={handleCardClick}
          onCardLike={handleCardLike}
        />

        <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}
          onAddPlaceSubmit={handleAddPlaceApi} closePopupFormClickOutContent={closePopupFormClickOutContent} />

        {/* popup Редактировать профиль */}
        <PopupWithForm
          title="Редактировать профиль"
          name="edit-profile"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          children={<form className="popup__form popup__form_edit" name="new_edit">
            <div className="input-container">
              <input
                required
                type="text"
                name="username"
                className="popup__input popup__input_type_name"
                placeholder="Имя"
                minLength="2"
                maxLength="30"
              />
              <span className="input__error"></span>
            </div>
            <div className="input-container">
              <input
                required
                type="text"
                name="job"
                className="popup__input popup__input_type_job"
                placeholder="О себе"
                minLength="2"
                maxLength="30"
              />
              <span className="input__error"></span>
            </div>
            <button
              className="button popup__button_save popup__button_save_new_info"
            >
              Сохранить
                </button>
          </form>} />


        {/* popup Обновить аватар */}
        <PopupWithForm
          title="Обновить аватар"
          name="avatar"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          children={
            <form className="popup__form popup__form_avatar" name="new_avatar">
              <div className="input-container">
                <input
                  required
                  type="url"
                  name="avatar"
                  className="popup__input popup__input_type_link-url"
                  placeholder="Ссылка на аватар"
                />
                <span className="input__error"></span>
              </div>
              <button className="button popup__button_save_new_info">
                Сохранить
            </button>
            </form>
          } />

        {/* popup Открытие попапа с картинкой */}
        <ImagePopup
          name={selectedCard.name}
          link={selectedCard.link}
          onClose={closeAllPopups}
          isOpen={selectedCard.isImageOpen}
          closeImagePopupClickOutContent={closeImagePopupClickOutContent}
        />
        <Footer />
      </CurrentUserContext.Provider>
    </div>

  );
}

export default App;
