import React from "react";
import {Header} from "components/Header"
import {Sidebar} from "components/Sidebar"


const Default = ({children}) => <>
    <Header/>

    <div className="wrapper">
        <div className="columns">
            <Sidebar/>
            {children}
        </div>
    </div>
</>

export default Default
