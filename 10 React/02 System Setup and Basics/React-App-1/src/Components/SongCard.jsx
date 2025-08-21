import React from "react";
import MemoryReboot from "../songs/memory_reboot.mp3";
import Dancin from "../songs/aron_danci.mp3";
import Metamorphosis from "../songs/metamorphosis_slowed.mp3";
import WayDownWeGo from "../songs/way_down_we_go_bgm.mp3";

const SongCard = () => {
  let audio = null; // Define audio variable outside the function

  const playSong = (songUrl) => {
    if (audio) { // If audio is already playing, pause it
      audio.pause();
    }
    audio = new Audio(songUrl); // Create a new Audio object with the provided song URL
    audio.play(); // Play the audio
  };

  const pauseSong = () => {
    if (audio) { // If audio is playing, pause it
      audio.pause();
    }
  };

  const resumeSong = () => {
    if (audio) { // If audio is paused, resume it
      audio.play();
    }
  };

  const data = [
    {
      name: "Memory Reboot",
      description:
        "Lorem ipsum dolor sit amet, consectetur adip e ea commodo ea commodo sit amet et",
      button: "Play Now",
      song: MemoryReboot,
    },
    {
      name: "Dancin",
      description:
        "Lorem ipsum dolor sit amet, consectetur adip e ea commodo ea commodo sit amet et",
      button: "Play Now",
      song: Dancin,
    },
    {
      name: "Way Down We Go",
      description:
        "Lorem ipsum dolor sit amet, consectetur adip e ea commodo ea commodo sit amet et",
      button: "Play Now",
      song: WayDownWeGo,
    },
    {
      name: "Metamorphosis",
      description:
        "Lorem ipsum dolor sit amet, consectetur adip e ea commodo ea commodo sit amet et",
      button: "Play Now",
      song: Metamorphosis,
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen gap-10 bg-zinc-200">
      {data.map((elem, index) => (
        <div key={index} className="w-64 px-3 py-2 bg-black rounded">
          <h3 className="text-xl font-semibold text-white">{elem.name}</h3>
          <p className="mt-2 text-xs text-white">{elem.description}</p>
          <button
            onClick={() => playSong(elem.song)}
            className="px-2 py-1 mt-3 text-xs text-white rounded-md bg-violet-700"
          >
            {elem.button}
          </button>
        </div>
      ))}
    </div>
  );
};

export default SongCard;
