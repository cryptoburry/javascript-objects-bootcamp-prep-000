var playlist = {
  SherylCrow: "All I wanna Do",
  ACDC: "Back In Black"
};

//limitations on playlist: using playlist{} we can only look up song names (values) by artist (keys)

function updatePlaylist(playlist,artist,song){
  return Object.assign({},playlist, {[artist]: song});
}

function removeFromPlaylist(playlist,artist){
  delete playlist.artist;
  return playlist;
}

