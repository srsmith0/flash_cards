import React from "react"
import PropTypes from "prop-types"
import Card from "./Card";
import axios from "axios";

class Cards extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        cards: this.props.cards 
    };
  }

deleteCard(id) {
  axios.delete(`/cards/${id}`).then(response => {
    console.log(response)
    const newCards = this.state.cards.filter(card => card.id !== id );
    this.setState({
      cards: newCards
    });
  })
  .catch((err) => {
    console.log(err);
  });
}

addCard () {
  let q = prompt("Enter your JavaScript question.");
  let a = prompt("Great. Now enter the answer.");
  axios.post("/cards", {
    question: q,
    answer: a,
  }).then (response => {
    const newCard = response;
    this.setState({
      cards: [newCard, ...this.state.cards],
    })
  })
  .catch((err) => {
    console.log(err);
  });
};

renderCards() {
  const { cards } = this.state;
  return cards.map((card) => (
    <div id='card' key={card.id}>
      <h3>{card.question}</h3>
      <hr />
      <a href={`/cards/${card.id}`}>Go to Answer</a>
      <hr />
      <p onClick={() => this.deleteCard(card.id)}>Delete</p>
    </div>
  ));
}


    render () {
    return (
      <div>
        <h1>JavaScript FlashCards</h1>
        <br />
        <div id="add">
        <p onClick={this.addCard}>Click to Add a Card</p>
        </div>
        <div id="cards">
        {this.renderCards()}
        </div>
       

      </div>
    );
  }
}

Cards.propTypes = {
  cards: PropTypes.array
};
export default Cards
