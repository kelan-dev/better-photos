import PropTypes from "prop-types";
import { galleryPics } from "../data/data";
import { FaStar } from "react-icons/fa";

export default function Gallery() {
  return (
    <section className="gallery">
      {galleryPics.map((e) => (
        <GalleryImage key={e.url} image={e} />
      ))}
    </section>
  );
}

function GalleryImage({ image }) {
  return (
    <div className="gallery__img-wrapper">
      <img className="gallery__img" src={image.url} alt="Gallery image" />
      {image.commentId && (
        <p className={`gallery__comment gallery__comment--${image.commentId}`}>
          <FaStar className="gallery__icon" />
          <span className="gallery__number">{image.rating}</span>
          {image.commentValue}
        </p>
      )}
    </div>
  );
}

GalleryImage.propTypes = {
  image: PropTypes.shape({
    url: PropTypes.string.isRequired,
    commentId: PropTypes.number,
    rating: PropTypes.number,
    commentValue: PropTypes.string,
  }).isRequired,
};
