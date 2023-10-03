import React from 'react'
import { Card, Avatar, Row, Col } from 'antd';
import {
    AvatarWrapper,
    RoleWrappper,
    ContentWrapper
  } from "./styles";

const TeamPerson = (props: any) => {
  return (
   <>
  <Card bordered={true} hoverable style={{ width: '80%', margin: '50px auto' }}>
    <Row>
      <Col span={8}>
        <Row>
            <AvatarWrapper>
                <Avatar shape="square" size={{ xs: 72, sm: 96, md: 120, lg: 192, xl: 240, xxl: 300 }} src={props.icon} />
            </AvatarWrapper>
        </Row>
        <Row>
            <RoleWrappper><span>{props.role}</span></RoleWrappper>
        </Row>
      </Col>
      <Col span={16}>

        {props.content?.map((item: string, index: number) => {
                if(index === 0)
                    return <ContentWrapper><div><strong>{props.name}</strong> {item}<br/><br/></div></ContentWrapper>
                else 
                    return <ContentWrapper><div>{item}<br/><br/></div></ContentWrapper>
            }
        )}
        
      </Col>
    </Row>



  </Card>
  </>
  )
}

export default TeamPerson
