import { faBlenderPhone, faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LanguageSelector from "components/LanguageSelector";
import PageSection from "components/PageSection";
import SectionHeader from "components/SectionHeader";
import SEO from "components/SEO";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { Row } from "react-bootstrap";
import breakDownAllNodes from "utils/breakDownAllNodes";
import fileNameToSectionName from "utils/fileNameToSectionName";
import "utils/fixFontAwesome";
import Footer from "views/Footer";
import Navbar from "views/Navbar";
import * as Sections from "views/Sections";
import Top from "views/Top";
import "../style/main.scss";

/**
 * get file name list from content/sections folder
 */
export const query = graphql`
  query IndexQuery($langKey: String!) {
    site {
      siteMetadata {
        keywords
        description
      }
    }
    backgrounds: allFile(filter: { sourceInstanceName: { eq: "backgrounds" } }) {
      nodes {
        relativePath
        childImageSharp {
          fluid(maxWidth: 4000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    allMarkdownRemark(
      filter: { fields: { langKey: { eq: $langKey } } }
      sort: { order: ASC, fields: [fields___directoryName, fields___fileName] }
    ) {
      nodes {
        frontmatter {
          brand
          anchor
          clients {
            href
            imageFileName
          }
          content
          copyright
          header
          email
          imageFileName
          jumpToAnchor
          whyHeader
          why
          menuText
          prices {
            header
            content
          }
          events {
            content
            header
            subheader
            imageFileNameDetail
            imageFileName
          }
          portfolios {
            content
            extraInfo
            header
            subheader
            imageFileNameDetail
            imageFileName
          }
          privacyHref
          privacyText
          services {
            content
            header
            iconName
            imageFileName
          }
          social {
            facebook
            github
            linkedin
            medium
            twitter
          }
          subheader
          teamMember {
            header
            imageFileName
            social {
              facebook
              github
              linkedin
              medium
              twitter
            }
            subheader
          }
          telephone
          termsHref
          termsText
          title
          timeline {
            content
            header
            imageContent
            imageFileName
            subheader
          }
        }
        fields {
          fileName
          directoryName
        }
      }
    }
  }
`;

const IndexPage = ({ data, pathContext: { langKey, defaultLang, langTextMap } }) => {
  const {
    site: {
      siteMetadata: { keywords, description },
    },
    allMarkdownRemark: { nodes },
    backgrounds,
  } = data;

  const { topNode, navBarNode, anchors, footerNode, sectionsNodes } = breakDownAllNodes(nodes);

  let langSelectorPart;
  if (langTextMap != null && Object.keys(langTextMap).length > 1) {
    langSelectorPart = (
      <LanguageSelector langKey={langKey} defaultLang={defaultLang} langTextMap={langTextMap} />
    );
  }

  return (
    <>
      <SEO
        lang={langKey}
        title="Hoàng Gia Sài Gòn BMC Security"
        keywords={keywords}
        description={description}
      />
      <Navbar
        anchors={anchors}
        frontmatter={navBarNode.frontmatter}
        extraItems={langSelectorPart}
      />

      <Top frontmatter={topNode.frontmatter} backgrounds={backgrounds.nodes} />
      <>
        <PageSection className="top-why">
          <Row>
            <SectionHeader
              header={topNode.frontmatter.whyHeader}
              subheader={topNode.frontmatter.why}
            />
            <div className="m-auto">
              <p className="fs-20" style={{ color: "rgb(221, 11, 74)", fontWeight: "bold" }}>
                Online support
              </p>
              <FontAwesomeIcon icon={faBlenderPhone} size="lg" className="mr-2" />
              <span className="fs-20" style={{ color: "rgb(221, 11, 74)", fontWeight: "bold" }}>
                Hotline: 0937451910
              </span>
              <br />
              <FontAwesomeIcon icon={faPhoneAlt} className="mr-2" />
              <span className="fs-18">Phòng nhân sự     : 0906794612</span>
              <br />
              <FontAwesomeIcon icon={faPhoneAlt} className="mr-2" />
              <span className="fs-18">Phòng nghiệp vụ&nbsp;&nbsp;: 0981916419</span>
              <br />
              <FontAwesomeIcon icon={faPhoneAlt} className="mr-2" />
              <span className="fs-18">Phòng kinh doanh: 0902369610</span>
              <br />
              <FontAwesomeIcon icon={faPhoneAlt} className="mr-2" />
              <span className="fs-18">PCCC-Camera&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 0788721856</span>
              <br />
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              <span className="fs-18">Email: thachhoanggiasaigonsss@gmail.com</span>
              <br />
            </div>
          </Row>
        </PageSection>
        {sectionsNodes.map(({ frontmatter, fields: { fileName } }, ind) => {
          const sectionComponentName = fileNameToSectionName(fileName);
          const SectionComponent = Sections[sectionComponentName];

          return SectionComponent ? (
            <SectionComponent
              key={sectionComponentName}
              className={ind % 2 === 1 ? "bg-light" : null}
              frontmatter={frontmatter}
            />
          ) : null;
        })}
      </>
      <Footer frontmatter={footerNode.frontmatter} />
    </>
  );
};

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
  pathContext: PropTypes.object,
};

IndexPage.defaultProps = {
  pathContext: {
    langKey: "vi",
    defaultLang: "vi",
    langTextMap: {},
  },
};

export default IndexPage;
