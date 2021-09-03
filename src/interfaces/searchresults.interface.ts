import Track from "./track.interface";

export default interface SearchResults {
  href: string;
  items: Track[];
  limit: number;
  next: string;
  offset: number;
  previous?: any;
  total: number;
}