import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";

import i18n from "i18next";
import {
  FooterSection,
  Title,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  ParaLink,
  Large,
  Chat,
  Empty,
  FooterContainer,
  Language,
  Label,
  LanguageSwitch,
  LanguageSwitchContainer,
} from "./styles";
import { flexbox } from "@mui/system";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = ({ t }: any) => {
  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
        style={{ padding: '10px' }}
      >
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    );
  };

  return (
    <>
      <FooterSection>
        <Container>
          <Row justify="space-between">
            <Col lg={10} md={10} sm={12} xs={12}>
              
                <Language>{t("Contact")}</Language>
                {/* <Large to="/">{t("Tell us everything")}</Large> */}
                <Para>
                  {t(`Do you have any question? Feel free to reach out.`)}
                </Para>

                <br/>
              
              <Row justify="space-between">
                <Col>
                  <Chat>Email us:</Chat>
                    <a href="mailto:josh@10xrecruit.in">
                      <ParaLink>{(`josh@10xrecruit.in`)}</ParaLink>
                    </a>

                  <Chat>Call us:</Chat>
                  <a href="tel:+919952173111">
                    <ParaLink>{(`+91 99521 73111`)}</ParaLink>
                  </a>
                </Col>
                <Col>
                  <Chat>Address:</Chat>
                  <Para>Iqrah Enclave, No. 40/44-B, Silanthi Kuttai,</Para>
                  <Para>Kolathur Main Road,</Para>
                  <Para>Chennai 600099.</Para>
                </Col>
              </Row>
            </Col>

            <Col lg={8} md={8} sm={12} xs={12}>
              <Title>{t("Policy")}</Title>
              <Large to="/" left="true">
                {t("Terms of Use")}
              </Large>
              <Large left="true" to="/">
                {t("Privacy Policy")}
              </Large>
            </Col>

            <Col lg={6} md={6} sm={12} xs={12}>
              <Title>{t("Company")}</Title>
                <Large left="true" to="/about">
                  {t("About")}
                </Large>
                <Large left="true" to="/process">
                  {t("Our Process")}
                </Large>
                <Large left="true" to="/team">
                  {t("Our Team")}
                </Large>
            </Col>
          </Row>

          {/* <Row>
          <Col lg={10} md={10} sm={12} xs={12}>
            <Empty />
          </Col>

          <Col lg={8} md={8} sm={12} xs={12}>
            <FooterContainer>
                <SocialLink
                    href="/"
                    src="instagram.svg"
                />
                <SocialLink
                  href="/"
                  src="twitter.svg"
                />
                <SocialLink
                  href="/"
                  src="linkedin.svg"
                />
              </FooterContainer>
          </Col>

          <Col lg={6} md={6} sm={12} xs={12}>
            <NavLink to="/">
                  <LogoContainer>
                    <SvgIcon
                      src="logo.png"
                      aria-label="homepage"
                      width="100px"
                      height="100px"
                    />
                  </LogoContainer>
                </NavLink>
          </Col>
          
          </Row> */}
        </Container>
      </FooterSection>
      <Extra>
        <Container border={true}>
          <Row
            justify="space-between"
            align="middle"
            style={{ paddingTop: "3rem" }}
          >
            <NavLink to="/">
              <LogoContainer>
                <SvgIcon
                  src="logo.png"
                  aria-label="homepage"
                  width="100px"
                  height="100px"
                />
              </LogoContainer>
            </NavLink>
            <FooterContainer>
              <SocialLink
                  href="/"
                  src="instagram.svg"
              />
              <SocialLink
                href="/"
                src="twitter.svg"
              />
              <SocialLink
                href="/"
                src="linkedin.svg"
              />
            </FooterContainer>
          </Row>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);
