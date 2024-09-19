import { FaAngleRight } from "react-icons/fa";
import { profilePicUrls } from "../data/data";

export default function SidebarIntro() {
  return (
    <section className="intro">
      <h1 className="first-heading">
        How good are your{" "}
        <span className="u-italic u-accent u-bolder">photos</span> ?
      </h1>
      <p className="intro__text">
        Improve your <span className="u-bold">photography skills</span> by
        getting <span className="u-accent u-underline">feedback</span> from{" "}
        <span className="u-bold">a jury and the community</span>
      </p>
      <section className="social">
        {profilePicUrls.map((e) => (
          <img
            key={e}
            className="social__img"
            src={e}
            alt="User profile picture"
          />
        ))}
        <div className="social__container">
          <p className="social__number">+180,000</p>
          <p className="social__text">already joined</p>
        </div>
      </section>

      <section className="auth">
        <a href="#" className="btn">
          Sign me up
          <FaAngleRight className="btn__icon" />
        </a>
        <p className="auth__text">
          Already a member?{" "}
          <a href="#" className="auth__link">
            Sign In
          </a>
        </p>
      </section>
    </section>
  );
}
