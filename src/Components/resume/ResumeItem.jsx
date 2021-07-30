import React from 'react'

function ResumeItem({year, title, subTitle, text}) {
    return (
        <div className="resume-item">
            <div className="left-content">
                <p>{year}</p>
            </div>
            <div className="right-content">
                <h5>{title}</h5>
                <h6>{subTitle}</h6>
                <p>{text}</p>
            </div>
        </div>
    )
}


export default ResumeItem;