export interface TopStreamedSongInterface {
  top_streamed_songs: {
    rank: number;
    song_id: string;
    title: string;
    artists: string[];
    album: string;
    streams: string;
    duration: null;
    release_date: string;
    genre: string;
    cover_image_url: string;
    artist_handle: string;
  }[];
  last_updated: string;
}
