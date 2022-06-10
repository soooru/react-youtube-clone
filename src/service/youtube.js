import axios from 'axios';

class Youtube {
  constructor(key) {
    this.key = key;
    this.youtubeApi = axios.create({
      baseURL: 'https://www.googleapis.com/youtube/v3',
      params: { key: key },
    });
  }

  async mostPopular() {
    const response = await this.youtubeApi.get('videos', {
      params: {
        part: 'snippet',
        chart: 'mostPopular',
        maxResults: 25,
      },
    });

    return response.data.items;
  }

  async search(query) {
    const response = await this.youtubeApi.get('search', {
      params: {
        part: 'snippet',
        maxResults: 25,
        q: query,
      },
    });
    const data = response.data.items;
    return data.map((item) => ({
      ...item,
      id: item.id.videoId || item.id,
    }));
  }
}

export default Youtube;
