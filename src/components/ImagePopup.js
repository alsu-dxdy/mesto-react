import close from '../images/close.svg';

function ImagePopup(props) {
    const { isOpen, onClose, link, name, closeImagePopupClickOutContent } = props;

    return (
        <div onMouseDown={closeImagePopupClickOutContent} className={`popup popup_image ${isOpen && 'popup_is-opened'} `} >
            <div className="popup_image_container">
                <img src={link} alt={name} className="popup_image_big" />
                <img
                    onClick={onClose}
                    src={close}
                    alt=""
                    className="popup__close"
                />
            </div>
        </div>
    );
}

export default ImagePopup;