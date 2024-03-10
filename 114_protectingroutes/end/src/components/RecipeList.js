import React, { useState, useEffect } from "react";
import { Layout, Col, Typography } from "antd";
import { useParams, Link } from "react-router-dom";
import { getRecipes } from "../api";
import RecipeCard from "./RecipeCard";
import RecipeDetail from "./RecipeDetail";

const { Title } = Typography;
const RecipeList = () => {
  const { category, recipeId } = useParams();
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    getRecipes(category).then(data => setRecipes(data));
  }, [category]);
  return (
    <Layout>
      <Title level={3}>{category.toUpperCase()} RECIPES</Title>
      <Col span={24} align="center">
        {recipes &&
          !recipeId &&
          recipes.map(recipe => (
            <Link to={`${category}/${recipe.id}`} key={recipe.id}>
              <RecipeCard recipe={recipe} />
            </Link>
          ))}
        {recipeId && <RecipeDetail id={recipeId} />}
      </Col>
    </Layout>
  );
};

export default RecipeList;
