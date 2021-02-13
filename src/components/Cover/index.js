import React from 'react'
import "./index.css";
import coverVideo from "../../media/coverVideo.mp4"
const Cover = () => {
    return (
        <div className="cover-container">
            <video className="video" src={coverVideo} autoPlay loop muted />
            <h1>Juan Jóse Passo</h1>
            <p>Developer React | Designer</p>
        </div>
    )
}

export default Cover
