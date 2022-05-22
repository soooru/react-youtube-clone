import React, { Component } from 'react';
import './mediaCard.css';
class meidaCard extends Component {
  goDetailPage = () => {
    console.log(this.props.media.id, '의 페이지로 가라');
  };
  render(props) {
    const { snippet } = this.props.media;
    return (
      <div onClick={this.goDetailPage} className="media-card d-flex">
        <img src={snippet.thumbnails.default.url} alt="thumnail" />
        <div className="media-card__info">
          <div className="media-card__title">{snippet.title}</div>
          <div>{snippet.channelTitle}</div>
        </div>
      </div>
    );
  }
}

export default meidaCard;
