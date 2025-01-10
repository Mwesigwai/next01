import SubNav from "./subNav";
import ContactButton from "./contactButton";
import Logo from "./logo";
import GetIconsArray from "@/lib/getIconLinkArray";

const TopNavbar = () => {
    return (
      <nav className="flex justify-between items-center px-5 xl:px-52 md:px-16 py-3 bg-white dark:bg-inherit">
        <Logo />
        <SubNav icons={GetIconsArray()}/>
        <ContactButton />
      </nav>
    );
  };
  
  export default TopNavbar;