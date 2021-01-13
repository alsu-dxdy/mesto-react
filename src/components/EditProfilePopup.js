import React, { useState } from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditProfilePopup(props) {
    const { isOpen, onClose } = props; // isEditProfilePopupOpen, closeAllPopups соот-но

    const [name, setName] = React.useState('');
    const [description, setDescription] = useState('');

    // Подписка на контекст
    const currentUser = React.useContext(CurrentUserContext);

    // После загрузки текущего пользователя из API
    // его данные будут использованы в управляемых компонентах.
    React.useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [currentUser]);

    function handleInputChange(e) {
        e.target.name === 'username'
            ? setName(e.target.value)
            : setDescription(e.target.value);
    }

    return (
        /* popup Редактировать профиль */
        <PopupWithForm
            title="Редактировать профиль"
            name="edit-profile"
            isOpen={isOpen}
            onClose={onClose}
            children={<form className="popup__form popup__form_edit" name="new_edit">
                <div className="input-container">
                    <input
                        required
                        type="text"
                        value={name || ''}
                        name="username"
                        className="popup__input popup__input_type_name"
                        placeholder="Имя"
                        minLength="2"
                        maxLength="30"
                        onChange={handleInputChange}
                    />
                    <span className="input__error"></span>
                </div>
                <div className="input-container">
                    <input
                        required
                        type="text"
                        value={description || ''}
                        name="job"
                        className="popup__input popup__input_type_job"
                        placeholder="О себе"
                        minLength="2"
                        maxLength="30"
                        onChange={handleInputChange}
                    />
                    <span className="input__error"></span>
                </div>
                <button
                    className="button popup__button_save popup__button_save_new_info"
                >
                    Сохранить
                </button>
            </form>} />
    );
}
export default EditProfilePopup;