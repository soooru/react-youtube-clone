import axios from 'axios';

const apiInstance = axios.create({
  baseURL: 'https://youtube.googleapis.com/youtube/v3',
  params: {
    key: `AIzaSyBnc_pqVarUviFpMw-Ab0q7Z0pmJt1oQCY`,
  },
});

export default apiInstance;
