import { MdArrowBackIos } from "react-icons/md";

function Nav({ title}) {
  return (
    <nav className="navbar navbar-light bg-light container mx-auto px-4 mt-4">
      <div className="container-fluid flex items-center gap-2">
        <a className="navbar-brand" href="/">
          <MdArrowBackIos />
        </a>
        <span className=" text-lg font-semibold">{title}</span>
      </div>
    </nav>
  );
}

export default Nav;
