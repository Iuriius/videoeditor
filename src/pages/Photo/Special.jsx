import React from "react";
import ImageGallery from "react-image-gallery";
/**
|--------------------------------------------------
| images reportage
|--------------------------------------------------
*/
const images = [
  {
    original: "/pictures/jpg/peugeot0.jpg",
  },
  {
    original: "/pictures/jpg/peugeot1.jpg",
  },
  {
    original: "/pictures/jpg/peugeot2.jpg",
  },
  {
    original: "/pictures/jpg/peugeot3.jpg",
  },
  {
    original: "/pictures/jpg/peugeot4.jpg",
  },
  {
    original: "/pictures/jpg/peugeot5.jpg",
  },
  {
    original: "/pictures/jpg/peugeot6.jpg",
  },
  {
    original: "/pictures/jpg/peugeot7.jpg",
  },
  {
    original: "/pictures/jpg/peugeot8.jpg",
  },
  {
    original: "/pictures/jpg/peugeot9.jpg",
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

export const Special = () => {
  return <MyGallery />;
};
