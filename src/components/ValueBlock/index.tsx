
import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import { Button } from "../../common/Button";
import { Fade } from "react-awesome-reveal";
import ValuesContent from "../../content/ValuesContent.json";
import {
  RightBlockContainer,
  Content,
  ContentWrapper,
  ButtonWrapper,
  ServiceWrapper,
  ValuesWrapper,
  ValuesTitle,
  ValuesPara,
  MinTitle,
  MinPara,
} from "./styles";

const RightBlock = ({
  title,
  content,
  title2,
  content2,
  button,
  icon,
  t,
  id,
  section,
  our_values
}: any) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <RightBlockContainer>
      <Fade direction="right">
        <Row justify="space-between" align="middle" id={id}>
          <Col lg={11} md={11} sm={11} xs={24}>
            <ContentWrapper>
              <h6>How do we add value?</h6>
              <ServiceWrapper>
              {typeof section === "object" && 
                 section?.map((item: any, id: number) => {
                      return (
                        <Col key={id} span={8} style={{ marginTop: '50px' }}>
                          <SvgIcon src={item.icon} width="60px" height="60px" />
                          <MinTitle>{item.title}</MinTitle>
                          <MinPara>{item.content}</MinPara>
                        </Col>
                      )
               })}
              </ServiceWrapper>
            </ContentWrapper>
          </Col>
          <Col lg={11} md={11} sm={12} xs={24}>
            <SvgIcon src={icon} width="100%" height="100%" />
          </Col>
        </Row>
      </Fade>
      {/* <Row justify="space-evenly" align="middle" id={id} style={{ marginTop:'5%', textAlign: 'center' }}>
        <h6>Our Values</h6>
        <ValuesWrapper>
              {typeof our_values === "object" && 
                 our_values?.map((item: any, id: number) => {
                      return (
                        <Col key={id} span={8} style={{ marginTop: '50px' }}>
                          <ValuesTitle>{item.title}</ValuesTitle>
                          <ValuesPara>{item.content}</ValuesPara>
                        </Col>
                      )
               })}
              </ValuesWrapper>
      </Row> */}
    </RightBlockContainer>
  );
};

export default withTranslation()(RightBlock);



                   