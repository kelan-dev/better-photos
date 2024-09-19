import { FaImage } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaCogs } from "react-icons/fa";

export default function Steps() {
  return (
    <section className="steps">
      <section className="step">
        <div className="step__icon-wrapper">
          <FaImage className="step__icon step__icon--1" />
        </div>
        <h2 className="second-heading">Upload photos</h2>
        <p className="step__text">
          Morbi id ipsum sed enim interdum hendrerit eget{" "}
          <span className="u-bold u-italic">quis dui</span>. Integer ad.
        </p>
      </section>
      <section className="step">
        <div className="step__icon-wrapper">
          <FaStar className="step__icon step__icon--2" />
        </div>
        <h2 className="second-heading">Get feedback</h2>
        <p className="step__text">
          Morbi id ipsum sed enim{" "}
          <span className="u-bold">interdum hendrerit</span> eget quis dui.
          Integer ad.
        </p>
      </section>
      <section className="step">
        <div className="step__icon-wrapper">
          <FaCogs className="step__icon step__icon--3" />
        </div>
        <h2 className="second-heading">Improve your skill</h2>
        <p className="step__text">
          Morbi <span className="u-bold u-italic">id ipsum</span> sed enim
          interdum hendrerit eget quis dui. Integer ad.
        </p>
      </section>
    </section>
  );
}
