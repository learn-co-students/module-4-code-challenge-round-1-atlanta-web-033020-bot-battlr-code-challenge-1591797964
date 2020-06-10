import React from "react";
import BotCard from "../components/BotCard";

const BotCollection =(props)=> {

	function mapBots() {
		let bots = props.bots
		return bots.map(bot => <BotCard key={bot.id} 
										bot={bot} 
										showBot={props.showBot}/>)
	}
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  Collection of all bots
			  {mapBots(props)}
    		</div>
  	  </div>
  	);
};

export default BotCollection;
