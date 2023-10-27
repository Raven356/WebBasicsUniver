using Lab_5.Core.UserAuth;
using Lab_5.Core.UserInfos;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Identity.Client;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lab_5.Core.Contexts
{
    public class Lab5Context : DbContext, ILab5Context
    {
        public Lab5Context() {
            Database.EnsureCreated();
        }

        public DbSet<AuthUsers> AuthTable => Set<AuthUsers>();
        public DbSet<UserInfo> Info => Set<UserInfo>();

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            IConfigurationRoot configuration = new ConfigurationBuilder()
            .SetBasePath(AppDomain.CurrentDomain.BaseDirectory)
            .AddJsonFile("appsettings.json")
            .Build();
            optionsBuilder.UseSqlServer(configuration.GetConnectionString("SqlConnectionString"));
        }
    }
}
