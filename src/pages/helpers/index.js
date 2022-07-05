import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'

const heart = <FontAwesomeIcon icon={faHeart} />

const checkValue = (value) => {
    if (value < 0 || value > 99) {
      window.alert("Valor inválido!");
      return 0;
    }
    return value;
  }

export { 
    checkValue,
    heart,
};
