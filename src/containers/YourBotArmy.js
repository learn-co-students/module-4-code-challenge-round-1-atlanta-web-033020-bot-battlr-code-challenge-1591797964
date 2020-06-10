import React from "react";
import BotCard from "../components/BotCard";

const YourBotArmy =(props)=> {

  function mapBots() {
		return props.army.map(bot => 
      <BotCard key={bot}
                bot={bot} 
                addToArmy={props.addToArmy}/>
    )
	}

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          Your Bot Army
			    {mapBots(props)}
        </div>
      </div>
    </div>
  );
};

export default YourBotArmy;
