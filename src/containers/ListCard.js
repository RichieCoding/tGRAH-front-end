import React, { Component } from "react";

class ListCard extends Component {
  render() {
    const renderListCards = this.props.listCards.map(card => {
      return (
        <div className='list-card-container'>
          <h2>{card.name}</h2>
          <div>
            <button>Add a card</button>
          </div>
        </div>
      );
    });
    return (
      <React.Fragment>
        {renderListCards}
      </React.Fragment>
    );
  }
}

export default ListCard;
