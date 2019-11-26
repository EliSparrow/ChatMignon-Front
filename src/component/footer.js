import React, { Component } from 'react';
import '../sass/footer.sass'

export class Footer extends Component {
    render(){
        return (
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 footerItem">
                            made for <a href="https://www.latelier.co/">L'Atelier</a>
                        </div>
                        <div className="col-lg-4 footerItem">
                            made by <a href="http://github.com/eliSparow">Max</a>
                        </div>
                        <div className="col-lg-4 footerItem">
                            github repository : <a href="http://github.com/eliSparow/ChatMignon-Front">Catmash</a>
                        </div>
                    </div> 
                </div>
                
            </footer>
        )
    }
}
