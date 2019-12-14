import React from "react";
import {Header} from "components/Header"
import {Sidebar} from "components/Sidebar"


const Default = ({children}) => <>
    <Header/>

    <div className="grow">
        <div className="columns grow-body">
            <Sidebar/>
            {children}
        </div>
    </div>
</>

export default Default
