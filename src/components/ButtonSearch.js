import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

const ButtonSearch = () => {
  return (
    <button type="button" className="button-enter">
      <Link to={'/search'}>
        <Icon
          className="enter-icon"
          icon="akar-icons:map"
          width={30}
          height={30}
        />
      </Link>
      <p id="search-map">Map</p>
    </button>
  );
};

export default ButtonSearch;
