import "./testominal.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
const Testominal = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const datas = [
    {
      id: 0,
      name: "dheeraj",
      Testominal:
        "ve been working as a software developer for over a decade, and in that time, I've encountered a variety of programmingc",
      img: "/src/assets/man-with-beard-avatar-character-isolated-icon-free-vector.jpg",
    },

    {
      id: 2,
      name: "dheeraj",
      Testominal:
        "ve been working as a software developer for over a decade, and in that time, I've encountered a variety of programming languages, frameworks, and tools. Each project presents unique challenges and learning opportunities, but the consistent thread throughout my career has been the satisfaction of solving complex problems and building solutions that make a real differenc",
      img: "/src/assets/image3.jpeg",
    },
    {
      id: 3,
      name: "dheeraj",
      Testominal:
        "ve been working as a software developer for over a decade, and in that time, I've encountered a variety of programming languages, frameworks, and tools. Each project presents unique challenges and learning opportunities, but the consistent thread throughout my career has been the satisfaction of solving complex problems and building solutions that make a real differenc",
      img: "/src/assets/image4.jpeg",
    },
    {
      id: 4,
      name: "dheeraj",
      Testominal:
        "ve been working as a software developer for over a decade, and in that time, I've encountered a variety of programming languages, frameworks, and tools. Each project presents unique challenges and learning opportunities, but the consistent thread throughout my career has been the satisfaction of solving complex problems and building solutions that make a real differenc",
      img: "/src/assets/image5.jpeg",
    },
    {
      id: 5,
      name: "dheeraj",
      Testominal:
        "ve been working as a software developer for over a decade, and in that time, I've encountered a variety of programming languages, frameworks, and tools. Each project presents unique challenges and learning opportunities, but the consistent thread throughout my career has been the satisfaction of solving complex problems and building solutions that make a real differenc",
      img: "/src/assets/image6.jpeg",
    },
    {
      id: 6,
      name: "dheeraj",
      Testominal:
        "ve been working as a software developer for over a decade, and in that time, I've encountered a variety of programming languages, frameworks, and tools. Each project presents unique challenges and learning opportunities, but the consistent thread throughout my career has been the satisfaction of solving complex problems and building solutions that make a real differenc",
      img: "/src/assets/image7.jpeg",
    },
  ];

  const handlePrev = () => {
    const newIndex = currentIndex === 0 ? datas.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentIndex === datas.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  return (
    <div className="container">
      <div className="testomonial">
        <div className="img">
          <img src={datas[currentIndex].img} alt="" />
        </div>
        <div className="text">
          <FontAwesomeIcon
            className="iconLeft"
            icon={faAngleLeft}
            onClick={handlePrev}
          />
          <p>
            {datas[currentIndex].name} {datas[currentIndex].Testominal}
          </p>
          <FontAwesomeIcon
            className="iconRig"
            icon={faAngleRight}
            onClick={handleNext}
          />
        </div>
      </div>
    </div>
  );
};

export default Testominal;
