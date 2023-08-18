import React from "react";
import ImageGallery from "react-image-gallery";
/**
|--------------------------------------------------
| images reportage
|--------------------------------------------------
*/
const images = [
  {
    original: "/pictures/jpg/subject1.jpg",
  },
  {
    original: "/pictures/jpg/subject2.jpg",
  },
  {
    original: "/pictures/jpg/subject3.jpg",
  },
  {
    original: "/pictures/jpg/subject4.jpg",
  },
  {
    original: "/pictures/jpg/subject5.jpg",
  },
  {
    original: "/pictures/jpg/subject6.jpg",
  },
  {
    original: "/pictures/jpg/subject7.jpg",
  },
  {
    original: "/pictures/jpg/subject8.jpg",
  },
  {
    original: "/pictures/jpg/subject9.jpg",
  },
  {
    original: "/pictures/jpg/subject10.jpg",
  },
  {
    original: "/pictures/jpg/subject11.jpg",
  },
  {
    original: "/pictures/jpg/subject12.jpg",
  },
  {
    original: "/pictures/jpg/subject13.jpg",
  },
  {
    original: "/pictures/jpg/subject14.jpg",
  },
  {
    original: "/pictures/jpg/subject15.jpg",
  },
  {
    original: "/pictures/jpg/subject16.jpg",
  },
  {
    original: "/pictures/jpg/subject17.jpg",
  },
  {
    original: "/pictures/jpg/subject18.jpg",
  },
  {
    original: "/pictures/jpg/subject19.jpg",
  },
  {
    original: "/pictures/jpg/subject20.jpg",
  },
  {
    original: "/pictures/jpg/subject21.jpg",
  },
  {
    original: "/pictures/jpg/subject22.jpg",
  },
];

class MyGallery extends React.Component {
  render() {
    return (
      <ImageGallery
        items={images}
        autoPlay
        showThumbnails={false}
        showFullscreenButton={false}
        showNav={false}
        slideInterval={5000}
        showBullets={true}
      />
    );
  }
}
/**
|--------------------------------------------------
| code
|--------------------------------------------------
*/
export const Subject = () => {
  return <MyGallery />;
};
