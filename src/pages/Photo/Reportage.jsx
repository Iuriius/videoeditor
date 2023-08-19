import React from "react";
import ImageGallery from "react-image-gallery";
/**
|--------------------------------------------------
| images reportage
|--------------------------------------------------
*/
const images = [
  {
    original: "/pictures/jpg/reportage1.jpg",
  },
  {
    original: "/pictures/jpg/reportage2.jpg",
  },
  {
    original: "/pictures/jpg/reportage3.jpg",
  },
  {
    original: "/pictures/jpg/reportage4.jpg",
  },
  {
    original: "/pictures/jpg/reportage5.jpg",
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
export const Reportage = () => {
  return <MyGallery />;
};
