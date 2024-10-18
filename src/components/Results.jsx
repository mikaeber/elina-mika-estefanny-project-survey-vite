export const Results = ({ artist, fav_genre, fav_instrument }) => {
  return (
    <div>
      <p>
        You seem to like {artist}, {fav_genre} and {fav_instrument}
      </p>
    </div>
  );
};
