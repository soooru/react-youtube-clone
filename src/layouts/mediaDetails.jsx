import React, { useEffect, useState } from 'react';
import VideoPlayer from '../components/videoPlayer';
import MediaList from '../components/mediaList';

import { useLocation } from 'react-router-dom';
import './mediaDetails.css';
function MediaDetails() {
  const [videoId, setVideoId] = useState('');
  let location = useLocation();

  useEffect(() => {
    const pathnameArr = location.pathname.split('/');
    setVideoId(pathnameArr[pathnameArr.length - 1]);
  }, [location]);
  return (
    <div className="detail-wrap">
      <div className="detail-left">
        <VideoPlayer videoId={videoId} />
        <div>
          <h4>
            보통 viedoId : {videoId}로 API를 쏴서 details를 가져올것이다..
            예제에선 패스
          </h4>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl
          tincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem
          ipsum dolor sit. Volutpat odio facilisis mauris sit amet massa.
          Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Mi
          eget mauris pharetra et. Non tellus orci ac auctor augue. Elit at
          imperdiet dui accumsan sit. Ornare arcu dui vivamus arcu felis.
          Egestas integer eget aliquet nibh praesent. In hac habitasse platea
          dictumst quisque sagittis purus. Pulvinar elementum integer enim neque
          volutpat ac.
        </div>
      </div>
      <div className="detail-right">
        <MediaList />
      </div>
    </div>
  );
}
export default MediaDetails;
