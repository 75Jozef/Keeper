import React from "react";

function Footer() {

    const date = new Date();
    let year = date.getFullYear();
    
    return (
        <div>
    <footer>
    <p>Copyright (C){year}</p>
    </footer>
    </div>
    );
}

export default Footer;