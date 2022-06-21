import { Icon } from '@iconify/react';
import './ButtonSearch.css';

const ButtonSearch = ({ callBack }: { callBack?: Function }) => {
  return (
    <button
      onClick={() => {
        if (callBack) {
          return callBack();
        }
        return console.log('button click');
      }}
      type='button'
      className='button-enter'
    >
      <Icon
        className='enter-icon'
        icon='akar-icons:map'
        width={20}
        height={20}
      />
      <p id='search-map'>Map</p>
    </button>
  );
};

export default ButtonSearch;
