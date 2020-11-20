function Card(props) {
    return (
        <div class="place-card">
            <div className="place-card__image" style={{ backgroundImage: `url(${props.card.link})` }}>
                <button className="place-card__delete-icon"></button>
            </div>
            <div className="place-card__description">
                <h3 className="place-card__name">{props.card.name}</h3>
                <div className="place-card__right-container">
                    <button className="place-card__like-icon"></button>
                    <p className="place-card__count">{props.card.likes.length}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;