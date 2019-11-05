import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../sass/nav.sass'

export class Nav extends Component {
    render(){
        return (
            <nav>
                <ul>
                    <li><Link to="/"><h2>CatMash</h2></Link></li>
                    <li>{ this.props.location.pathname === "/" ? <Link to="/score"><h2>Score</h2></Link> : <Link to="/"><h2>Vote</h2></Link> }</li>
                </ul>
            </nav>
        )
    }
}
