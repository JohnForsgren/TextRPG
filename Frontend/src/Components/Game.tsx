import { DecisionButton } from "./DecisionButton";
import { GameProps } from "./Interfaces";






export const Game = (props: GameProps) => {
    return (
      <article> 

        <p>=== STORY BOARD ===</p>

        <p> INSERT STORY HERE FROM A MODEL CLASS (it is not important how the class works since this is not rleated to fullstack)</p>

        <DecisionButton gameProps={props} buttonID={1}/>
        <DecisionButton gameProps={props} buttonID={2}/>
        <DecisionButton gameProps={props} buttonID={3}/>

        <p>Character stats:<br/>
        Strength: {props.currentUser.strength} <br/>
        Wisdom: {props.currentUser.wisdom} <br/>
        Coins: {props.currentUser.coins} <br/>
        </p>

        <p>ACCOUNT (Remove):<br/>
        Name: {props.currentUser.userName} <br/>
        Story Path: {props.currentUser.storyProgress} <br/>
        </p>



        

      


      </article>
    );
  };