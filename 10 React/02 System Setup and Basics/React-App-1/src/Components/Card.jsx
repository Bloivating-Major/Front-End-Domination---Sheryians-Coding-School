import React, { useState } from "react";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/pin.jpg";
import img3 from "../assets/spotify.jpg";

function Card() {
  const data = [
    {
      image: img1,
      name: "Amazon",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
      image: img2,
      name: "Pinterest",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
      image: img3,
      name: "Spotify",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
  ];

  const [counters, setCounters] = useState(new Array(data.length).fill(0));

  const incrementCounter = (index) => {
    const newCounters = [...counters];
    newCounters[index] += 1;
    setCounters(newCounters);
  };

  const decrementCounter = (index) => {
    const newCounters = [...counters];
    if (newCounters[index] > 0) {
      newCounters[index] -= 1;
    }
    setCounters(newCounters);
  };

  return (
    <div className="flex items-center justify-center w-full h-screen gap-10 bg-zinc-200">
      {data.map((elem, index) => (
        <div
          key={index}
          className="overflow-hidden rounded-md bg-zinc-100 w-52"
        >
          <div className="w-full h-32 bg-zinc-300">
            <img src={elem.image} alt="" className="w-full h-full objectfit" />
          </div>
          <div className="w-full px-3 py-4">
            <h2 className="font-semibold">{elem.name}</h2>
            <p className="mt-3 text-xs">{elem.description}</p>

            <button
              className={`px-4 py-1 mt-3 text-sm ${
                counters[index] > 0 ? 'bg-blue-600' : 'bg-red-600'
              } rounded text-zinc-100`}
            >
              {counters[index] > 0 ? "In Stock" : "Out of Stock"}
            </button>

            <div className="mt-3">
              <p className="text-sm">Quantity: {counters[index]}</p>
              <div className="flex gap-2 mt-2">
                <button
                  className="px-2 py-1 text-white bg-green-500 rounded"
                  onClick={() => incrementCounter(index)}
                >
                  +
                </button>
                <button
                  className="px-2 py-1 text-white bg-red-500 rounded"
                  onClick={() => decrementCounter(index)}
                >
                  -
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
