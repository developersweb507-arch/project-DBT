import React from 'react';
import { Card, Input, Form, Button } from 'antd';
import FormItem from 'antd/es/form/FormItem';

function Table(values) {

    function handleSubmit() {

        console.log(values)
    }


    return (
        <Card style={{ width: "300px" }} hoverable>


            <Form onFinish={handleSubmit}>


                <FormItem label="First Name:" name="fistName">
                    <Input />

                </FormItem>
                <FormItem label="Last Name:" name="lastName">
                    <Input />

                </FormItem>
                <FormItem label="Email:" name="email">
                    <Input />

                </FormItem>

                <Button htmlType='sumbit'>Submit</Button>

            </Form>




        </Card>
    );
}

export default Table;
