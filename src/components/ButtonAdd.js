import { Link } from 'react-router-dom';

const ButtonAdd = () => {
  return (
    <button type="button" className="button-add">
      <Link to={'/add'}>Add a place</Link>
    </button>
  );
};

export default ButtonAdd;
