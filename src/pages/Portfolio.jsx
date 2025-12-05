import { useState } from "react";

import lookingUp from "../assets/website-images/looking_up.jpg";
import uptown from "../assets/website-images/uptown.jpg";
import snowBus from "../assets/website-images/snow_bus.JPG";
import sunlitCat from "../assets/website-images/sunlit_cat.JPG";
import forsythFountain from "../assets/website-images/forsyth_fountain.jpg";
import bench from "../assets/website-images/bench.jpg";
import foggyNight from "../assets/website-images/foggy_night.jpeg";
import greenCorner from "../assets/website-images/green_corner.jpg";
import yellowBrick from "../assets/website-images/yellow_brick.jpeg";
import redLeaves from "../assets/website-images/red_leaves.jpg";
import iceflower1 from "../assets/website-images/iceflower_1.jpg";
import iceflower2 from "../assets/website-images/iceflower_2.jpg";
import mercerHouse from "../assets/website-images/mercer_house.jpg";
import greenArches from "../assets/website-images/green_arches.jpeg";
import savTheater from "../assets/website-images/sav_theater.jpg";
import pillsForDinner from "../assets/website-images/pills_for_dinner-1.jpg";

const photos = [
  { src: lookingUp, title: "LOOKING UP" },
  { src: uptown, title: "UPTOWN GAZE" },
  { src: snowBus, title: "SNOW BUS" },
  { src: sunlitCat, title: "SUNLIT CAT" },
  { src: forsythFountain, title: "FORSYTH FOUNTAIN" },
  { src: bench, title: "BENCH" },
  { src: foggyNight, title: "FOGGY NIGHT" },
  { src: greenCorner, title: "GREEN CORNER" },
  { src: yellowBrick, title: "YELLOW BRICK" },
  { src: redLeaves, title: "RED LEAVES" },
  { src: iceflower1, title: "ICEFLOWER I" },
  { src: iceflower2, title: "ICEFLOWER II" },
  { src: mercerHouse, title: "MERCER HOUSE" },
  { src: greenArches, title: "GREEN ARCHES" },
  { src: savTheater, title: "SAV THEATER" },
  { src: pillsForDinner, title: "PILLS FOR DINNER" },
];

function PhotoPortfolio() {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 3;

  const handlePrev = () => {
    setStartIndex((prev) =>
      prev === 0 ? Math.max(photos.length - visibleCount, 0) : prev - 1
    );
  };

  const handleNext = () => {
    setStartIndex((prev) =>
      prev + visibleCount >= photos.length ? 0 : prev + 1
    );
  };

  const visiblePhotos = photos.slice(
    startIndex,
    Math.min(startIndex + visibleCount, photos.length)
  );

  return (
    <section className="page">
      <div className="container portfolio-layout">
        <div className="portfolio-strip">
          <button className="portfolio-arrow left" onClick={handlePrev}>
            ←
          </button>

          {visiblePhotos.map((photo) => (
            <div key={photo.title} className="portfolio-item">
              <div className="portfolio-image-wrapper">
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="portfolio-image"
                />
              </div>
              <p className="portfolio-title">{photo.title}</p>
            </div>
          ))}

          <button className="portfolio-arrow right" onClick={handleNext}>
            →
          </button>
        </div>
      </div>
    </section>
  );
}

export default PhotoPortfolio;
