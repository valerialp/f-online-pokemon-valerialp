import React from 'react';
import "./styles.scss";


class CardDetails extends React.Component{
    render(){
        const pokemon = this.props.info.find(
            item => item.id === parseInt(this.props.match.params.id)
          );
        return(
            <p>{pokemon.name}</p>
        )
    }
}

export default CardDetails;