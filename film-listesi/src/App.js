import React from 'react';
import './App.scss';
import movies from './movies';
import Card from './components/Card';

console.log(movies);
const movieList = movies;

function App() {
  return (
      <div className="container" >
      {movieList.map((movie) => (
        <Card id={movie.id}
              title={movie.title}
              description={movie.description}/>
          ))}
      </div>
  );
}

export default App;
