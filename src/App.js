import React from "react"
import Account from "./components/Account"
import Drive from "./components/Drive"
import Excel from "./components/Excel"

import Header from "./components/Header"

export default function App () {
    return (
        <div className="app">
            <Header />
            <Account />
            <Drive />
            <Excel />
            <Excel />
        </div>
    )
}