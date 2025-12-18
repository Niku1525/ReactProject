function CardImage({
  imgSrc,
  imgClass,
  title,
  btnText,
  onButtonClick,
  onImageClick,
}) {
  return (
    <div className="card">
      <img
        src={imgSrc}
        className={imgClass}
        style={{ cursor: "pointer" }}
        onClick={onImageClick}
      />

      <div className="card-body">
        <h3 className="card-title">{title}</h3>

        <a
          href="#"
          className="btn btn-primary"
          onClick={(e) => {
            e.preventDefault();
            onButtonClick();
          }}
        >
          {btnText}
        </a>
      </div>
    </div>
  );
}

export default CardImage;
