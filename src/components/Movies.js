import React from "react";
import "./Movies.css";

const Movies = ({ handleClick, id, title, category, likes, dislikes }) => {
  return (
    <figure className="movie-container">
      <div className="oui">
        <img
          className="movie-img"
          href=""
          src="https://via.placeholder.com/400x250"
        ></img>

      </div>
      <div className="description">
        <div>
        <h1 className="movie-title">{title}</h1>
        <p>{category}</p>
        </div>
        <div>
          <p className="movie-p-like">like: {likes}</p>
          <p>dislike : {dislikes}</p>
        </div>
      </div>
      <div className="div-movie-button-delete">
        <button className="movie-button-delete" onClick={() => handleClick(id)}>
          X
        </button> 
        </div>
    </figure>
  );
};

export default Movies;