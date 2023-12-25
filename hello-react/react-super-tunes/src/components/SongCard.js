import React from "react";
import Rating from "./Rating";
import PropTypes from "prop-types";

const SongCard = ({data}) => {
    const {thumb, title, artist, rating} = data;
  return <div className="song-card">
        <img src={thumb} alt={title} className="st-thumb"/>
        <div className="song-title"> 
            {title} by {artist} 
        </div>
        <Rating stars={rating} />
    </div>;
  
};

SongCard.propTypes = {
    data: PropTypes.shape({
        id:     PropTypes.string.isRequired,
        thumb:  PropTypes.string.isRequired,
        title:  PropTypes.string.isRequired,
        artist: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired
    })
};

export default SongCard;
