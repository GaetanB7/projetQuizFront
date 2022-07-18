import React from 'react';

const Search = () => {
  return (
    <div className="input-group mx-2 my-0 ">
      <div className="form-outline d-flex">
        <input type="search" id="form1" className="form-control inputCustom  fs-5" placeholder='search ...'  />
        <button type="button" className="btn btnCustom">
          <img className='icones' src="images/search.png" alt="search" />
        </button>
      </div>

    </div>
  );
};

export default Search;