import React from "react";
import ImageGallery from "react-image-gallery";
/**
|--------------------------------------------------
| images reportage
|--------------------------------------------------
*/
const images = [
  {
    original: "/pictures/jpg/kids1.jpg",
  },
  {
    original: "/pictures/jpg/kids2.jpg",
  },
  {
    original: "/pictures/jpg/kids3.jpg",
  },
  {
    original: "/pictures/jpg/kids4.jpg",
  },
  {
    original: "/pictures/jpg/kids5.jpg",
  },
  {
    original: "/pictures/jpg/kids6.jpg",
  },
  {
    original: "/pictures/jpg/kids7.jpg",
  },
  {
    original: "/pictures/jpg/kids8.jpg",
  },
  {
    original: "/pictures/jpg/kids9.jpg",
  },
  {
    original: "/pictures/jpg/kids10.jpg",
  },
  {
    original: "/pictures/jpg/kids11.jpg",
  },
  {
    original: "/pictures/jpg/kids12.jpg",
  },
  {
    original: "/pictures/jpg/kids13.jpg",
  },
  {
    original: "/pictures/jpg/kids14.jpg",
  },
  {
    original: "/pictures/jpg/kids15.jpg",
  },
  {
    original: "/pictures/jpg/kids16.jpg",
  },
  {
    original: "/pictures/jpg/kids17.jpg",
  },
  {
    original: "/pictures/jpg/kids18.jpg",
  },
  {
    original: "/pictures/jpg/kids19.jpg",
  },
  {
    original: "/pictures/jpg/kids20.jpg",
  },
  {
    original: "/pictures/jpg/kids21.jpg",
  },
  {
    original: "/pictures/jpg/kids22.jpg",
  },
  {
    original: "/pictures/jpg/kids23.jpg",
  },
  {
    original: "/pictures/jpg/kids24.jpg",
  },
  {
    original: "/pictures/jpg/kids25.jpg",
  },
  {
    original: "/pictures/jpg/kids26.jpg",
  },
  {
    original: "/pictures/jpg/kids27.jpg",
  },
  {
    original: "/pictures/jpg/kids28.jpg",
  },
  {
    original: "/pictures/jpg/kids29.jpg",
  },
  {
    original: "/pictures/jpg/kids30.jpg",
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
export const Children = () => {
  return <MyGallery />;
};
