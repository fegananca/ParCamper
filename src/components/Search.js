import React from 'react';
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete';
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxOption,
  ComboboxList,
} from '@reach/combobox';
import '@reach/combobox/styles.css';
import searchIcon from '../images/arcticons_xiaoyuan-search.png';

const Search = ({ panTo }) => {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      location: { lat: () => 40.4637, lng: () => -3.7492 },
      radius: 200 * 1000,
    },
  });

  return (
    <div className="search">
      <Combobox
        onSelect={async (address) => {
          setValue(address, false);
          clearSuggestions();
          try {
            const results = await getGeocode({ address });
            const { lat, lng } = getLatLng(results[0]);
            panTo({ lat, lng });
          } catch (error) {
            console.log(error);
          }
        }}
      >
        <div className="search-container">
          <ComboboxInput
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
            disabled={!ready}
            placeholder="Where to?"
            className="search-box"
          />
          <img src={searchIcon} alt="icon-search" className="search-icon"></img>
        </div>
        <ComboboxPopover>
          <ComboboxList>
            {status === 'OK' &&
              data.map(({ id, description }) => (
                <ComboboxOption key={id} value={description} />
              ))}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
    </div>
  );
};

export default Search;
