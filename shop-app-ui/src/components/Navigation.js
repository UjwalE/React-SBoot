import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';
import '../css/navigation.css'

class Navigation extends React.Component {
    render () {
        return (
            <ul className="navigation">
                <li className="grid-cell">
                    <Link className="navigation-link" to="/">
                        ReactSpeed
                    </Link>
                </li>
                <li>
                    <a className="navigation-link"
                       href="/1/cart">
                        Book
                    </a>
                </li>
                <li className="grid-cell">
                    <a className="navigation-link"
                       href="/2/cart">
                        Code
                    </a>
                </li>
            </ul>
        );
    }
}

export default Navigation;