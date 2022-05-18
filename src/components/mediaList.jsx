import React, { useState, useEffect } from 'react';
import ApiInstance from '../utils/api.js';

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
  const goDetailPage = () => {
    console.log('의 페이지로 가라');
  };
  useEffect(() => {
    initMediaList();
  }, []);

  return (
    <div>
      {console.log('rendered')}
      {mediaList.map((v) => (
        <div key={v.id}>
          <div onClick={goDetailPage}>{v.id}</div>
          <img src={v.snippet.thumbnails.default.url} alt="thumnail" />
          <div>{v.snippet.title}</div>
          <div>{v.snippet.channelTitle}</div>
        </div>
      ))}
    </div>
  );
}

export default MediaList;
