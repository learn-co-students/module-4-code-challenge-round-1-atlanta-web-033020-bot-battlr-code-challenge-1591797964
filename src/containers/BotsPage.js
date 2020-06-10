import React from "react";
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy"

class BotsPage extends React.Component {

  state = {
    bots: [],
    army: [],
  }

  // BOTS_URL = 'https://bot-battler-api.herokuapp.com/api/v1/bots'

  componentDidMount() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(res => res.json())
    .then(bots => this.setState({ bots: bots}))
  }

  addToArmy = (changeBot) => {
    let armyCopy = [...this.state.army]
    if (armyCopy.filter(bot => bot.id == changeBot.id).length < 1) {
      armyCopy.push(changeBot)
      this.setState({ army: armyCopy})
    } else {
      armyCopy = armyCopy.filter(bot => bot.id !== changeBot.id)
      this.setState({ army: armyCopy})
    }
  }

  render() {
    return (
      <div>
        <YourBotArmy 
          army={this.state.army}
          addToArmy={this.addToArmy}
        />
        <BotCollection 
          bots={this.state.bots} 
          addToArmy={this.addToArmy}
        />
      </div>
    );
  }

}

export default BotsPage;
