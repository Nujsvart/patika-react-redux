import React, { useEffect } from "react";
import Masonry from "react-masonry-css";
import "./styles.css";

import Loading from "../../components/Loading";
import Error from "../../components/Error";

import { useSelector, useDispatch } from "react-redux";
import { fetchCharacters } from "../../redux/charactersSlice";

const Home = () => {
  const characters = useSelector(state => state.characters.items);
  const isLoading = useSelector(state => state.characters.isLoading);
  const error = useSelector(state => state.characters.error);
  const nextPage = useSelector(state => state.characters.page);
  const hasNextPage = useSelector(state => state.characters.hasNextPage);

  const dispatch = useDispatch();
  console.log(characters);

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

  if (error) {
    return <Error message={error} />;
  }

  return (
    <div>
      <Masonry
        breakpointCols={4}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {characters.map(character => (
          <div key={character.char_id}>
            <img
              src={character.img}
              alt={character.name}
              className="character"
            />
            <div className="charName">{character.name}</div>
          </div>
        ))}
      </Masonry>

      <div style={{ padding: "20px 0px 40px 0px", textAlign: "center" }}>
        {isLoading && <Loading />}
        {hasNextPage && !isLoading && (
          <button onClick={() => dispatch(fetchCharacters(nextPage))}>
            Load More ({nextPage})
          </button>
        )}
        {!hasNextPage && !isLoading && <div>No more characters</div>}
      </div>
    </div>
  );
};

export default Home;
