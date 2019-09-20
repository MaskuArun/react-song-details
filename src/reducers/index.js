import { combineReducers } from "redux";
const songsReducer = () => {
  return [
    {
      title: "Akasam Ammayi",
      duration: "4:05"
    },
    {
      title: "Dekko Dekko",
      duration: "4:25"
    },
    {
      title: " Kevvu Keka",
      duration: "5:09"
    },
    {
      title: "Kanuluna pilla",
      duration: "4:49"
    },
    {
      title: "Pilla ra",
      duration: "5:05"
    }
  ];
};

const selectedSondReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSondReducer
});
