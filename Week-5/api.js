import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.spotify.com/v1/',
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('spotifyToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const getUserProfile = () => api.get('me');
export const search = (query) => api.get(`search?q=${query}&type=track,artist,album`);
export const getPlaylist = (id) => api.get(`playlists/${id}`);
// Add more API calls as needed
