import axios from 'axios';
import SearchResponse from './interfaces/searchresponse.interface';
import TokenResponse from './interfaces/tokenresponse.interface';

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

  let tokenResponse;

  try {
    tokenResponse = await axios.post<TokenResponse>(`https://accounts.spotify.com/api/token`, params, headers);
  } catch (err) {
    console.log(`POST ERROR: ` + err);
  }

  return tokenResponse?.data.access_token || "";
}

export const getSongsData = async (token: string, searchTerm: string) => {
  const headers = {
    headers: {
      'Authorization': `Bearer ` + token
    }
  };

  let songsResponse;

  try {
    songsResponse = await axios.get<SearchResponse>(`https://api.spotify.com/v1/search?q=${searchTerm}&type=track`, headers);
  } catch (err) {
    console.log("GET ERROR: " + err);
  }

  return songsResponse?.data.tracks?.items || [];
}
