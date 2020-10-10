import React from "react";
import PropTypes from "prop-types";

import { Row, Col } from "react-bootstrap";
import Icon from "components/Icon";
import PageSection from "components/PageSection";

const Contact = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { anchor, header, subheader, telephone, email } = frontmatter;
  const info = subheader.split(";");

  return (
    <PageSection className={className} id={anchor}>
      <Row className="justify-content-center">
        <Col lg={8} className="text-center">
          <h2 className="mt-0">{header}</h2>
          <hr className="divider my-4" />
          <h6 className="mt-0">{info[0]}</h6>
          <h6 className="mt-0">{info[1]}</h6>
          <p className="text-muted mb-5">{info[2]}</p>
        </Col>
      </Row>
      <Row>
        <Col lg={6} className="ml-auto text-center d-flex align-items-center justify-content-center">
          <Icon iconName="PhoneIcon" size="2x" className="text-muted mr-2" />
          <a className="d-block" href={`tel:${telephone}`}>
            {telephone}
          </a>
        </Col>
        <Col lg={6} className="mr-auto text-center d-flex align-items-center justify-content-center">
          <Icon iconName="EnvelopIcon" size="2x" className="text-muted mr-2" />
          <a className="d-block" href={`mailto:${email}`}>
            {email}
          </a>
        </Col>
      </Row>
    </PageSection>
  );
};

Contact.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

Contact.defaultProps = {
  className: null,
  frontmatter: null,
};

export default Contact;
