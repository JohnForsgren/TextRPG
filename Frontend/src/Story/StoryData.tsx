
export const prompts = {
  "0": `Your adventure has begun. What do you do first?
  \n1. Visit the nearby city.
  \n2. Follow the strange witch who says she has something important to show you.
  \n3. Go into the dark forest.`, 

  "01": `You decide to go into the nearby city. As you enter, you notice a lively tavern on one side of the street, a bustling market square on the other, and people milling about in between. What do you do next?
  \n1. Visit the Tavern.
  \n2. Visit the market square.
  \n3. Ask people for rumors.`, 

  "011": `You enter the tavern and order a drink. The bartender tells you about a hidden treasure in a nearby cave. What do you do?
  \n1. Accept the quest.
  \n2. Ask for more details about the treasure.
  \n3. Refuse and instead visit the city's library`, 
  "012": `You visit the bustling market square. There are vendors selling all kinds of goods from exotic fruits to rare weapons. What do you do?
  \n1. Sell some of your equipment.
  \n2. Check out the weapons.
  \n3. Look for a rare book or map.`, 
  "013": `You stop a passing stranger and ask if they have heard any interesting rumors. They tell you about a haunted castle on the outskirts of the city. What do you do?
  \n1. Investigate the castle.
  \n2. Ask for more details about the haunted castle.
  \n3. Ignore the rumor and continue exploring the city.`, 

  "02": `Instead of going to the city, you follow a strange witch who claims to have something important to show you. She leads you to a secluded clearing and offers you a strange potion.
  \n1. Drink the Potion.
  \n2. Attack the Witch
  \n3. Decline and leave.`, 
  "021": `You drink the potion and suddenly find yourself in a different realm. The witch appears beside you and reveals that she is actually a powerful sorceress who needs your help to defeat an evil dragon.`, 
  "022": `You attack the witch, but she easily dodges your blows and disappears into thin air. You are left alone in the clearing, unsure of what just happened.`, 
  "023": `You decline to drink the potion and instead decide to go back to the city. As you walk away, you hear the witch cackling in the distance.`, 

  "03": `You choose to walk into the dark forest, but soon spot a group of hostile bandits up ahead. How do you proceed?
  \n1. Attack the bandits head on. 
  \n2. Quickly hide in a nearby bush
  \n3. Try to negotiate with the bandits.`, 
  "031": `You draw your weapon and charge towards the bandits, ready to fight for your life. After a fierce battle, you emerge victorious.`, 
  "032": `You quickly hide behind a nearby bush and wait for the bandits to pass. After a few tense minutes, you sneak away and continue deeper into the forest.`, 
  "033": `You attempt to negotiate with the bandits, but they refuse to listen to reason. Eventually, you manage to persuade them to let you pass peacefully by offering them some of your supplies.`, 

};

/*
PROBLEM: Current code can't update the UserData. TODO: 
  * update the "prompts" so that it includes not just the prompt string, but also the changes to the userdata 


*/

type StoryData = { // Includes the MODIFICATIONS for the character stats 
  strength?: number, 
  wisdom?: number,
  coins?: number,
}

export const prompts_attempt = {
  "01": {
    story: "You enter the tavern and order a drink.",
    storyData: {
      strength: 0,
      wisdom: 0,
      coins: -4,
    },
  },

}









// type PromptKey = keyof typeof prompts;

// const PromptDisplay = ({ currentUser }: GameProps) => {
//   const promptText = prompts[currentUser.storyProgress as PromptKey];
//   return (
//     <div>
//       <p>{promptText}</p>
//     </div>
//   );
// };

// PromptDisplay.propTypes = {  // NOT SURE WHAT THIS DOES 
//   currentUser: PropTypes.shape({
//     storyProgress: PropTypes.string.isRequired
//   }).isRequired,
// };

// export default PromptDisplay;