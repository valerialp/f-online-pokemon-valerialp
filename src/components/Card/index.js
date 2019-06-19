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
    const { evo } = this.props;
    return (
      <Fragment>
        <div className="card__container-top">
          <img className="image-pokemon" src={front_default} alt={name} />
          <p className="id-pokemon">ID / {id}</p>
        </div>
        <div className="card__container-medium">
          <h3 className="name-pokemon">{name}</h3>
          <div className="types__container">
            {types.map(item => {
              return (
                <p className="type-pokemon">{item.type.name.toUpperCase()}</p>
              );
            })}
          </div>
          <div className="card__container-bottom">
            {evo && evo.evolves_from_species ? (
              <div className="evolution-pokemon">
                <p>Evoluciona de:</p>
                <p className="name-pokemon__bottom">{evo.evolves_from_species.name}</p>
              </div>
            ) : null}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Card;
