import React from 'react';
import Header from './Header';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import AddPlacePopup from './AddPlacePopup';
import Footer from './Footer';
import {
  api
} from '../utils/API';

import '../index.css';

function App() {
  // Хук, управляющий внутренним состоянием.
  const [isEditProfilePopupOpen, setisEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setisAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setisEditAvatarPopupOpen] = React.useState(false);

  const [userName, setUserName] = React.useState('');
  const [userDescription, setuserDescription] = React.useState('');
  const [userAvatar, setuserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {

    Promise.all([api.getUserInfo(), api.getInitialCards()]).then(
      ([userData, initialCards]) => {
        const myCards = initialCards.filter(item => item.owner._id === userData._id);
        setUserName(userData.name);
        setuserDescription(userData.about);
        setuserAvatar(userData.avatar);
        setCards(myCards);
      }
    )
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleEditProfileClick() {
    setisEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  function handleAddPlaceClick() {
    setisAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  function handleEditAvatarClick() {
    setisEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  function closeAllPopups() {
    setisEditProfilePopupOpen(false);
    setisAddPlacePopupOpen(false);
    setisEditAvatarPopupOpen(false);
  }

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

  return (
    <div className="root">
      <Header />
      {/*к названиям onEditProfile...onEditAvatar добавить слово Popup */}
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        cards={cards}
        userName={userName}
        userDescription={userDescription}
        userAvatar={userAvatar}
      />

      <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}
        onAddPlaceSubmit={handleAddPlaceApi} />

      /* popup Редактировать профиль */
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


      /* popup Обновить аватар */
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

      /* popup Открытие попапа с картинкой */
      <ImagePopup />
      <Footer />
    </div>

  );
}

export default App;
