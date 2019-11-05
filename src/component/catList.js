import React, { Component } from 'react';
import axios from 'axios';
import '../sass/catList.sass';

export class ListCats extends Component {
    constructor(props){
        super(props);

        this.state = {
            cats: null
        }
    }
    componentDidMount() {
        axios.get('https://api-catmash.herokuapp.com/cats')
        .then(res => {
            this.setState({cats: res.data})
        })
        .catch(err => {
            console.error(err);
        })
    }

    listingCats = () => {
        const { cats } = this.state;
        if(cats){
            return cats.map((cat, index) => (
                
                <div key={index} className="col-lg-4 catListItem">
                    <img src={cat.imageUrl} alt={'cat '+ index}/>
                    <p>Rank : {index+1} # ({cat.score})</p>
                </div>
            ))
        }
    }
    
    render(){
        return (
            <div className="container">
                <div className="row catList">
                    { this.listingCats() }
                </div>
            </div>
        )
    }
}

