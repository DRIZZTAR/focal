const library = {
  tracks: {
    t01: {
      id: "t01",
      name: "Code Monkey",
      artist: "Jonathan Coulton",
      album: "Thing a Week Three",
    },
    t02: {
      id: "t02",
      name: "Model View Controller",
      artist: "James Dempsey",
      album: "WWDC 2003",
    },
    t03: {
      id: "t03",
      name: "Four Thirty-Three",
      artist: "John Cage",
      album: "Woodstock 1952",
    },
  },
  playlists: {
    p01: { id: "p01", name: "Coding Music", tracks: ["t01", "t02"] },
    p02: { id: "p02", name: "Other Playlist", tracks: ["t03"] },
  },
  //?printPlaylists
  printPlaylists: function(playlists) {
    // for each key(playlist) in playlists
    for (const playlist in playlists) {
      //pull out the values of each playlist and assign them to a variablee
      const { id, name, tracks } = playlists[playlist];
      console.log(`${id}: ${name} - ${tracks.length} tracks`);
    }
  },

  //?printTracks
  printTracks: function(playlist) {
    // Get the playlist information by assigning the values of playlist to variable
    const { id, name, tracks } = this.playlists[playlist];

    // We want to see which playlist we're working with
    console.log(`${id}: ${name} - ${tracks.length} tracks`);

    // Loop through the track IDs in the playlist
    for (const trackId of tracks) {
      // Get the track information
      const { id, name, artist, album } = this.tracks[trackId];

      // Print the track information
      console.log(`${id}: ${name} by ${artist} (${album})`);
    }
  },

  //?printPlaylist
  printPlaylist: function(playlistId) {
    // Check if the playlistId exists in the library
    if (this.playlists[playlistId]) {
      // Get the playlist information from keys
      const { id, name, tracks } = this.playlists[playlistId];

      // Print the playlist info
      console.log(`${id}: ${name} - ${tracks.length} tracks`);

      // Loop through the track IDs in the playlist
      for (const trackId of tracks) {
        // Get the track information
        const { id, name, artist, album } = this.tracks[trackId];

        // Print the track informationnnn
        console.log(`${id}: ${name} by ${artist} (${album})`);
      }
    } else {
      //if track is not found in library
      console.log(`Playlist ${playlistId} not found in the library.`);
    }
  },

  //? addTrackToPLaylist
  //adds an existing track to an existing playlist
  addTrackToPlaylist: function(trackId, playlistId, library) {
    // Check if the trackId and playlistId exist in the library
    if (this.tracks[trackId] && this.playlists[playlistId]) {
      // Push the trackId to the tracks array of the specified playlist
      library.playlists[playlistId].tracks.push(trackId);
      console.log(`Track ${trackId} added to playlist ${playlistId}`);
    } else {
      //if track wasd not added or does not exist
      console.log("Track or playlist not found in the library.");
    }
  },

  generateUid: function() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  },

  //? addTrack
  //adds a track to the library
  addTrack: function(name, artist, album) {
    // Generate a unique ID for the track by concatenating t for track and using generateUid()
    const trackId = "t" + this.generateUid();

    // Create a new track object
    const newTrack = {
      id: trackId,
      name: name,
      artist: artist,
      album: album,
    };

    // Add the new track to the library's tracks object
    this.tracks[trackId] = newTrack;
    console.log(`🚀🚀🚀Track ${trackId} added to the library🚀🚀🚀`);
  },

  //? adds a playlist to the library
  addPlaylist: function(name, library) {
    // Generate a unique ID for the playlist
    const playlistId = "p" + this.generateUid();

    // Create a new playlist object
    const newPlaylist = {
      id: playlistId,
      name: name,
      tracks: [],
    };

    // Add the new playlist to the library's playlists object
    library.playlists[playlistId] = newPlaylist;
    console.log(`🚀🚀🚀Playlist ${playlistId} added to the library🚀🚀🚀`);
  }

};

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
library.printPlaylists(library.playlists);

// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
library.printTracks("p01", library);

// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
library.printPlaylist("p01", library);

// adds an existing track to an existing playlist
library.addTrackToPlaylist("t03", "p01", library);

// Example usage for adding new playlist to object
library.addPlaylist("New Playlist", library);

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
//const printSearchResults = function (query) { };