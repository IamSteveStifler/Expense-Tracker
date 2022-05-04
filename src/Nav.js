import React from "react"
import { Link } from "react-router-dom"
class Nav extends React.Component{
    render(){
        return(
            <>
                <Link to ="/">Home</Link> <br /> <br />
                <Link to ="/about">About</Link>
            </>
        )
    }
}

export default Nav;