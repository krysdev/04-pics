import { useState } from 'react';

function SearchBar({ whenPressEnter }) {
  const [term, setTerm] = useState('');
  
  const handleSubmitForm = (e) => {
    e.preventDefault();
    whenPressEnter(term);
    // console.log('ENTER pressed')
  };

  const handleChange = (event) => { 
    setTerm(event.target.value)
    // console.log(event.target.value)
  };

  return (
    <div>
      <form onSubmit={handleSubmitForm}>
        <input onChange={handleChange} value={term} type="text" />
      </form>

      {/* <button onClick={ () => whenPressEnter ('cars') }> Search </button> */}
    </div>
  );
}

export default SearchBar;
