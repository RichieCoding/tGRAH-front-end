import React, { Component } from "react";
import ListCardContainer from "./ListCardContainer";

class ListCard extends Component {
  state = {
    cards: []
  };

  render() {
    const renderListCards = this.props.listCards.map(card => {
      return (
        <ListCardContainer
          listCards={this.props.listCards}
          listCards={card}
          loadCurrentProject={this.props.loadCurrentProject}
        />
      );
    });
    return <React.Fragment>{renderListCards}</React.Fragment>;
  }
}

export default ListCard;
