import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { Row } from "react-bootstrap";
import SectionHeader from "components/SectionHeader";
import PageSection from "components/PageSection";
import "./style.scss";
import Icon from "components/Icon";

const Price = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }
  const { anchor, header: rootHeader, subheader: rootSubHeader, prices } = frontmatter;
  return (
    <PageSection className={clsx("price-section", className)} id={anchor}>
      <Row>
        <SectionHeader header={rootHeader} subheader={rootSubHeader} />
      </Row>
      <Row>
        {prices.map(({ header, content }) => (
          <div className="wrapper" key={header}>
            <h4>{header}</h4>
            <div className="content">
              {content.map((ct, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <p className="text-muted" key={index}>
                  <Icon className="check-icon" iconName="CheckSquareIcon" size="1x" />
                  {ct}
                </p>
              ))}
            </div>
          </div>
        ))}
      </Row>
    </PageSection>
  );
};

Price.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

Price.defaultProps = {
  className: null,
  frontmatter: null,
};

export default Price;
