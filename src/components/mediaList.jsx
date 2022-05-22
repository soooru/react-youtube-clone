import React, { useState, useEffect } from 'react';
import ApiInstance from '../utils/api.js';
import MeidaCard from './meidaCard.jsx';

function MediaList() {
  const [mediaList, setMediaList] = useState([]);

  const initMediaList = () => {
    ApiInstance.get('/videos', {
      params: {
        part: 'snippet',
        chart: 'mostPopular',
        maxResults: '25',
      },
    }).then((res) => {
      const mediaList = res.data.items;
      setMediaList(mediaList);
    });
  };
  useEffect(() => {
    initMediaList();
  }, []);

  return (
    <div className="media-list">
      {mediaList.map((v) => (
        <MeidaCard media={v} key={v.id} />
      ))}
    </div>
  );
}

export default MediaList;
