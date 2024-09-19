import { useState } from "react";
import "./App.css";
import "./index.css";

export default function App() {
  const [level, setLevel] = useState(1);
  const [size, setSize] = useState(200);

  //ให้อาหาร
  const foodPig = (foodValue) => {
    setLevel((prevLevel) => {
      const newLevel = prevLevel + foodValue;
      if (newLevel <= 120) {
        setSize((prevSize) => prevSize + foodValue/10);
      }
      return newLevel;
    });
  };

  const getPigImage = () => {
    if (level < 100) {
      return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3-do4p67mfr5vmcWi25AkGOw1Zg5voMSwpQ&s";
    } else {
      return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvbGXX_eBFUTDevXU-NqX6ZZBOECuPZETByA&s";
    }
  };
  const imageSrc = `${getPigImage()}?t=${Date.now()}`;

  const reset = () => {
    setLevel(1);
    setSize(200); //รีเกม
  };

  return (
    <>
      <div>
        <h1>เลี้ยงหมูเด้งกันเถอะ !!!!</h1>
      </div>
      <div class="image-with-border" >
      <div class="container">
        <div>
          <h2>Level {level}</h2>
        </div>
        <div className="pig">
          <img
            src={imageSrc}
            alt="หมูเด้ง"
            style={{ width: size, height: size }}
          />
        </div>

        <div className="food" class="image-row">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfPbDGQ28_XMfj3GdKW5cjuYaJEhZDWHdCuw&s"
            alt="แตงโม"
            onClick={() => foodPig(5)}
          />
          <img
            src="https://png.pngtree.com/png-clipart/20201010/ourlarge/pngtree-pumpkin-cartoon-clipart-png-image_2359872.jpg"
            alt="ฟักทอง"
            onClick={() => foodPig(15)}
          />
          <img
            src="https://media.istockphoto.com/id/1471869338/th/%E0%B9%80%E0%B8%A7%E0%B8%84%E0%B9%80%E0%B8%95%E0%B8%AD%E0%B8%A3%E0%B9%8C/%E0%B8%82%E0%B8%AD%E0%B8%9A%E0%B8%AB%E0%B8%8D%E0%B9%89%E0%B8%B2-%E0%B9%84%E0%B8%AD%E0%B8%84%E0%B8%AD%E0%B8%99%E0%B8%AB%E0%B8%8D%E0%B9%89%E0%B8%B2%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%8C%E0%B8%95%E0%B8%B9%E0%B8%99.jpg?s=170667a&w=0&k=20&c=NY2tCPrYd2IH6nuWCP5kV5v5gk7FrYgF-4Ip5PEwzs0="
            alt="หญ้า"
            onClick={() => foodPig(25)}
          />
        </div>

        <div className="button">
          <button onClick={reset}>Reset</button>
        </div>
        </div>
      </div>
    </>
  );
}
