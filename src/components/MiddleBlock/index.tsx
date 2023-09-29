import { Row, Col } from "antd";
import { useNavigate } from "react-router-dom";
import { withTranslation } from "react-i18next";
import { Slide, Fade } from "react-awesome-reveal";
import { Button } from "../../common/Button";
import { MiddleBlockSection, Content, ContentWrapper } from "./styles";

interface MiddleBlockProps {
  title: string;
  content: string;
  button: string;
  t: any;
}

const MiddleBlock = ({ title, content, button, t }: MiddleBlockProps) => {
  const navigate = useNavigate();
  
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <MiddleBlockSection>
      <Fade>
        <Row justify="center" align="middle" >
          <ContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
              <h6>{t(title)}</h6>
              <Content>{t(content)}</Content>
              {button && (
                <Button name="submit" onClick={() => navigate('/')}>
                  {t(button)}
                </Button>
              )}
            </Col>
          </ContentWrapper>
        </Row>
      </Fade>
    </MiddleBlockSection>
  );
};

export default withTranslation()(MiddleBlock);
