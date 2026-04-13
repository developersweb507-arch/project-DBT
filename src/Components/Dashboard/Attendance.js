import React from "react";
import { Table } from "antd";

const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Role",
    dataIndex: "role",
    key: "role",
  },
];

const data = [
  { key: 1, id: 1, name: "Alice", role: "Developer" },
  { key: 2, id: 2, name: "Bob", role: "Designer" },
  { key: 3, id: 3, name: "Charlie", role: "Manager" },
];

function AntdTableDemo() {
  return <Table columns={columns} dataSource={data} pagination={false} />;
}

export default AntdTableDemo;
