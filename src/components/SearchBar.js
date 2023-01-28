// import { useState } from 'react';

function SearchBar({ whenPressEnter }) {
  const handleSubmitForm = (e) => {
    e.preventDefault();
    whenPressEnter('cars');

    // console.log('ENTER pressed')
  };

  return (
    <div>
      <form onSubmit={handleSubmitForm}>
        <input type="text" />
      </form>

      {/* <button onClick={ () => whenPressEnter ('cars') }> Search </button> */}
    </div>
  );
}

export default SearchBar;
