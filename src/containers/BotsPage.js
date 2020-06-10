import React from "react";
import BotCollection from "./BotCollection"

class BotsPage extends React.Component {

  state = {
    bots: []
  }

  // BOTS_URL = 'https://bot-battler-api.herokuapp.com/api/v1/bots'

  componentDidMount() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(res => res.json())
    .then(bots => this.setState({ bots: bots}))
  }

  render() {
    return (
      <div>
        <BotCollection bots={this.state.bots} />
      </div>
    );
  }

}

export default BotsPage;
