import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function Main() {
    function handleEditAvatarClick() {
        document.querySelector('.popup_type_avatar').classList.add('popup_is-opened');
    }

    function handleEditProfileClick() {
        document.querySelector('.popup_type_edit-profile').classList.add('popup_is-opened');
    }

    function handleAddPlaceClick() {
        document.querySelector('.popup_type_add-place').classList.add('popup_is-opened');
    }

    return (
        <>
            <div className="profile root__section">
                <div className="user-info">
                    <div className="user-info__photo" onClick={handleEditAvatarClick}></div>
                    <div className="user-info__data">
                        <h1 className="user-info__name">Alsu</h1>
                        <p className="user-info__job">Student</p>
                    </div>
                    <button className="button_edit_profile" onClick={handleEditProfileClick}>Edit</button>
                    <button className="button user-info__button" onClick={handleAddPlaceClick}>+</button>
                </div>
            </div>

            <div className="places-list root__section"></div>

            /* popup Новое место */
            <PopupWithForm
                title="Новое место"
                name="add-place"
                children={
                    <form className="popup__form" name="new_place">
                        <div className="input-container">
                            <input
                                required
                                type="text"
                                name="name"
                                className="popup__input popup__input_type_name"
                                placeholder="Название"
                                minLength="2"
                                maxLength="30"
                            />
                            <span className="input__error"></span>
                        </div>
                        <div className="input-container">
                            <input
                                required
                                type="url"
                                name="link"
                                className="popup__input popup__input_type_link-url"
                                placeholder="Ссылка на картинку"
                            />
                            <span className="input__error"></span>
                        </div>
                        <button className="button popup__button button_disabled">+</button>
                    </form>
                } />

            /* popup Редактировать профиль */
            <PopupWithForm
                title="Редактировать профиль"
                name="edit-profile"
                children={<form className="popup__form popup__form_edit" name="new_edit">
                    <div className="input-container">
                        <input
                            required
                            type="text"
                            name="username"
                            className="popup__input popup__input_type_name"
                            placeholder="Имя"
                            minlength="2"
                            maxlength="30"
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
                            minlength="2"
                            maxlength="30"
                        />
                        <span className="input__error"></span>
                    </div>
                    <button
                        type
                        className="button popup__button_save popup__button_save_new_info"
                    >
                        Сохранить
                </button>
                </form>} />

            /* popup Обновить аватар */
            <PopupWithForm
                title="Обновить аватар"
                name="avatar"
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
                        <button type className="button popup__button_save_new_info">
                            Сохранить
            </button>
                    </form>
                } />

            /* popup Открытие попапа с картинкой */
            <ImagePopup />

        </>
    );
}

export default Main;