/*
 * @Author: your name
 * @Date: 2020-09-11 15:58:15
 * @LastEditTime: 2020-09-11 20:31:27
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \dianxin-project\src\index\components\pc_header.js
 */
import React from 'react'

import { Row,Col } from 'antd'
import { Menu } from 'antd';
import {
    HomeOutlined,
    SettingFilled,
    SmileOutlined,
    SyncOutlined,
    LoadingOutlined,
    MergeCellsOutlined,
    PhoneOutlined,
    RocketOutlined
  } from '@ant-design/icons';

export default class PCHeader extends React.Component{
    constructor(){
        super();
        this.state = {
            current:"top"
        }
    }
    render(){
        return(
            <header>
                <Row>
                    <Col span={2}></Col>
                    <Col span={4}>
                        <a href="#" class="logo">
                            <img src='../../images/logo.gif' />
                            <span>电信</span>
                        </a>
                    </Col>
                    <Col span={16}>
                        <Menu selectedKeys={[this.state.current]} mode="horizontal">
                            <Menu.Item key="top">
                                <HomeOutlined /> 头条
                            </Menu.Item>
                            <Menu.Item key="shehui">
                                <SettingFilled /> 社会
                            </Menu.Item>
                            <Menu.Item key="guonei">
                                <SmileOutlined />国内
                            </Menu.Item>
                            <Menu.Item key="guoji">
                                <SyncOutlined spin />国际
                            </Menu.Item>
                            <Menu.Item key="yule">
                                <LoadingOutlined />娱乐
                            </Menu.Item>
                            <Menu.Item key="tiyu">
                                <MergeCellsOutlined />体育
                            </Menu.Item>
                            <Menu.Item key="keji">
                                <PhoneOutlined />科技
                            </Menu.Item>
                            <Menu.Item key="shishang">
                                <RocketOutlined />时尚
                            </Menu.Item>
                        </Menu>
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </header>
        )
    }
}