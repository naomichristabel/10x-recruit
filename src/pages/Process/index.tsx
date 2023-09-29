import { lazy } from "react";
import { Row, Col } from "antd";
import AboutContent from "../../content/AboutContent.json";
import { SvgIcon } from "../../common/SvgIcon";
import {
  ValuesWrapper,
  ProcessTitle,
} from "./styles";

const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const Process = () => {
  return (
    <Container>
      <ScrollToTop />
       <Row justify="space-evenly" align="middle" style={{ marginTop:'5%', marginBottom:'5%', textAlign: 'center' }}>
        <ValuesWrapper>
          <h6>Our Process</h6>
        </ValuesWrapper>
       </Row>
       <Row justify="space-evenly" align="middle" style={{ marginTop:'5%', marginBottom:'5%', textAlign: 'center' }}>
        <ValuesWrapper>
              {typeof AboutContent.our_process === "object" && 
                 AboutContent.our_process?.map((item: any, id: number) => {
                      return (
                        <Col key={id} span={8} style={{ margin: '30px 0px' }}>
                          <SvgIcon src={item.icon} width="100px" height="100px" />
                          <ProcessTitle>{item.title}</ProcessTitle>
                        </Col>
                      )
               })}
        </ValuesWrapper>
      </Row>
    </Container>
  );
};

export default Process;
