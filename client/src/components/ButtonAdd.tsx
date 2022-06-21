import { Link } from 'react-router-dom';
const addIcon = require('../Pages/images/fluent_add-24-filled.png');

const ButtonAdd = () => {
  return (
    <>
      <button type='button' className='button-container botton-add'>
        <span id='add-place'>Add a place</span>
        <Link to={'/add'}>
          <img className='add-icon' src={addIcon} alt='add-icon'></img>
        </Link>
      </button>
    </>
  );
};

export default ButtonAdd;
