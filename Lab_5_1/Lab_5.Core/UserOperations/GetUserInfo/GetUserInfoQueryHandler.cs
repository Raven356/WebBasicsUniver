using Lab_5.Core.Contexts;
using Lab_5.Core.UserInfos;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lab_5.Core.UserOperations.GetUserInfo
{
    public class GetUserInfoQueryHandler : IRequestHandler<GetUserInfoQuery, GetUserInfoResponse>
    {
        private readonly ILab5Context _context;

        public GetUserInfoQueryHandler(ILab5Context context)
        {
            _context = context;
        }

        public async Task<GetUserInfoResponse> Handle(GetUserInfoQuery request, CancellationToken cancellationToken)
        {
            var id = await _context.AuthTable.Where(auth => auth.Login == request.Login).Select(auth => auth.IdInfo).FirstAsync();
            var response = await _context.Info.Where(inf => inf.Id == id).FirstAsync();
            var role = await _context.AuthTable.Where(auth => auth.Login == request.Login).FirstAsync();
            return new GetUserInfoResponse() {Name = response.Name, Surname = response.Surname
                , Faculity = response.Faculity, Group = response.Group, IdCard = response.IdCard
                , Patronymic = response.Patronymic, Phone = response.Phone
                , NewRole = role.Role, Id = response.Id };
        }
    }
}
