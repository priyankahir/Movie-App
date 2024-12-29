import { useState } from 'react';
import './App.css';
import Moviecard from './Component/Moviecard';

function App() {
  const [movielist, setMovieList] = useState([]);
  const [search, setSearch] = useState('');
  const [msg, setMsg] = useState('');

  let datafetching = async (searchString) => {
    if (!searchString) {
      setMsg("Please enter something");
      return;
    }

    setMsg(''); 
    const response = await fetch(`http://www.omdbapi.com/?apikey=c6c55921&s=${searchString}`);
    const data = await response.json();

    if (data.Response === "True") {
      setMovieList(data.Search); 
    } else {
      setMovieList([]);
      setMsg("No movie found");
    }
  };

  const onTextChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <>
      <div className="body-container">
        <div className="navbar">
          <div className="logo">
            <h1>MovieFlix</h1>
          </div>
          <div className="inputsearch">
            <input type="search" placeholder='Enter your favourite movie' onChange={onTextChange} />
            <button className='search-btn' onClick={() => datafetching(search)}>Search</button>
          </div>
        </div>
        <div className="hero">
          <div className="errormsg">
            <h1>{msg}</h1>
          </div>
          <div className="moviecontainer">
            <Moviecard detail={movielist} /> {/* Passing movielist array to Moviecard */}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
