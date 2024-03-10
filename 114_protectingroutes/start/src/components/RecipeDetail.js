import React, { useState, useEffect } from "react";
import { Layout, Typography, Divider, Col, Row, Card, Icon } from "antd";
import Rating from "./Rating";
import { getRecipe } from "../api";

const { Title } = Typography;

const RecipeDetail = ({ id }) => {
  const [recipe, setRecipe] = useState({});
  useEffect(() => {
    id && getRecipe(id).then(data => setRecipe(data[0]));
  }, [id]);

  return (
    <div className="recipe-detail">
      <Divider />
      <Layout>
        <Row>
          <Col span={8} align="left">
            <Title level={2} style={{ color: "#871400" }}>
              {recipe.title}
            </Title>
          </Col>
          <Col span={8} align="left">
            <Rating score={recipe.rating} />
          </Col>
          <Col span={4}>
            <Icon type="shopping" /> Prep: {recipe.prepTime} m
          </Col>
          <Col span={4}>
            <Icon type="fire" /> Cook: {recipe.cookTime} m
          </Col>
        </Row>

        <Row>
          <Col span={8} align="left">
            <Card title="Ingredients" style={{ height: 500 }}>
              <ul>
                {recipe.ingredients &&
                  recipe.ingredients.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
              </ul>
            </Card>
          </Col>
          <Col span={16} align="left">
            <Card title="Instructions" style={{ height: 500, fontSize: 18 }}>
              <ol>
                {recipe.instructions &&
                  recipe.instructions.map(({ id, text }) => (
                    <li key={id}>{text}</li>
                  ))}
              </ol>
            </Card>
          </Col>
        </Row>
      </Layout>
    </div>
  );
};

export default RecipeDetail;
