import { FaCloudUploadAlt } from "react-icons/fa";

export default function SidebarUpload() {
  return (
    <section className="upload">
      <div className="upload__container">
        <FaCloudUploadAlt className="upload__icon" />
        <p className="upload__text">Drag and drop photo</p>
        <p className="upload__alternative">
          or <span className="u-accent u-underline">browse folder</span>
        </p>
      </div>
    </section>
  );
}
