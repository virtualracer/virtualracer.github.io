import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faLinkedinIn,
  faTelegramPlane,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function SocialIcons(params) {
  return (
    <div className="social">
      <a href="https://www.facebook.com/moi.loif.moi.rulez" target="__blank">
        <FontAwesomeIcon icon={faFacebook} className="icon" />
      </a>
      <a href="https://twitter.com/krsambhav16" target="__blank">
        <FontAwesomeIcon icon={faTwitter} className="icon" />
      </a>
      <a href="https://www.t.me/krsam/" target="__blank">
        <FontAwesomeIcon icon={faTelegramPlane} className="icon" />
      </a>
      <a href="https://krsambhav.in/">
        <FontAwesomeIcon icon={faLinkedinIn} className="icon" />
      </a>
      <a href="https://github.com/krsambhav" target="__blank">
        <FontAwesomeIcon icon={faGithub} className="icon" />
      </a>
    </div>
  );
}
