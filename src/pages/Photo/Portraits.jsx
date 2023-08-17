import React from "react";
import ImageGallery from "react-image-gallery";
/**
|--------------------------------------------------
| images reportage
|--------------------------------------------------
*/
const images = [
  {
    original: "/pictures/jpg/portrait1.jpg",
  },
  {
    original: "/pictures/jpg/portrait2.jpg",
  },
  {
    original: "/pictures/jpg/portrait3.jpg",
  },
  {
    original: "/pictures/jpg/portrait4.jpg",
  },
  {
    original: "/pictures/jpg/portrait5.jpg",
  },
  {
    original: "/pictures/jpg/portrait6.jpg",
  },
  {
    original: "/pictures/jpg/portrait7.jpg",
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
export const Portraits = () => {
  return <MyGallery />;
};
