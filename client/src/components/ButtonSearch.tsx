import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

const ButtonSearch = () => {
  return (
    <button type="button" className="button-enter">
      <Link to={'/search'}>
        <Icon
          className="enter-icon"
          icon="akar-icons:map"
          width={20}
          height={20}
        />
      <p id="search-map">Map</p>
      </Link>
    </button>
  );
};

export default ButtonSearch;
