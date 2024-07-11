import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" height={29} width={130} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => {
            return (
              <li
                key={item.label}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                <a href={item.href}>{item.label}</a>
              </li>
            );
          })}
        </ul>
        <di className="max-lg:block hidden">
          <img src={hamburger} alt="hamburger" width={25} height={25} />
        </di>
      </nav>
    </header>
  );
};

export default Nav;
