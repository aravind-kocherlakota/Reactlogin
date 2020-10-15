import React from 'react';
import ReactDOM from 'react-dom';
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

const SignUp = () => {
    const history = useHistory();
    const validateMessages = {
        required: "please enter valid '${name}'!",
        min: "'${name}' min length is 5 char",
      };

    const onFinish = async(values) => {
        delete values.confirm_password
        let res = await axios.post(url + '/api/signup',values)
        alert(res.data.msg)
        history.push("/")
    };


    return (
        <Card title="Login" style={{ width: 600 }}>

            <Form
                {...layout}
                name="login"
                onFinish={onFinish}
                validateMessages={validateMessages}
            >
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please enter valid email Id',
                            type:"email"
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Full Name"
                    name="fullName"
                    rules={[
                        {
                            required: true,
                            message: 'Please enter your Full name!',
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
                            min: 5,
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    label="Confirm Password "
                    name="confirm_password"
                    rules={[
                        {
                            required: true,
                            message: 'Please Confirm your password!',
                        },
                        ({ getFieldValue }) => ({
                          validator(rule, value) {
                            if (!value || getFieldValue('password') === value) {
                              return Promise.resolve();
                            }
                            return Promise.reject('The two passwords that you entered do not match!');
                          },
                        })
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item {...submit}>
                    <Button type="primary" htmlType="submit">
                        Sign Up
                    </Button>
                    <Link to="/">Sign In</Link>
                </Form.Item>
            </Form>
        </Card>
    );
};


export default SignUp;