import React from "react";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
// Import Swiper styles
import "swiper/swiper-bundle.css";
import ImageCard from "components/ImageCard";

import "./style.scss";

SwiperCore.use([Autoplay]);

const Top = ({ frontmatter, backgrounds }) => {
  if (!frontmatter) {
    return null;
  }

  const { header, subheader } = frontmatter;

  return (
    <>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
      >
        {backgrounds.map((img) => (
          <SwiperSlide key={img.relativePath}>
            <ImageCard
              fluid={img.childImageSharp.fluid}
              header={header}
              subheader={subheader}
            />

          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

Top.propTypes = {
  frontmatter: PropTypes.object,
  backgrounds: PropTypes.array,
};

Top.defaultProps = {
  frontmatter: null,
  backgrounds: [],
};

export default Top;
