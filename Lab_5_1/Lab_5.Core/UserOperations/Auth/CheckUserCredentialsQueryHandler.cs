using Lab_5.Core.Contexts;
using Lab_5.Core.UserInfos;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lab_5.Core.UserOperations.Auth
{
    public class CheckUserCredentialsQueryHandler : IRequestHandler<CheckUserCredentialsQuery, UserInfo>
    {
        private readonly ILab5Context _context;

        public CheckUserCredentialsQueryHandler(ILab5Context lab5Context)
        {
            _context = lab5Context;
        }

        public async Task<UserInfo> Handle(CheckUserCredentialsQuery request, CancellationToken cancellationToken)
        {
            var user = await _context.AuthTable.Where(u => u.Login.Equals(request.Login) && u.Password.Equals(request.Password)).FirstAsync();
            if(user.IdInfo is null)
            {
                return null;
            }
            var info = await _context.Info.FindAsync(user.IdInfo);
            return info;
        }
    }
}
