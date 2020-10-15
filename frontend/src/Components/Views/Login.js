import React from 'react';
import { Form, Input, Button, Card } from 'antd';
import {Link} from "react-router-dom";
import axios from "axios";
import url from '../../url'
import { useHistory } from "react-router-dom";


const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const submit = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};

const Login = (props) => {
    const history = useHistory();
    const onFinish = async(values) => {
        let res = await axios.post(url + '/api/login',values)
        if(!res.data.success) alert(res.data.msg)
        else history.push({
            pathname: '/home',
            state: { details: res.data.data }
          })
    };


    return (
        <Card title="Login" style={{ width: 400 }}>

            <Form
                {...layout}
                name="login"
                onFinish={onFinish}
            >
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item {...submit}>
                    <Button type="primary" htmlType="submit">
                        Login
                    </Button>
                    <Link to="/signup">Sign Up</Link>
                </Form.Item>
            </Form>
        </Card>
    );
};


export default Login;