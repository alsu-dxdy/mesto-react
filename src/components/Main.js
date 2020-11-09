import close from '../images/close.svg';

function Main() {
    function handleEditAvatarClick() {
        document.querySelector('.popup_avatar').classList.add('popup_is-opened');
    }

    function handleEditProfileClick() {
        document.querySelector('.popup_edit').classList.add('popup_is-opened');
    }

    function handleAddPlaceClick() {
        document.querySelector('.popup_add-place').classList.add('popup_is-opened');
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
            <div className="popup popup_add-place">
                <div className="popup__content">
                    <img
                        src={close}
                        alt=""
                        className="popup__close"
                    />
                    <h3 className="popup__title">Новое место</h3>
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
                        <button type className="button popup__button button_disabled">+</button>
                    </form>
                </div>
            </div>

            /* popup Редактировать профиль. К используемым переменным добавлен модификатор edit */
            <PopupWithForm />


            /* popup Открытие попапа с картинкой */
            <div className="popup popup_image">
                <div className="popup_image_container">
                    <img src="#" alt="" className="popup_image_big" />
                    <img
                        src={close}
                        alt=""
                        className="popup__close"
                    />
                </div>
            </div>

            /*--popup Обновить аватар */
            <div className="popup popup_avatar">
                <div className="popup__content">
                    <img
                        src={close}
                        alt=""
                        className="popup__close"
                    />
                    <h3 className="popup__title">Обновить аватар</h3>
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
                </div>
            </div>
        </>
    );
}

export default Main;