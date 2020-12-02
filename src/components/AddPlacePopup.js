import React from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup(props) {
    const inputNameRef = React.useRef();
    const inputLinkRef = React.useRef();

    function handleAddPlaceSubmit(e) {
        e.preventDefault();
        props.onAddPlaceSubmit({
            name: inputNameRef.current.value,
            link: inputLinkRef.current.value
        });
    }
    return (
        /* popup Новое место */
        <PopupWithForm
            title="Новое место"
            name="add-place"
            // onSubmit={handleAddPlaceSubmit}
            isOpen={props.isOpen}
            close={props.onClose}
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
                            ref={inputNameRef}
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
                            ref={inputLinkRef}
                        />
                        <span className="input__error"></span>
                    </div>
                    <button className="button popup__button button_disabled" onClick={handleAddPlaceSubmit}>+</button>
                </form>
            } />
    );
}
export default AddPlacePopup;