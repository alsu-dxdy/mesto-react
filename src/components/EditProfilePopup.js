import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditProfilePopup(props) {
    const { isOpen, onClose } = props; // isEditProfilePopupOpen, closeAllPopups соот-но

    // const inputNameRef = React.useRef();
    // const inputLinkRef = React.useRef();

    // function handleAddPlaceSubmit(e) {
    //     e.preventDefault();
    //     props.onAddPlaceSubmit({
    //         name: inputNameRef.current.value,
    //         link: inputLinkRef.current.value
    //     });
    //     inputNameRef.current.value = '';
    //     inputLinkRef.current.value = '';
    // }
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
    );
}
export default EditProfilePopup;