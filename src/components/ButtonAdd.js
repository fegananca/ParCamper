import { Link } from 'react-router-dom';
import addIcon from '../images/fluent_add-24-filled.png';

const ButtonAdd = () => {
  return (
    <>
      <button type="button" className="button-container">
        <div className="botton-add">
          <p id="add-place">Add a place</p>
          <Link to={'/add'}>
            <img className="add-icon" src={addIcon} alt="add-icon"></img>
          </Link>
        </div>
      </button>
    </>
  );
};

export default ButtonAdd;
