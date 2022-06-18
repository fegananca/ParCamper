import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

const ButtonSearch = () => {
  return (
      <Link to={'/search'}>
    <button type="button" className="button-enter">
        <Icon
          className="enter-icon"
          icon="akar-icons:map"
          width={20}
          height={20}
        />
      <p id="search-map">Map</p>
    </button>
      </Link>
  );
};

export default ButtonSearch;
