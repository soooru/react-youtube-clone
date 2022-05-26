import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import ApiInstance from '../utils/api.js';
import MeidaCard from './meidaCard.jsx';

function MediaList() {
  const [mediaList, setMediaList] = useState([]);
  const [pageState, setpageState] = useState(false);

  let location = useLocation();

  useEffect(() => {
    if (location.pathname === '/search') {
      const searchWord = location.search.split('=')[1];
      if (searchWord) {
        getSearchList(searchWord);
      } else {
        initMediaList();
      }
    } else {
      initMediaList();
    }
  }, [location]);

  const initMediaList = () => {
    ApiInstance.get('/videos', {
      params: {
        part: 'snippet',
        chart: 'mostPopular',
        maxResults: '24',
      },
    }).then((res) => {
      const mediaList = res.data.items;
      setMediaList(mediaList);
    });
  };

  const getSearchList = (word) => {
    ApiInstance.get('search', {
      params: {
        part: 'snippet',
        type: 'video',
        maxResults: '24',
        q: word,
      },
    })
      .then((res) => {
        const mediaList = res.data.items;
        setMediaList(mediaList);
      })
      .catch(() => {
        setpageState(false);
      });
  };

  return (
    <div className="media-list">
      {mediaList.map((v) => (
        <MeidaCard
          media={v}
          key={v.id.videoId ? v.id.videoId : v.id}
          pathId={v.id.videoId ? v.id.videoId : v.id}
        />
      ))}
      {pageState ? <div>검색 결과가 없거나 오류가 발생!</div> : null}
    </div>
  );
}

export default MediaList;
