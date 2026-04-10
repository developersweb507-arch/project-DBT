import React from 'react'
import { useState } from 'react';
import { Card, Form, Button, Input, Table } from 'antd';

function Home() {
  const [data, setData] = useState([{ name: 'harish', role: 'developer' }, { name: 'vikas', role: 'manager' }])

  function handleFinish(values) {
    setData([...data, values])
  }

  const col = [
    { title: 'Name' ,dataIndex:'name'},
    { title: 'Role' ,dataIndex:'role'}
  ]

  return (
    <div>
      <Form onFinish={handleFinish}>
        <Form.Item label="Name" name='name'>
          <Input></Input>
        </Form.Item>
        <Form.Item label="Role" name='role'>
          <Input></Input>
        </Form.Item>
        <Button htmlType='submit'>submit</Button>
      </Form>

      <Table columns={col} dataSource={data} pagination={{pageSize:2}}></Table>
    </div>
  )
}

export default Home