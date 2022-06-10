import React from 'react';
import styles from './video_detail.module.css';
const VideoDetail = ({ video }) => {
  return (
    <section className={styles.detail}>
      <iframe
        id={video.id}
        className={styles.video}
        width="100%"
        height="500px"
        src={`https://www.youtube.com/embed/${video.id}`}
        title="YouTube video player"
      ></iframe>
      <h2>{video.snippet.title}</h2>
      <h3>{video.snippet.channelTitle}</h3>
      <pre className={styles.description}>{video.snippet.description}</pre>
    </section>
  );
};

export default VideoDetail;
