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
        <h1 className="title--author">Casey Homer</h1>
        <Link
          activeClass="active"
          to="section-two"
          spy={true}
          smooth={true}
          duration={1000}
        >
          <button className="btn btn-outline-light">NEXT</button>
        </Link>
      </SectionOne>
    </Element>
    <Element name="section-two">
      <SectionTwo>
        <h1 className="title--author">Casey Homer</h1>
        <Link
          activeClass="active"
          to="section-one"
          spy={true}
          smooth={true}
          duration={1000}
        >
          <button className="btn btn-outline-light">BACK</button>
        </Link>
      </SectionTwo>
    </Element>
  </Layout>
);

export default IndexPage;
