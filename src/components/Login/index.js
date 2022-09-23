import React from "react";
import { Row, Col, Button, Typography } from "antd";
import { auth } from "../../firebase/config";
import firebase from "../../firebase/config";

const { Title } = Typography;

const fbProvider = new firebase.auth.FacebookAuthProvider();

export default function Login() {
  const handleFbLogin = () => {
    auth.signInWithPopup(fbProvider);
  };
  return (
    <div>
      <Row justify="center" style={{ height: 800 }}>
        <Col span={8}>
          <Title style={{ textAlign: "center", marginTop: 70 }} level={3}>
            Fake Chat App
          </Title>
          <Title style={{ textAlign: "center" }} level={5}>
            Đăng nhập
          </Title>
          <Button style={{ width: "100%", marginBottom: 5 }}>
            Đăng nhập bằng Google
          </Button>
          <Button style={{ width: "100%" }} onClick={handleFbLogin}>
            Đăng nhập bằng Facebook
          </Button>
        </Col>
      </Row>
    </div>
  );
}
