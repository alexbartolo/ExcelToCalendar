import React from "react"

export default function Account () {

    // function login () {
    //     console.log("login")
    // }

    function change () {
        console.log("change")
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