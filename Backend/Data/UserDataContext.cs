using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

    public class UserDataContext : DbContext
    {
        public UserDataContext (DbContextOptions<UserDataContext> options)
            : base(options)
        {
        }

        public DbSet<UserData> UserData { get; set; } = default!;
    }
