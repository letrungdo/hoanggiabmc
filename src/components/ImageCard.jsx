import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { Card } from "react-bootstrap";
import "./ImageCard.scss";
import Img from "gatsby-image";

const ImageCard = ({ className, fluid, header, subheader, extraInfo }) => {
  return (
    <Card className={clsx("image-card bg-dark text-white text-center", className)}>
      <Img className="image-card" alt="bg-slide" fluid={fluid} />
      <Card.ImgOverlay className="card-overlay">
        <div className="intro-text">
          <div className="intro-lead-in">{subheader}</div>
          <div className="intro-heading text-uppercase">{header}</div>
          {extraInfo}
        </div>
      </Card.ImgOverlay>
    </Card>
  );
};

ImageCard.propTypes = {
  className: PropTypes.string,
  fluid: PropTypes.object,
  header: PropTypes.string,
  subheader: PropTypes.string,
  extraInfo: PropTypes.any,
};

ImageCard.defaultProps = {
  className: null,
  fluid: null,
  header: "",
  subheader: "",
  extraInfo: null,
};

export default ImageCard;
