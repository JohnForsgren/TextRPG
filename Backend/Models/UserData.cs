

using System.ComponentModel.DataAnnotations;
    public class UserData 
    {   
        [Key] // The key is not necessarily needed if the model includes "ID" in its name. 
        public int Id { get; set; }   
        public string? UserName { get; set; } 
        public string? StoryProgress { get; set; } 
        public int Strength { get; set; } // NOTE: integers are AUTOMATICALLY "nullable" in the HTTP POST since they are assigned 0 if no specific value is given  
        public int Wisdom { get; set; } 
        public int Coins { get; set; } 

    }  


