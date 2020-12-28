import React from "react";
import "../styles/card.scss";

const Card = (props) => {
  var movieGenres = [];
  movieGenres = props.description.split("|");
  console.log(movieGenres);

  return (
    <div class="card" id={props.id}>
      <div class="card-flip">
        <div class="card-flip-front">
          <span class="title">{props.title}</span>
        </div>
        <div class="card-flip-back">
          {movieGenres.map((genre) => (
            <span class="genre">{genre}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
