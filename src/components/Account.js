import React from "react"
import { scroller } from "react-scroll"
import { GoogleOAuthProvider, useGoogleLogin } from '@react-oauth/google'
import axios from "axios"

export default function Account () {

    const [token, setToken] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [calendar, setCalendar] = React.useState()

    React.useEffect(() => {
        if(email) {
            axios("https://www.googleapis.com/drive/v2/files",
            {
                headers: { Authorization: `Bearer ${token}` }
            })
                .then(response => {
                    console.log(response.data)
                })
        }
    },[email])

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
            <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}><Button setEmail={setEmail} setToken={setToken}/></GoogleOAuthProvider>
            
        </div>
    )
}

function Button (props) {

    const login = useGoogleLogin({
        onSuccess: tokenResponse => {console.log(tokenResponse);props.setToken(tokenResponse.access_token);props.setEmail("test")},
        scope: "https://www.googleapis.com/auth/drive"
    })


    return <button className="account--button account--login" type="button" onClick={login}>Login with Google</button>
}