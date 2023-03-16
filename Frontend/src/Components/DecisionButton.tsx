import { DecisionButtonProps } from "./Interfaces";

export const DecisionButton = (props: DecisionButtonProps) => {

    const onClick = () => {
        console.log("You have now pressed button number: " + props.buttonID);

        // UPDATE THHE PAYER CONTEXT 
        let user = props.gameProps.currentUser; 

        user.coins = user.coins +5; // Adds 5 coins
        user.storyProgress = user.storyProgress + props.buttonID; // Adds the buttonID so that the user remember these data. 

        props.gameProps.putFunction(user); // Updates the database 
        props.gameProps.updateUserData(user); // Updates the data on the screen. 

        // TO ADD: Delete the user and reload the page if you collect 100 coins   

    }

    return (
        <div>
            <button onClick={onClick}>{props.buttonID}</button>
        </div>
    )


}

