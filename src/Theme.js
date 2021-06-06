import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function Theme(props) {
  const context = useContext(ThemeContext);
  return (
    <div className="theme">
      <FontAwesomeIcon icon={context.theme === 'light' ? faMoon : faSun} onClick={() => context.toggleTheme()} />
    </div>
  );
};
