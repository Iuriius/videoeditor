import React from "react";
import { PhotoStyled, Mebw } from "./Photo.styled";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
/*
/**|======================================
/**| images gallery
/**|======================================
*/
const images = [
  {
    original: "/pictures/jpg/silhouette2.jpg",
    thumbnail: "/pictures/jpg/silhouette2.jpg",
  },
  {
    original: "/pictures/jpg/snail.jpg",
    thumbnail: "/pictures/jpg/snail.jpg",
  },
  {
    original: "/pictures/jpg/castle.jpg",
    thumbnail: "/pictures/jpg/castle.jpg",
  },
  {
    original: "/pictures/jpg/fog.jpg",
    thumbnail: "/pictures/jpg/fog.jpg",
  },
  {
    original: "/pictures/jpg/silhouette.jpg",
    thumbnail: "/pictures/jpg/silhouette.jpg",
  },
  {
    original: "/pictures/jpg/air.jpg",
    thumbnail: "/pictures/jpg/air.jpg",
  },
  {
    original: "/pictures/jpg/sunset2.jpg",
    thumbnail: "/pictures/jpg/sunset2.jpg",
  },
  {
    original: "/pictures/jpg/uptown.jpg",
    thumbnail: "/pictures/jpg/uptown.jpg",
  },
  {
    original: "/pictures/jpg/pier.jpg",
    thumbnail: "/pictures/jpg/pier.jpg",
  },
  {
    original: "/pictures/jpg/silhouette3.jpg",
    thumbnail: "/pictures/jpg/silhouette3.jpg",
  },
  {
    original: "/pictures/jpg/ship.jpg",
    thumbnail: "/pictures/jpg/ship.jpg",
  },
  {
    original: "/pictures/jpg/moon.jpg",
    thumbnail: "/pictures/jpg/moon.jpg",
  },
];
/*
/**|======================================
/**| images
/**|======================================
*/
import mebw from "/pictures/jpg/mebw.jpg";

/*
/**|======================================
/**| code
/**|======================================
*/

class MyGallery extends React.Component {
  render() {
    return <ImageGallery items={images} />;
  }
}

const Photo = () => {
  return (
    <>
      <PhotoStyled>
        <MyGallery />
        <Mebw src={mebw} alt="author" />
      </PhotoStyled>
    </>
  );
};

export default Photo;
