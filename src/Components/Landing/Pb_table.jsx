// import React from 'react'
// import { useState } from 'react';
// import { Card, Form, Button, Input, Table } from 'antd';

// function Home() {
//   const [data, setData] = useState([{ name: 'harish', role: 'developer' }, { name: 'vikas', role: 'manager' }])

//   function handleFinish(values) {
//     setData([...data, values])
//   }

//   const col = [
//     { title: 'Name' ,dataIndex:'name'},
//     { title: 'Role' ,dataIndex:'role'}
//   ]

//   return (
//     <div>
//       {/* <Form onFinish={handleFinish}>
//         <Form.Item label="Name" name='name'>
//           <Input></Input>
//         </Form.Item>
//         <Form.Item label="Role" name='role'>
//           <Input></Input>
//         </Form.Item>
//         <Button htmlType='submit'>submit</Button>
//       </Form> */}



//       <Table columns={col} dataSource={data} pagination={{pageSize:2}}></Table>
//     </div>
//   )
// }

// export default Home

import React from 'react'
import { Table, Form, Card, Input, Button } from 'antd'
import { useState } from 'react'

function Pb_table() {

  const [data, setData] = useState([{ name: "Radha", surname: "krishn" }])

  const col = [
    { title: 'Name', dataIndex: 'name' },
    { title: 'Surname', dataIndex: 'surname' }

  ]

  function handleSubmit(values){
setData([...data,values])


  }

  return (
    <div>

      <div style={{width:"30%", height:"30vh", border: "1px solid red"}}>

     <Card>
<Form onFinish={handleSubmit}>


<Form.Item label='fistName' name={'name'}>
 <Input/>

</Form.Item>
<Form.Item label='listName' name={'surname'}>
 <Input/>

</Form.Item>
 

<Button htmlType='submit'>Register</Button>

</Form>

     </Card>

      </div>



      <Table columns={col} dataSource={data} pagination={{pageSize:2}}></Table>

    </div>
  )
}

export default Pb_table