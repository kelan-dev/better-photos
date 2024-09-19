import SidebarIntro from "./SidebarIntro";
import SidebarUpload from "./SidebarUpload";
import SidebarFooter from "./SidebarFooter";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarIntro />
      <SidebarUpload />
      <SidebarFooter />
    </div>
  );
}
