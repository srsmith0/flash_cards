import React from "react"
import PropTypes from "prop-types"
class Card extends React.Component {
  render () {
    return (
      <React.Fragment>
      <h2 id="answer">{this.props.card.answer}</h2>
      <br />
      <br />
      <a href= '/'>go back</a>
      </React.Fragment>
       
    );
  }
}

export default Card
