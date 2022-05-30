import React from "react"
import { scroller } from "react-scroll"
export default function Account () {

    // function login () {
    //     console.log("login")
    // }

    
    function change () {
        scroller.scrollTo("drive", {
            smooth: true,
            offset: - document.getElementsByClassName("header")[0].offsetHeight - 30
        })
    }

    return (
        <div className="account">
            <span className="account--title">Google Account</span>
            <span className="account--email">alexj.bartolo@gmail.com</span>
            <button className="account--button" type="button" onClick={change}>Change Google Account</button>
            {/* <button className="account--button account--login" type="button" onClick={login}>Login with Google</button> */}
        </div>
    )
}