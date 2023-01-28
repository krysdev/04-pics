// import { useState } from 'react';

function SearchBar({ whenPressEnter }) {

  // const handleClick = () => whenPressEnter('cars'); // for testing child->parent communication

  const handleSubmitForm = (e) => {
    e.preventDefault();
    whenPressEnter('cars')

    // console.log('ENTER pressed')
  };

  return (
    <div>
      <form onSubmit={handleSubmitForm}>
        <input type="text" />
      </form>

      {/* for testing */}
      {/* <button onClick={handleClick}>Search</button> */}
    </div>
  );
}

export default SearchBar;
