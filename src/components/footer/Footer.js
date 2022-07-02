import React from 'react';
import classes from "../header/header.module.css";

function Footer(props) {
    return (
        <div className={classes.wrapper}>
            <ul className={classes.menu}>
                <li><a href="/">main page</a></li>
                <li><a href="/about">about page</a></li>
                <li><a href="/portfolio">portfolio page</a></li>
            </ul>
        </div>
    );
}

export default Footer;