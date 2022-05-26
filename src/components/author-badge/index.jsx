import React from "react";

import profileImage from "../../assets/images/profile_image.jpg";
import "./styles.css";

export default function Navbar() {
    return (
        <div className="author-badge-container">
            <img className="author-badge-image" src={profileImage} />
            <div>
                <h3>
                    Emerson Souza
                </h3>
                <p>
                    Teach Lead
                </p>
            </div>
        </div>
    );
}