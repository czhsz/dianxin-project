/*
 * @Author: your name
 * @Date: 2020-09-11 15:58:15
 * @LastEditTime: 2020-09-11 20:35:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \dianxin-project\src\index\components\pc_index.js
 */
import React from 'react'
import PCHeader from './pc_header'
import PCNewsContainer from './pc_newscontainer'
import PCFooter from './pc_footer'


export default class PCIndex extends React.Component{
    render(){
        return(
            <div>
                <PCHeader></PCHeader>
                <PCNewsContainer></PCNewsContainer>
                <PCFooter></PCFooter>
            </div>
        )
    }
}