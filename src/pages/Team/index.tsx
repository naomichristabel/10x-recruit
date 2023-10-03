import { lazy } from "react";
import { Row, Col } from "antd";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import TeamContent from "../../content/TeamContent.json";
import TeamPerson from '../../components/TeamPerson';

import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'

import {
  CarouselContainer,
  TaleContainer,
  TaleTitle,
  TalePara
} from "./styles";

const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));



const Team = () => {
  var items = [
    {
        name: "Joshua Jehan Raj",
        role: "Founder & Director",
        content: [TeamContent.founder_para_1, TeamContent.founder_para_2, TeamContent.founder_para_3],
        icon: "../../10x-recruit/img/svg/Joshua.PNG"
    },
    {
      name: "Arun Ebenezer Donakonda",
      role: "Co-Founder & Director",
      content: [TeamContent.cofounder_para_1, TeamContent.cofounder_para_2, TeamContent.cofounder_para_3],
      icon: "../../10x-recruit/img/svg/Arun.PNG"
    },
    {
      name: "Ananthi Josh",
      role: "Co-Founder & Advisor",
      content: [TeamContent.advisor_para_1, TeamContent.advisor_para_2, TeamContent.advisor_para_3],
      icon: "../../10x-recruit/img/svg/Ananthi.PNG"
    },
    {
      name: "Revathi K",
      role: "Search Partner",
      content: [TeamContent.search_partner_para_1, TeamContent.search_partner_para_2, TeamContent.search_partner_para_3],
      icon: "../../10x-recruit/img/svg/Revathi.PNG"
    },
]


  return (
    <Container>
      <ScrollToTop />
    <>
    <CarouselContainer>
      <Carousel height="600px" navButtonsAlwaysVisible={true}>
            {
                items.map( (item, i) => <TeamPerson key={i} icon={item.icon} name={item.name} role={item.role} content={item.content} /> )
            }
      </Carousel>
    </CarouselContainer>

    <TaleContainer>
      <TaleTitle><h6>Tale of Triumph</h6></TaleTitle>
      <TalePara><p>Our Founders and Search Partners boast an extensive track record of successfully collaborating with numerous esteemed clients, facilitating the fulfillment of pivotal positions at crucial junctures during their professional association with leading consulting firms. Their clientele encompasses distinguished organizations such as JSW Group, 7-Eleven, Salcomp, Foxconn, Raising Star, Yamaha, Michelin, MRF, Apollo, SunEdison, KBR, Nemak Castings, Hinduja Group, Daimler Financial Services, Renault Nissan, TVH, TVS, Rane, Anand Group, Agni Group, Visteon, ADNOC, Saudi ARAMCO, SRACO, and FundsIndia.</p></TalePara>
      <TalePara><p>Their expertise spans across a spectrum of domains, encompassing sales, supply chain, engineering, manufacturing, technology, finance, human resources, and administration. Within these realms, they have effectively filled leadership and mid-senior level roles, consistently ensuring optimal matches between candidates and client organizations.</p></TalePara>
    </TaleContainer>
    </>
    
    </Container>
  );
};

export default Team;
