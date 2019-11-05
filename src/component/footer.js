import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../sass/footer.sass'

export class Footer extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 footerItem">
                            made for <Link to="https://www.latelier.co/">L'Atelier</Link>
                        </div>
                        <div className="col-lg-4 footerItem">
                            made by <Link to="http://github.com/eliSparow">Max</Link>
                        </div>
                        <div className="col-lg-4 footerItem">
                            github repository : <Link to="http://github.com/eliSparow/ChatMignon-Front">Catmash</Link>
                        </div>
                    </div> 
                </div>
                
            </footer>
        )
    }
}
