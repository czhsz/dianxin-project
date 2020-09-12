/*
 * @Author: your name
 * @Date: 2020-09-11 15:58:15
 * @LastEditTime: 2020-09-11 20:38:30
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \dianxin-project\src\index.js
 */
import React from 'react'
import ReactDOM from 'react-dom'

import MediaQuery from 'react-responsive'
import 'antd/dist/antd.css';

import PCIndex from './index/components/pc_index'  //PCIndex也是pc_index.js中的类名
import MobileIndex from './index/components/mobile_index'


class Root extends React.Component{
    render(){
        return(
            <div>
                <MediaQuery query="(min-device-width:1224px)">
                    <PCIndex></PCIndex>
                </MediaQuery>
                <MediaQuery query="(max-device-width:1223px)">
                    <MobileIndex></MobileIndex>
                </MediaQuery>
            </div>
        )
    }
}

ReactDOM.render(
    <Root />,
    document.getElementById('root')
)