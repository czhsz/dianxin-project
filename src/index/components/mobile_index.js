import React from 'react'
import MobileFooter from './mobile_footer'
import MobileHeader from './mobile_header'

export default class MobileIndex extends React.Component{
    render(){
        return(
            <div>
                <MobileHeader></MobileHeader>
                <MobileFooter></MobileFooter>
            </div>
        )
    }
}