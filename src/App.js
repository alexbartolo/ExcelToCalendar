import React from "react"

import Header from "./components/Header"
import Account from "./components/Account"
import Drive from "./components/Drive"
import Excel from "./components/Excel"

export default function App () {
    return (
        <div className="app" style={{'--height': window.innerHeight+'px'}}>
            <Header />
            <Account/>
            <Drive />
            <Excel />
            <Excel />
        </div>
    )
}