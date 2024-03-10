import React from "react";
import { Typography, Col, Divider, Card } from "antd";
const { Title } = Typography;

const Home = () => {
  return (
    <Col span={24} align="center">
      <Title level={1}>Your Personal Recipe Organizer!</Title>
      <Divider />
      <div className="home-image" />
      <Divider />
      <Col span={8}>
        <Card title="Super Fun">
          iCanCook! is a super easy way to organize your recipes. You can view
          your recipe cards by logging in to the system!
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Cooking is fun!">
          Whether you're home alone, or organizing a party for your friends and
          family, cooking is always fun but given the quantum of opportunities
          you get to impress your guests, you need to be particularly handy with
          awesome recipes! That's where iCanCook! comes in!
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Always Free!">
          iCanCook! is always free! We feel cooking is for everyone and to that
          end, we will always keep this service free!
        </Card>
      </Col>
    </Col>
  );
};

export default Home;
