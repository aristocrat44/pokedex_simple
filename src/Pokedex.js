import React, { Component } from 'react'
import Pokecard from './Pokecard'
import './Pokedex.css'
class Pokedex extends Component {
  
    render() {
        let title;
        if(this.props.isWinner){
            title = <h1 className="pokedex-winner">Winning Hand</h1>
        }else{
            title = <h1 className="pokedex-loser">Losing Hand</h1>
        }
        return (
            <div className="pokedex">
                <h1>Pokedex Card Shuffle !</h1>
                 <h5>Total experience: {this.props.exp}</h5>
                 {title}
                 {/* <h4>{this.props.isWinner ? "Winner!" : "Loser!"}</h4> */}
                <div className="pokedex-cards">
                {this.props.pokemon.map((p) => (
                    <Pokecard key={p.id} id={p.id} name={p.name} type={p.type} exp={p.base_exp}/>
                ))}
                </div>
            </div>
        )
    }
}

export default Pokedex;
