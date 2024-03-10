import React, { useContext } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Recipes from "./components/Recipes";
import AddRecipe from "./components/AddRecipe";
import Login from "./components/Login";
import Protected from "./components/Protected";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Layout, Typography, Menu, Col, Icon } from "antd";
import useAuthentication from "./useAuthentication";
const { Text } = Typography;
const { Header, Footer } = Layout;

const App = () => {
  const { AuthCtx } = useAuthentication();
  const { user, logOut } = useContext(AuthCtx);
  return (
    <Layout>
      <Router>
        <Header className="header">
          <Col span={6}>
            <h1 className="app-title">iCanCook!</h1>
          </Col>
          <Col span={10}>
            <Menu mode="horizontal" theme="dark" className="header-menu">
              <Menu.Item key="1">
                <Link to="/">
                  <Icon type="home" />
                  Home
                </Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/about">
                  <Icon type="team" />
                  About
                </Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/recipes">
                  <Icon type="fire" />
                  Recipes
                </Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link to="/addrecipe">
                  <Icon type="edit" />
                  Add a Recipe
                </Link>
              </Menu.Item>
            </Menu>
          </Col>
          <Col span={8} align="end">
            {!user ? (
              <Menu mode="horizontal" theme="dark" className="header-menu">
                <Menu.Item key="1">
                  <Link to="/login">
                    <Icon type="login" />
                    Login
                  </Link>
                </Menu.Item>
              </Menu>
            ) : (
              <Menu mode="horizontal" theme="dark" className="header-menu">
                <Menu.Item key="1" disabled={true}>
                  {user.name}
                </Menu.Item>
                <Menu.Item key="2" onClick={() => logOut()}>
                  <Icon type="logout" />
                  Logout
                </Menu.Item>
              </Menu>
            )}
          </Col>
        </Header>
        <Layout className="content-box">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/recipes">
              <Recipes />
            </Route>
            <Protected user={user} path="/addrecipe">
              <AddRecipe />
            </Protected>
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
        </Layout>
        <Footer>
          <Text type="secondary">
            © The Good Food Company. All Rights Reserved
          </Text>
        </Footer>
      </Router>
    </Layout>
  );
};

export default App;
