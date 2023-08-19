import React from "react";
import ImageGallery from "react-image-gallery";
/**
|--------------------------------------------------
| images reportage
|--------------------------------------------------
*/
const images = [
  {
    original: "/pictures/jpg/forever1.jpg",
  },
  {
    original: "/pictures/jpg/forever2.jpg",
  },
  {
    original: "/pictures/jpg/forever3.jpg",
  },
  {
    original: "/pictures/jpg/forever4.jpg",
  },
  {
    original: "/pictures/jpg/forever5.jpg",
  },
  {
    original: "/pictures/jpg/forever6.jpg",
  },
  {
    original: "/pictures/jpg/forever7.jpg",
  },
  {
    original: "/pictures/jpg/forever8.jpg",
  },
  {
    original: "/pictures/jpg/forever9.jpg",
  },
  {
    original: "/pictures/jpg/forever10.jpg",
  },
  {
    original: "/pictures/jpg/forever11.jpg",
  },
  {
    original: "/pictures/jpg/forever12.jpg",
  },
  {
    original: "/pictures/jpg/forever13.jpg",
  },
  {
    original: "/pictures/jpg/forever14.jpg",
  },
  {
    original: "/pictures/jpg/forever15.jpg",
  },
  {
    original: "/pictures/jpg/forever16.jpg",
  },
  {
    original: "/pictures/jpg/forever17.jpg",
  },
  {
    original: "/pictures/jpg/forever18.jpg",
  },
  {
    original: "/pictures/jpg/forever19.jpg",
  },
  {
    original: "/pictures/jpg/forever20.jpg",
  },
  {
    original: "/pictures/jpg/forever21.jpg",
  },
  {
    original: "/pictures/jpg/forever22.jpg",
  },
  {
    original: "/pictures/jpg/forever23.jpg",
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
export const Forever = () => {
  return <MyGallery />;
};
