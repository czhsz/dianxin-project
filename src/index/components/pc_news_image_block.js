import React from 'react'
import { Card } from 'antd';

export default class PCNewsImageBlock extends React.Component{
    
    render() {
        const { Meta } = Card;
        return (
            <div class="topNewsList">
                <Card hoverable style={{ width: 120 }} class="topNewsListCard">
                    <img src='../../images/logo.gif' />
                    <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>
                <Card hoverable style={{ width: 120 }} class="topNewsListCard">
                    <img src='../../images/logo.gif' />
                    <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>
                <Card hoverable style={{ width: 120 }} class="topNewsListCard">
                    <img src='../../images/logo.gif' />
                    <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>
                <Card hoverable style={{ width: 120 }} class="topNewsListCard">
                    <img src='../../images/logo.gif' />
                    <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>
                <Card hoverable style={{ width: 120 }} class="topNewsListCard">
                    <img src='../../images/logo.gif' />
                    <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>
                <Card hoverable style={{ width: 120 }} class="topNewsListCard">
                    <img src='../../images/logo.gif' />
                    <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>
            </div>
        )   
    }
}