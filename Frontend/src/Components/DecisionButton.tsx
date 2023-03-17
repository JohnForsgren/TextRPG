import { DecisionButtonProps, UserData } from "./Interfaces";

export const DecisionButton = (props: DecisionButtonProps) => {

    const onClickAsync = async () => {

        console.log("You have now pressed button number: " + props.buttonID);

        let user = props.gameProps.currentUser;  

        user.coins = user.coins +5; // Adds 5 coins
        user.storyProgress = user.storyProgress + props.buttonID.toString(); // Adds the buttonID so that the user remember these data. 

        await props.gameProps.putFunction(user); // Updates the database 
        await props.gameProps.updateUserData(user); // Updates the data on the screen. 

        if (user.coins >= 100){ // If victory condition is achieved. 
            await props.gameProps.deleteFunction(user);
            window.location.reload();
        } 
    }

    const onClick = () => {
        onClickAsync(); 
    }

    return (
        <div>
            <button onClick={onClick}>{props.buttonID}</button>
        </div>
    )


}

