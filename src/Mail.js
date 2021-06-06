import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons";

export default function Mail(params) {
  return (
    <div className='mail'>
      <a href="mailto:hola@krsambhav.in">
      <FontAwesomeIcon icon={faEnvelopeOpen} />
      <br />
        hola@krsambhav.in
      </a>
    </div>
  );
}
