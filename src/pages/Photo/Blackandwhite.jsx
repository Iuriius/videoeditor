import React from "react";
import ImageGallery from "react-image-gallery";
/**
|--------------------------------------------------
| images reportage
|--------------------------------------------------
*/
const images = [
  {
    original: "/pictures/jpg/bw1.jpg",
  },
  {
    original: "/pictures/jpg/bw2.jpg",
  },
  {
    original: "/pictures/jpg/bw3.jpg",
  },
  {
    original: "/pictures/jpg/bw4.jpg",
  },
  {
    original: "/pictures/jpg/bw5.jpg",
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
export const Blackandwhite = () => {
  return <MyGallery />;
};
