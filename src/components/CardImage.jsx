function CardImage({ imgSrc, imgClass, title, text, btnText }) {
  return (
    <div className="card">
      <img src={imgSrc} className={imgClass} />
      <div className="card-body ">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{text}</p>
        <a href="#" className="btn btn-primary">
          {btnText}
        </a>
      </div>
    </div>
  );
}
export default CardImage;
