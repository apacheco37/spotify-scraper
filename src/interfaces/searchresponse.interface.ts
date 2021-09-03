import SearchResults from "./searchresults.interface";

export default interface SearchResponse {
  tracks?: SearchResults;
  albums?: SearchResults;
  artists?: SearchResults;
  playlists?: SearchResults;
  shows?: SearchResults;
  episodes?: SearchResults;
}