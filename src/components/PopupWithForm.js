function PopupWithForm() {
    return (

        <div className="popup popup_edit">
            <div className="popup__content">
                <img
                    src={close}
                    alt=""
                    className="popup__close"
                />
                <h3 className="popup__title">Редактировать профиль</h3>
                <form className="popup__form popup__form_edit" name="new_edit">
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
                </form>
            </div>
        </div>

    );
}

export default PopupWithForm;