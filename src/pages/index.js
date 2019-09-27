import React from "react";
import SectionOne from "../components/bgCaseyHorner";
import SectionTwo from "../components/bgStephenWalker";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Element, Link } from "react-scroll";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[""]} />
    <Element name="section-one">
      <SectionOne>
        <h1 className="title--author">Casey Horner</h1>
        <Link
          activeClass="active"
          to="section-two"
          spy={true}
          smooth={true}
          duration={1000}
        >
          <button className="btn btn-outline-light mt-3 mb-4">NEXT</button>
        </Link>
        <a
          style={{
            backgroundColor: "transparent",
            color: "white",
            textDecoration: "none",
            padding: "4px 6px",
            fontFamily:
              "-apple-system, BlinkMacSystemFont, 'San Francisco', 'Helvetica Neue', Helvetica, Ubuntu, Roboto, Noto, 'Segoe UI', Arial, sans-serif",
            fontSize: "12px",
            fontWeight: "bold",
            lineHeight: "1.2",
            display: "inline-block",
            borderRadius: "3px",
          }}
          href="https://unsplash.com/@mischievous_penguins?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge"
          target="_blank"
          rel="noopener noreferrer"
          title="Download free do whatever you want high-resolution photos from Casey Horner"
        >
          <span style={{ display: "inline-block", padding: "2px 3px" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              style={{
                height: "12px",
                width: "auto",
                position: "relative",
                verticalAlign: "middle",
                top: "-2px",
                fill: "white",
              }}
              viewBox="0 0 32 32"
            >
              <title>unsplash-logo</title>
              <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z" />
            </svg>
          </span>
          <span style={{ display: "inline-block", padding: "2px 3px" }}>
            Casey Horner
          </span>
        </a>
      </SectionOne>
    </Element>
    <Element name="section-two">
      <SectionTwo>
        <h1 className="title--author">Stephen Walker</h1>
        <Link
          activeClass="active"
          to="section-one"
          spy={true}
          smooth={true}
          duration={1000}
        >
          <button className="btn btn-outline-light mt-3 mb-4">BACK</button>
        </Link>
        <a
          style={{
            backgroundColor: "black",
            color: "white",
            textDecoration: "none",
            padding: "4px 6px",
            fontFamily:
              "-apple-system, BlinkMacSystemFont, 'San Francisco', 'Helvetica Neue', Helvetica, Ubuntu, Roboto, Noto, 'Segoe UI', Arial, sans-serif",
            fontSize: "12px",
            fontWeight: "bold",
            lineHeight: "1.2",
            display: "inline-block",
            borderRadius: "3px",
          }}
          href="https://unsplash.com/@stphnwlkr?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge"
          target="_blank"
          rel="noopener noreferrer"
          title="Download free do whatever you want high-resolution photos from Stephen Walker"
        >
          <span style={{ display: "inline-block", padding: "2px 3px" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              style={{
                height: "12px",
                width: "auto",
                position: "relative",
                verticalAlign: "middle",
                top: "-2px",
                fill: "white",
              }}
              viewBox="0 0 32 32"
            >
              <title>unsplash-logo</title>
              <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z" />
            </svg>
          </span>
          <span style={{ display: "inline-block", padding: "2px 3px" }}>
            Stephen Walker
          </span>
        </a>
      </SectionTwo>
    </Element>
  </Layout>
);

export default IndexPage;
