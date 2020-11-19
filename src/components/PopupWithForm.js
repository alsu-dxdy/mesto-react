import close from '../images/close.svg';

function PopupWithForm(props) {

    return (
        <div className={`popup popup_type_${props.name} ${props.isOpen && 'popup_is-opened'} `} >
            <div className="popup__content">
                <img onClick={props.onClose}
                    src={close}
                    alt=""
                    className="popup__close"
                />
                <h3 className="popup__title">{props.title}</h3>
                {props.children}
            </div>
        </ div>

    );
}

export default PopupWithForm;