import React from 'react'

const Footer = () => {
    var d = new Date()
    return (
        <div style={{textAlign:"center",backgroundColor:"lightgray", height:"50px",lineHeight:"50px"}}>
            Copyright © <a href="https://www.linkedin.com/in/nusratjahan35/">Nusrat Jahan</a> {d.getFullYear()}.
        </div>
    )
}
export default Footer;
