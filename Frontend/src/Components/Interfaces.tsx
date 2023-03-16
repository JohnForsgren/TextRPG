
export interface LoginProps {
    postFunction: Function; 
}

export interface GameProps {
    putFunction: Function;  // The functions are only used for the DescisionButton 
    deleteFunction: Function;  
    currentUser : UserData;
}

export interface DecisionButtonProps {
    buttonID: number;
    gameProps: GameProps; // IMPORTANT: The decisionbutton is meant to include everything that the GameProps has, so it includes this. 
    

}

export type UserData = {
    userName: string,
    storyProgress: string,
    strength: number, 
    wisdom: number,
    coins: number,
  };