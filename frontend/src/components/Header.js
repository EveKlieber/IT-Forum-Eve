import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <NavLink to="/">
      <div className="header">
      <h1><FontAwesomeIcon icon={faHouse} /> IT-Blog</h1>
      </div>
    </NavLink>
  );
}
