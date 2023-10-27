using Lab_5.Core.Contexts;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lab_5.Core.UserOperations.GetUserLogins
{
    public class GetUserLoginQueryHandler : IRequestHandler<GetUserLoginQuery, List<GetUserLoginResponse>>
    {
        private readonly ILab5Context _context;

        public GetUserLoginQueryHandler(ILab5Context context)
        {
            _context = context;
        }

        public async Task<List<GetUserLoginResponse>> Handle(GetUserLoginQuery request, CancellationToken cancellationToken)
        {
            var logins = await _context.AuthTable.Where(auth => auth.Id != 1).Select(auth => new GetUserLoginResponse {Login = auth.Login }).ToListAsync();
            return logins;
        }
    }
}
