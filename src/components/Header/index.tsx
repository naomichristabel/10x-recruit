import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Row, Col, Drawer } from "antd";
import { withTranslation } from "react-i18next";
import Container from "../../common/Container";
import { SvgIcon } from "../../common/SvgIcon";
import { Button } from "../../common/Button";
import {
  HeaderSection,
  LogoContainer,
  Burger,
  NotHidden,
  Menu,
  // CustomNavLinkSmall,
  StyledLi,
  NavLink,
  Label,
  Outline,
  // Span,
} from "./styles";

const Header = ({ t }: any) => {
  const [visible, setVisibility] = useState(false);
  const navigate = useNavigate();

  const showDrawer = () => {
    setVisibility(!visible);
  };

  const onClose = () => {
    setVisibility(!visible);
  };

  const MenuItem = () => {
    const scrollTo = (id: string) => {
      const element = document.getElementById(id) as HTMLDivElement;
      element.scrollIntoView({
        behavior: "smooth",
      });
      setVisibility(false);
    };
    return (
      <>
        <ul className="navbar">
          <StyledLi>
            <NavLink to="/" end>Home</NavLink>
          </StyledLi>
          <StyledLi>
            <NavLink to="/about">About</NavLink>
          </StyledLi>
          <StyledLi>
            <NavLink to="/process">Our Process</NavLink>
          </StyledLi>
          <StyledLi>
            <NavLink to="/team">Our Team</NavLink>
          </StyledLi>
        </ul>
     
      {/* <CustomNavLinkSmall onClick={() => navigate("/")}>
          <Span>{t("Home")}</Span>
      </CustomNavLinkSmall>
      <CustomNavLinkSmall onClick={() => navigate("/about")}>
          {t("About")}
      </CustomNavLinkSmall>
      <CustomNavLinkSmall onClick={() => navigate("/process")}>
          <Span>{t("Our Process")}</Span>
      </CustomNavLinkSmall>
      <CustomNavLinkSmall onClick={() => scrollTo("product")}>
          <Span>{t("Product")}</Span>
      </CustomNavLinkSmall>
      <CustomNavLinkSmall
          style={{ width: "180px" }}
          onClick={() => scrollTo("contact")}
        >
          <Span>
            <Button>{t("Contact")}</Button>
          </Span>
      </CustomNavLinkSmall> */}
      </>
    );
  };

  return (
    <HeaderSection>
      <Container>
        <Row justify="space-between">
          <LogoContainer to="/" aria-label="homepage">
            <SvgIcon src="logo.png" width="100px" height="100px" />
          </LogoContainer>
          <NotHidden>
            <MenuItem />
          </NotHidden>
          <Burger onClick={showDrawer}>
            <Outline />
          </Burger>
        </Row>
        <Drawer closable={false} visible={visible} onClose={onClose}>
          <Col style={{ marginBottom: "2.5rem" }}>
            <Label onClick={onClose}>
              <Col span={12}>
                <Menu>Menu</Menu>
              </Col>
              <Col span={12}>
                <Outline />
              </Col>
            </Label>
          </Col>
          <MenuItem />
        </Drawer>
      </Container>
    </HeaderSection>
  );
};

export default withTranslation()(Header);
