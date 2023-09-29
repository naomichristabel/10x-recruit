import { lazy } from "react";
import { Row, Col } from "antd";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import {
  ValuesWrapper,
  ValuesTitle,
  ValuesPara,
} from "./styles";

const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const About = () => {
  return (
    <Container>
      <ScrollToTop />
      <MiddleBlock
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
      />
       <Row justify="space-evenly" align="middle" style={{ marginTop:'5%', marginBottom:'5%', textAlign: 'center' }}>
        <h6>Our Values</h6>
        <ValuesWrapper>
              {typeof AboutContent.our_values === "object" && 
                 AboutContent.our_values?.map((item: any, id: number) => {
                      return (
                        <Col key={id} span={8} style={{ marginTop: '50px' }}>
                          <ValuesTitle>{item.title}</ValuesTitle>
                          <ValuesPara>{item.content}</ValuesPara>
                        </Col>
                      )
               })}
              </ValuesWrapper>
      </Row>
    </Container>
  );
};

export default About;
