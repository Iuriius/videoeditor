import React from "react";
import {
  PhotoStyled,
  Mebw,
  Flexwrapper,
  H1,
  H2,
  H3,
  Section,
  Philosopy,
} from "./Photo.styled";
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
    return <ImageGallery autoPlay items={images} />;
  }
}

const Photo = () => {
  return (
    <>
      <PhotoStyled>
        <MyGallery />
        <Flexwrapper>
          <Philosopy>
            <H1>ФІЛОСОФІЯ</H1>
            <H3>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id
              molestias, impedit iste ullam quis sunt amet, accusantium
              temporibus veniam architecto fuga at eaque quaerat nostrum soluta
              voluptates dolor totam ipsam.lorem Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Aut voluptatem, quos dolor magni
              dignissimos minus nisi magnam illum tempora eligendi laboriosam
              quae voluptatibus velit autem culpa pariatur amet vel suscipit?
            </H3>
          </Philosopy>
          <Mebw src={mebw} alt="author" />
        </Flexwrapper>
        <Section>
          <H2>РЕПОРТАЖНА ЗЙОМКА</H2>
          <H3>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id
            molestias, impedit iste ullam quis sunt amet, accusantium temporibus
          </H3>
          <Reportage />
        </Section>
        <Section>
          <H2>ПОРТРЕТНА ФОТОГРАФІЯ</H2>
          <H3>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id
            molestias, impedit iste ullam quis sunt amet, accusantium temporibus
          </H3>
          <Portraits />
        </Section>
        <Section>
          <H2>ДИТЯЧА ФОТОГРАФІЯ</H2>
          <H3>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id
            molestias, impedit iste ullam quis sunt amet, accusantium temporibus
          </H3>
          <Children />
        </Section>
        <Section>
          <H2>СТРІТ ФОТОГРАФІЯ</H2>
          <H3>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id
            molestias, impedit iste ullam quis sunt amet, accusantium temporibus
          </H3>
          <Street />
        </Section>
        <Section>
          <H2>ПРЕДМЕТНА ФОТОГРАФІЯ</H2>
          <H3>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id
            molestias, impedit iste ullam quis sunt amet, accusantium temporibus
          </H3>
          <Subject />
        </Section>
        <Section>
          <H2>ПРИРОДА</H2>
          <H3>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id
            molestias, impedit iste ullam quis sunt amet, accusantium temporibus
          </H3>
          <Nature />
        </Section>

        <Section>
          <H2>SPECIAL</H2>
          <H3>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id
            molestias, impedit iste ullam quis sunt amet, accusantium temporibus
          </H3>
          <Special />
        </Section>

        <Section>
          <H2>BLACK AND WHITE</H2>
          <H3>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id
            molestias, impedit iste ullam quis sunt amet, accusantium temporibus
          </H3>
          <Blackandwhite />
        </Section>
      </PhotoStyled>
    </>
  );
};

export default Photo;
