using Lab_5.Core.UserAuth;
using Lab_5.Core.UserInfos;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lab_5.Core.Contexts
{
    public interface ILab5Context
    {
        public DbSet<AuthUsers> AuthTable { get; }
        public DbSet<UserInfo> Info {  get; }

        int SaveChanges();

        Task<int> SaveChangesAsync(CancellationToken cancellationToken = default);
    }
}
