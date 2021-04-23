import React, { useContext, useState } from 'react';
import myContext from '../context/contextAPI';

function RadioSort() {
  const [sortInputs, setSortInputs] = useState({ column: 'name', sort: 'ASC' });
  const { setOrder, data } = useContext(myContext);

  return (
    <fieldset className="fieldset-sort">
      <legend>Sort</legend>
      <label htmlFor="selectSort">
        { 'Column '}
        <select
          id="selectSort"
          value={ sortInputs.name }
          data-testid="column-sort"
          className="select-column-sort"
          onChange={ (evt) => setSortInputs({ ...sortInputs, column: evt.target.value }) }
        >
          {
            data.length > 0
            && Object.keys(data[0])
              .map((column) => <option key={ column }>{ column }</option>)
          }
        </select>
      </label>
      <label htmlFor="inputRadioAsc">
        <input
          className="input-radio"
          data-testid="column-sort-input-asc"
          id="inputRadioAsc"
          type="radio"
          name="sort"
          value="ASC"
          onClick={ (evt) => setSortInputs({ ...sortInputs, sort: evt.target.value }) }
        />
        Upward
      </label>
      <label htmlFor="inputRadioDesc">
        <input
          className="input-radio"
          data-testid="column-sort-input-desc"
          id="inputRadioDesc"
          type="radio"
          name="sort"
          value="DESC"
          onClick={ (evt) => setSortInputs({ ...sortInputs, sort: evt.target.value }) }
        />
        Downward
      </label>
      <button
        data-testid="column-sort-button"
        className="btn-sort"
        type="button"
        onClick={ () => setOrder(sortInputs) }
      >
        Sort
      </button>
    </fieldset>
  );
}

export default RadioSort;
