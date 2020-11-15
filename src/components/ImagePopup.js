import close from '../images/close.svg';

function ImagePopup() {
    return (
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
    );
}

export default ImagePopup;