import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import ValuesContent from "../../content/ValuesContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";
import ValueBlock from "../../components/ValueBlock";

const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        type="right"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="recruiter.jpg"
        id="intro"
      />
      {/* <MiddleBlock
        title={MiddleBlockContent.title}
        content={MiddleBlockContent.text}
        button={MiddleBlockContent.button}
      />
      <ContentBlock
        type="left"
        title={AboutContent.title_about}
        content={AboutContent.text_about_1}
        content2={AboutContent.text_about_2}
        content3={AboutContent.text_about_3}
        content4={AboutContent.text_about_4}
        icon="about_us.jpg"
        id="about"
      /> */}
      <ContentBlock
        type="right"
        title={MissionContent.title}
        content={MissionContent.text}
        icon="executive_search.jpg"
        id="services"
      />
      <ContentBlock
        type="right"
        title={MissionContent.title2}
        content={MissionContent.text2}
        icon="perm_hiring.jpg"
        id="services"
      />
      <ContentBlock
        type="left"
        title={AboutContent.title}
        content={AboutContent.text}
        section={AboutContent.section}
        icon="different_fields.jpg"
        id="focussed"
        isSlide={true}
      />
      <ValueBlock 
        icon="values.jpg"
        section={ValuesContent.section}
        our_values={ValuesContent.our_values}
      />
      {/* <Contact
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      /> */}
    </Container>
  );
};

export default Home;
