import React from "react";
import BotCollection from "./BotCollection"
import BotSpecs from "../components/BotSpecs"
import YourBotArmy from "./YourBotArmy"

class BotsPage extends React.Component {

  state = {
    bots: [],
    army: [],
    botClicked: false,
    clickedBot: {},
  }

  componentDidMount() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(res => res.json())
    .then(bots => this.setState({ bots: bots}))
  }

  addToArmy = (changeBot) => {
    let armyCopy = [...this.state.army]
    if (armyCopy.filter(bot => bot.id === changeBot.id).length < 1) {
      armyCopy.push(changeBot)
      this.setState({ army: armyCopy})
    } else {
      armyCopy = armyCopy.filter(bot => bot.id !== changeBot.id)
      this.setState({ army: armyCopy})
    }
  }

  showBot =( bot )=> {
    this.setState({ 
      botClicked: !this.state.botClicked,
      clickedBot: bot,
    })
  }

  whatToRender = () => {
    if (this.state.botClicked) {
      return <BotSpecs 
        clickedBot={this.state.clickedBot}
        showBot={this.showBot}/>
    } else {
      return <BotCollection 
          bots={this.state.bots} 
          showBot={this.showBot}
        />
    }
  }

  render() {
    return (
      <div>
        <YourBotArmy 
          army={this.state.army}
          addToArmy={this.addToArmy}
        />
        {this.whatToRender()}
      </div>
    );
  }

}

export default BotsPage;
