import Image from "components/Image";
import PropTypes from "prop-types";
import React from "react";
import { Modal } from "react-bootstrap";
// import { Button } from "react-bootstrap";
// import Icon from "./Icon";

const PortfolioDetailDialog = ({
  onHide,
  imageFileName,
  imageAlt,
  header,
  subheader,
  content,
  extraInfo,
  ...restProps
}) => {
  return (
    <Modal
      {...restProps}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">{header}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="item-intro text-muted">{subheader}</p>
        {imageFileName.map((img) => (
          <Image
            key={img}
            className="img-fluid d-block"
            fileName={img}
            alt={imageAlt || header || subheader}
          />
        ))}
        <p>{content}</p>
        {extraInfo}
      </Modal.Body>
      {/* <Modal.Footer>
        <div className="mx-auto">
          <Button variant="primary" onClick={onHide}>
            <Icon iconName="CloseIcon" />
            &nbsp; Close Project
          </Button>
        </div>
      </Modal.Footer> */}
    </Modal>
  );
};

PortfolioDetailDialog.propTypes = {
  onHide: PropTypes.func,
  imageFileName: PropTypes.string,
  imageAlt: PropTypes.string,
  header: PropTypes.string,
  subheader: PropTypes.string,
  content: PropTypes.string,
  extraInfo: PropTypes.any,
};

PortfolioDetailDialog.defaultProps = {
  onHide: null,
  imageFileName: "",
  imageAlt: null,
  header: "",
  subheader: "",
  content: "",
  extraInfo: null,
};

export default PortfolioDetailDialog;
