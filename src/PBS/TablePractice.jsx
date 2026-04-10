import React from 'react'
import { useState } from 'react'
import { Card, Form, Button, Input } from 'antd'
function Home() {
  const [data, setData] = useState([{ name: 'harish', role: 'developer' }, { name: 'vikas', role: 'manager' }])

  function handleFinish(values) {
    setData([...data,values])
  }
  
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
      {
        data.map(i => (
          <Card style={{ width: '200px' }} hoverable>
            <h1>{i.name}</h1>
            <p>{i.role}</p>
          </Card>
        ))
      }
    </div>
  )
}

export default Home