import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  DownOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Divider, Table } from "antd";
import { Layout, Menu, theme } from "antd";
import "../index.css";
import React, { useState, useEffect } from "react";
import { Card, Col, Row } from "antd";
import { Input, Space, Dropdown } from "antd";
import axios from "axios";
import { emptyMaterialData } from "../../src/data";

import { Navigate } from "react-router-dom";
import "../pages/Pricing.css";
const { Search } = Input;

const onSearch = (value) => console.log;
const { Header, Sider, Content } = Layout;
const Pricing = () => {
  const [authenticated, setauthenticated] = useState(null);
  const [zipCode, setZipCode] = useState("");
  const [materialData, setmaterialData] = useState([]);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");
    if (loggedInUser) {
      setauthenticated(loggedInUser);
      setmaterialData(emptyMaterialData);
    }
  }, []);

  const handleZipCodeChange = (e) => {
    console.log(e.target.value);
    setZipCode(e.target.value);
  };

  const getPircingData = async () => {
    console.log(zipCode);
    setmaterialData([]);
    try {
      let res = await axios.get("http://localhost:5000/zipcode/" + zipCode);
      console.log(res);

      if (
        res &&
        res.data &&
        res.data.materialData &&
        res.data.materialData.length > 0
      ) {
        setmaterialData(res.data.materialData);
      } else {
        setmaterialData(emptyMaterialData);
      }
    } catch (err) {
      setmaterialData(emptyMaterialData);
    }
  };

  setTimeout(() => {
    if (!authenticated) {
      return <Navigate replace to="/login" />;
    } else {
    }
  }, 500);

  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const dataSource = [
    {
      key: "1",
      name: "13 Gl. Bag",
      price: "$31",
    },
    {
      key: "2",
      name: "27 Gl. Bag",
      price: "$42",
    },
    {
      key: "3",
      name: "56 Gl. Bag",
      price: "$42",
    },
  ];

  const columns = [
    {
      dataIndex: "name",
      key: "name",
    },
    {
      dataIndex: "price",
      key: "price",
      render: (text, record, index) => <Input value={text} size="small" />,
    },
  ];
  console.log(materialData[0]);
  return (
    <>
      <div className="header">
        <h2 style={{ paddingRight: "20px" }}>Pricing</h2>
      </div>
      <Content
        style={{
          padding: 24,
          Height: "100%",
          background: colorBgContainer,
        }}
      >
        <Search
          placeholder="Zip Code"
          onSearch={getPircingData}
          size="large"
          enterButton
          onChange={handleZipCodeChange}
        />
        <Divider />
        Zip Code :{" "}
        <Input
          placeholder="Zip Code"
          style={{ width: "30%", marginBottom: "1rem" }}
          value={zipCode}
        />
        {materialData && materialData.length > 0 ? (
          <>
            <Row gutter={16} style={{ marginBottom: "1rem" }}>
              <Col span={8}>
                <Card
                  title="Plastic Bottles"
                  bordered={true}
                  style={{ borderWidth: "4px" }}
                >
                  <Card
                    title="Plastic Bottles Bag"
                    bordered={true}
                    size="small"
                    style={{ border: "2px solid #f0f0f0" }}
                  >
                    <Table
                      rowClassName={() => "editable-row"}
                      bordered
                      dataSource={materialData[0]}
                      columns={columns}
                      pagination={false}
                      size="small"
                    />
                  </Card>
                  <br />
                  <Card
                    title="Plastic Bottles Drum"
                    size="small"
                    bordered={true}
                    style={{ border: "2px solid #f0f0f0" }}
                  >
                    <Table
                      rowClassName={() => "editable-row"}
                      bordered
                      dataSource={materialData[1]}
                      columns={columns}
                      pagination={false}
                      size="small"
                    />
                  </Card>
                </Card>
              </Col>
              <Col span={8}>
                <Card
                  title="Metal Cans"
                  bordered={true}
                  style={{ borderWidth: "4px" }}
                >
                  <Card
                    title="Metal Cans Bag"
                    bordered={false}
                    size="small"
                    style={{ border: "2px solid #f0f0f0" }}
                  >
                    <Table
                      rowClassName={() => "editable-row"}
                      bordered
                      dataSource={materialData[2]}
                      columns={columns}
                      pagination={false}
                      size="small"
                    />
                  </Card>
                  <br />
                  <Card
                    title="Metal Cans Drum"
                    bordered={true}
                    size="small"
                    style={{ border: "2px solid #f0f0f0" }}
                  >
                    <Table
                      rowClassName={() => "editable-row"}
                      bordered
                      dataSource={materialData[3]}
                      columns={columns}
                      pagination={false}
                      size="small"
                      style={{ border: "2px solid #f0f0f0" }}
                    />
                  </Card>
                </Card>
              </Col>
              <Col span={8}>
                <Card
                  title="Glass Bottles"
                  bordered={true}
                  style={{ borderWidth: "4px" }}
                >
                  <Card title="Glass Bottles Bag" bordered={false} size="small">
                    <Table
                      rowClassName={() => "editable-row"}
                      bordered
                      dataSource={materialData[4]}
                      columns={columns}
                      pagination={false}
                      size="small"
                    />
                  </Card>
                  <Card title="Glass Bottles Drum" bordered={true} size="small">
                    <Table
                      rowClassName={() => "editable-row"}
                      bordered={true}
                      dataSource={materialData[5]}
                      columns={columns}
                      pagination={false}
                      size="small"
                    />
                  </Card>
                </Card>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={8} offset={3}>
                <Card title="E-Waste " bordered={true}>
                  <Card title="E-Waste Bag" bordered={false} size="small">
                    <Table
                      rowClassName={() => "editable-row"}
                      bordered
                      dataSource={materialData[6]}
                      columns={columns}
                      pagination={false}
                      size="small"
                    />
                  </Card>
                  <Card title="E-Waste Drum" bordered={false} size="small">
                    <Table
                      rowClassName={() => "editable-row"}
                      bordered
                      dataSource={materialData[7]}
                      columns={columns}
                      pagination={false}
                      size="small"
                    />
                  </Card>
                </Card>
              </Col>
              <Col span={8} offset={3}>
                <Card title="Other" bordered={true}>
                  <Card title="Other Bag" bordered={false} size="small">
                    <Table
                      rowClassName={() => "editable-row"}
                      bordered
                      dataSource={materialData[8]}
                      columns={columns}
                      pagination={false}
                      size="small"
                    />
                  </Card>
                  <Card title="Other Drum" bordered={false} size="small">
                    <Table
                      rowClassName={() => "editable-row"}
                      bordered
                      dataSource={materialData[9]}
                      columns={columns}
                      pagination={false}
                      size="small"
                    />
                  </Card>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col span={6} offset={19}>
                <Button type="primary" style={{ margin: "1rem" }} size="large">
                  Save
                </Button>
                <Button type="primary" danger size="large">
                  Cancel
                </Button>
              </Col>
            </Row>
          </>
        ) : (
          ""
        )}
      </Content>
    </>
  );
};
export default Pricing;
