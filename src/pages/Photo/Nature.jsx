import React from "react";
import ImageGallery from "react-image-gallery";
/**
|--------------------------------------------------
| images reportage
|--------------------------------------------------
*/
const images = [
  {
    original: "/pictures/jpg/nature1.jpg",
  },
  {
    original: "/pictures/jpg/nature2.jpg",
  },
  {
    original: "/pictures/jpg/nature3.jpg",
  },
  {
    original: "/pictures/jpg/nature4.jpg",
  },
  {
    original: "/pictures/jpg/nature5.jpg",
  },
  {
    original: "/pictures/jpg/nature6.jpg",
  },
  {
    original: "/pictures/jpg/nature7.jpg",
  },
  {
    original: "/pictures/jpg/nature8.jpg",
  },
  {
    original: "/pictures/jpg/nature9.jpg",
  },
  {
    original: "/pictures/jpg/nature10.jpg",
  },
  {
    original: "/pictures/jpg/nature11.jpg",
  },
  {
    original: "/pictures/jpg/nature12.jpg",
  },
  {
    original: "/pictures/jpg/nature13.jpg",
  },
  {
    original: "/pictures/jpg/nature14.jpg",
  },
  {
    original: "/pictures/jpg/nature15.jpg",
  },
  {
    original: "/pictures/jpg/nature16.jpg",
  },
  {
    original: "/pictures/jpg/nature17.jpg",
  },
  {
    original: "/pictures/jpg/nature18.jpg",
  },
  {
    original: "/pictures/jpg/nature19.jpg",
  },
  {
    original: "/pictures/jpg/nature20.jpg",
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
export const Nature = () => {
  return <MyGallery />;
};
