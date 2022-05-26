import React from 'react';
import { useNavigate } from 'react-router-dom';
import './mediaCard.css';

function MediaCard(props) {
  let navigate = useNavigate();
  const goDetailPage = () => {
    console.log('goDetailPage');
    navigate(`/media/${props.pathId}`);
  };
  const { snippet } = props.media;
  return (
    <div onClick={goDetailPage} className="media-card d-flex">
      <img src={snippet.thumbnails.default.url} alt="thumnail" />
      <div className="media-card__info">
        <div className="media-card__title">{snippet.title}</div>
        <div>{snippet.channelTitle}</div>
      </div>
    </div>
  );
}

export default MediaCard;
