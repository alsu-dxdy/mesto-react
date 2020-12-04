function Card(props) {
    const { card, onCardClick } = props;
    const isLiked = false;
    const btnClassName = `place-card__like-icon ${isLiked ? 'place-card__like-icon_liked' : ''}`;

    function handleClick() {
        onCardClick(card);
    }

    return (
        <div className="place-card">
            <div className="place-card__image" onClick={handleClick} style={{ backgroundImage: `url(${card.link})` }}>
                <button className="place-card__delete-icon"></button>
            </div>
            <div className="place-card__description">
                <h3 className="place-card__name">{card.name}</h3>
                <div className="place-card__right-container">
                    <button className={btnClassName} />
                    <p className="place-card__count">{card.likes.length}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;