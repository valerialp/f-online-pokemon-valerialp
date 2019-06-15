import React, { Fragment } from "react";
import "./styles.scss";

class Card extends React.Component {
  render() {
    const {
      name,
      id,
      types,
      sprites: { front_default }
    } = this.props.item;
    return (
      <Fragment>
        <div className="card__container-top">
          <img className="image-pokemon" src={front_default} alt={name} />
          <p className="id-pokemon">ID/{id}</p>
        </div>
        <div className="card__container-bottom">
          <h3 className="name-pokemon">{name}</h3>
          <div className="types__container">
          {types.map(item => {
            return <p className="type-pokemon">{item.type.name.toUpperCase()}</p>;
          })}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Card;
