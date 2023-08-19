import React from "react";
import ImageGallery from "react-image-gallery";
/**
|--------------------------------------------------
| images reportage
|--------------------------------------------------
*/
const images = [
  {
    original: "/pictures/jpg/st1.jpg",
  },
  {
    original: "/pictures/jpg/st2.jpg",
  },
  {
    original: "/pictures/jpg/st3.jpg",
  },
  {
    original: "/pictures/jpg/st4.jpg",
  },
  {
    original: "/pictures/jpg/st5.jpg",
  },
  {
    original: "/pictures/jpg/st6.jpg",
  },
  {
    original: "/pictures/jpg/st7.jpg",
  },
  {
    original: "/pictures/jpg/st8.jpg",
  },
  {
    original: "/pictures/jpg/st9.jpg",
  },
  {
    original: "/pictures/jpg/st10.jpg",
  },
  {
    original: "/pictures/jpg/st11.jpg",
  },
  {
    original: "/pictures/jpg/st12.jpg",
  },
  {
    original: "/pictures/jpg/st13.jpg",
  },
  {
    original: "/pictures/jpg/st14.jpg",
  },
  {
    original: "/pictures/jpg/st15.jpg",
  },
  {
    original: "/pictures/jpg/st16.jpg",
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
export const Street = () => {
  return <MyGallery />;
};
