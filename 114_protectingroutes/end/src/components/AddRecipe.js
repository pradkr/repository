import React from "react";
import {
  Col,
  Row,
  Typography,
  Layout,
  Divider,
  Form,
  Input,
  Button
} from "antd";
const { Title } = Typography;
const { TextArea } = Input;

const AddRecipe = () => {
  const formItemLayout = {
    labelCol: {
      md: { span: 4 }
    },
    wrapperCol: {
      md: { span: 20 }
    }
  };
  return (
    <div className="add-recipe">
      <Layout>
        <Row>
          <Col span={24}>
            <Title level={2}>Add a Recipe</Title>
            <Divider />
          </Col>
        </Row>
        <Row>
          <Col span={14}>
            <Form {...formItemLayout}>
              <Form.Item label="Title">
                <Input />
              </Form.Item>
              <Form.Item label="Author">
                <Input />
              </Form.Item>
              <Form.Item label="Ingredients">
                <TextArea rows={8} />
              </Form.Item>
              <Form.Item label="Prep Time">
                <Input type="number" />
              </Form.Item>
              <Form.Item label="Cook Time">
                <Input type="number" />
              </Form.Item>
              <Form.Item label="Instructions">
                <TextArea rows={12} />
              </Form.Item>
              <Form.Item>
                <Button type="primary">Add Recipe</Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </Layout>
    </div>
  );
};

export default AddRecipe;
