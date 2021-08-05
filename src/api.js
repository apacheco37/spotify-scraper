import axios from 'axios';

export const getToken = async () => {
  const spotifyClientKey = 
    process.env.REACT_APP_SPOTIFY_CLIENT_ID +
    ':' +
    process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;
  const params = 'grant_type=client_credentials';
  const encodedString = new Buffer(spotifyClientKey).toString('base64');
  const headers = {
    headers: {
      'Authorization': `Basic ${encodedString}`,
      'content-type': 'application/x-www-form-urlencoded'
    }
  }

  let token;

  try {
    token = await axios.post(`https://accounts.spotify.com/api/token`, params, headers);
  } catch (err) {
    console.log(`POST ERROR: ` + err);
  }

  return token.data.access_token;
}

export const getSongsData = async (searchTerm) => {
  const headers = {
    headers: {
      'Authorization': `Bearer ` + await getToken()
    }
  };

  let songs;

  try {
    songs = await axios.get(`https://api.spotify.com/v1/search?q=${searchTerm}&type=track`, headers);
  } catch (err) {
    console.log("GET ERROR: " + err);
  }

  return songs.data.tracks.items;
}
