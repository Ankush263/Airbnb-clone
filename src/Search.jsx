import React, { useState } from 'react';
import './Search.css';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { render } from '@testing-library/react';

const Search = () => {

  const [startDate, setStartDate] = useState(new Date());

  const [endDate, setEndDate] = useState(new Date());


  const selectionRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  };

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);

    console.log(ranges.selection.startDate)
    console.log(ranges.selection.endDate)
  }

  return (
    <div className='search'>
      <DateRangePicker
        ranges={[selectionRange]}
        onChange={handleSelect}
      />
    </div>
  )
}

export default Search;

