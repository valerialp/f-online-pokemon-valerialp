import React, {Fragment} from 'react';

class Card extends React.Component{
    render(){
        const { name, id, types, sprite: {front_default} } = this.props.item;
        return (
            <Fragment>
                <img className="image-pokemon" src={front_default} alt={name}/>
                <p className="id-pokemon">{id}</p>
                <h3 className="name-pokemon">{name}</h3>
                {types.map(item => {
                    return (
                        <p className="type-pokemon">{item.type.name}</p>
                    )
                })}
            </Fragment>
        )
    }
}

export default Card;