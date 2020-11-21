function Card(props) {
    const isLiked = false;
    const btnClassName = `place-card__like-icon ${isLiked ? 'place-card__like-icon_liked' : ''}`;
    return (
        <div className="place-card">
            <div className="place-card__image" style={{ backgroundImage: `url(${props.card.link})` }}>
                <button className="place-card__delete-icon"></button>
            </div>
            <div className="place-card__description">
                <h3 className="place-card__name">{props.card.name}</h3>
                <div className="place-card__right-container">
                    <button className={btnClassName} />
                    <p className="place-card__count">{props.card.likes.length}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;