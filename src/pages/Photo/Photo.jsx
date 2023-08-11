import React from "react";
import { PhotoStyled, Mebw, Flexwrapper, H1, H2, Section } from "./Photo.styled";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
/*
/**|======================================
/**| components
/**|======================================
*/
import { Blackandwhite } from "./Blackandwhite";
import { Children } from "./Children";
import { Nature } from "./Nature";
import { Portraits } from "./Portraits";
import { Reportage } from "./Reportage";
import { Special } from "./Special";
import { Street } from "./Street";
import { Subject } from "./Subject";
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
        <Flexwrapper>
          <Mebw src={mebw} alt="author" />
          <div>
            <H1>ФІЛОСОФІЯ</H1>
            <H2>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id molestias, impedit iste
              ullam quis sunt amet, accusantium temporibus veniam architecto fuga at eaque quaerat
              nostrum soluta voluptates dolor totam ipsam.lorem Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Aut voluptatem, quos dolor magni dignissimos minus nisi
              magnam illum tempora eligendi laboriosam quae voluptatibus velit autem culpa pariatur
              amet vel suscipit?
            </H2>
          </div>
        </Flexwrapper>
        <Section>
          РЕПОРТАЖНА ЗЙОМКА
          <Reportage />
        </Section>
        <Section>
          ПОРТРЕТНА ФОТОГРАФІЯ
          <Portraits />
        </Section>
        <Section>
          ДИТЯЧА ФОТОГРАФІЯ
          <Children />
        </Section>
        <Section>
          СТРІТ ФОТОГРАФІЯ
          <Street />
        </Section>
        <Section>
          ПРЕДМЕТНА ФОТОГРАФІЯ
          <Subject />
        </Section>
        <Section>
          ПРИРОДА
          <Nature />
        </Section>{" "}
        <Section>
          SPECIAL
          <Special />
        </Section>
        <Section>
          BLACK AND WHITE
          <Blackandwhite />
        </Section>
      </PhotoStyled>
    </>
  );
};

export default Photo;
