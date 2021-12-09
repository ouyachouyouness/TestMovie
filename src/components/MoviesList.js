import React from "react";
import { useState } from "react";
import Movies from "./Movies";
import "./MoviesList.css";

export function MovieList(props) {
  const [canSee, setCanSee] = useState(4);
  const [movie, setMovie] = useState([
    {
      id: "1",
      title: "Oceans 8",
      category: "Comedy",
      likes: 4,
      dislikes: 1,
    },
    {
      id: "2",
      title: "Midnight Sun",
      category: "Comedy",
      likes: 2,
      dislikes: 0,
    },
    {
      id: "3",
      title: "Les indestructibles 2",
      category: "Animation",
      likes: 3,
      dislikes: 1,
    },
    {
      id: "4",
      title: "Sans un bruit",
      category: "Thriller",
      likes: 6,
      dislikes: 6,
    },
    {
      id: "5",
      title: "Creed II",
      category: "Drame",
      likes: 16,
      dislikes: 2,
    },
    {
      id: "6",
      title: "Pulp Fiction",
      category: "Thriller",
      likes: 11,
      dislikes: 3,
    },
    {
      id: "8",
      title: "Seven",
      category: "Thriller",
      likes: 2,
      dislikes: 1,
    },
    {
      id: "9",
      title: "Inception",
      category: "Thriller",
      likes: 2,
      dislikes: 1,
    },
    {
      id: "10",
      title: "Gone Girl",
      category: "Thriller",
      likes: 22,
      dislikes: 12,
    },
  ]);

  const handleClick = (e) => {
    const newMovie = movie;
    const index = newMovie.findIndex((item) => item.id === e);
    const remove = window.confirm(
      "Etes-vous sûr de bien vouloir retirer ce film de la site ?"
    );
    if (remove) {
      newMovie.splice(index, 1);
      setMovie(newMovie);
    }
  };

  const loadMore = () => {
    this.setState((old) => {
      return { canSee: old.canSee + 4 };
    });
  };

  return (
    <div>
      <div className="movieslist-container">
        {movie
          .filter((movies) => movies.category.includes(props.category))
          .slice(0, canSee)
          .map((id) => (
            <Movies
              {...id}
              handleClick={handleClick}
              //likehandler={likeHandler}
            />
          ))}
      </div>
      <button
        className="movieslist-loadmore-button"
        type="button"
        onClick={loadMore}
      >
        Load more
      </button>
    </div>
  );
}
