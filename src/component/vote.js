import React, { Component } from 'react';
import axios from 'axios';
import Card from './card';
import '../sass/vote.sass';
import { Link } from 'react-router-dom';


export class Vote extends Component {
    constructor(props){
        super(props);

        this.state = {
            catsArray: null,
            currentCats: null
        }
    }
    
    // Select a random Cat an array of Cats
    selectRandomCat = async (array) => {
        const min = 0; 
        let max = array.length;  
        const random = Math.floor(Math.random() * (+max - +min)) + +min;
        const cat = this.state.catsArray[random];
        await this.state.catsArray.splice(random, 1)
        return cat
    }
    
    // Set the State 'currentCats' randomly picked up
    setTowCats = async (array) => {
        let selectedCats = [];
            for(let i=0; i<2 ; i++){
                await this.selectRandomCat(array).then(cat => {
                    selectedCats.push(cat)
                })
            }
            await this.setState({currentCats: selectedCats})
    }

    async componentDidMount() {
        // Get the cats in the DB
        await axios.get('https://api-catmash.herokuapp.com/cats')
        .then(async res => {
            await this.setState({catsArray: res.data})
            await this.setTowCats(this.state.catsArray)
        })
        .catch(err => {
            console.error(err);
        })
    }

    // Edit selected cats scores
    vote = async (cat) => {
        await this.state.currentCats.map(element => {
            if(element.id === cat.id){
                axios.put('https://api-catmash.herokuapp.com/cats/' + element._id, {score: element.score+1})
                console.log(element._id,element.score+1);
            } else {
                axios.put('https://api-catmash.herokuapp.com/cats/' + element._id, {score: element.score-1})
                console.log(element._id,element.score-1);
            }
        });
        
        await this.setTowCats(this.state.catsArray)
    }


    displayCats = () => {
        const { currentCats } = this.state;
        if(currentCats !== null && currentCats[0]!== undefined){
            return currentCats.map((cat, index) => (
                
                <Card key={index} index={index} cat={cat} callback={this.vote}/>
            ))
        } else {
            return <Link to="/score">Scores</Link>
        }
    }
    
    render(){
        return (
            <div className="container">
                <h2>Clique sur un chat pour voter.</h2>
                <div className="row displayCat">
                { this.displayCats() }
                </div>
            </div>
        )
    }
}

