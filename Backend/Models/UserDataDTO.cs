using System.ComponentModel.DataAnnotations;
    public class UserDataDTO 
    {   
        public string? UserName { get; set; } 
        public string? StoryProgress { get; set; } 
        public int Strength { get; set; }  
        public int Wisdom { get; set; } 
        public int Coins { get; set; } 

    }  