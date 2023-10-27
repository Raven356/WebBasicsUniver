using Lab_5.Core.UserInfos;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lab_5.Core.UserOperations.ChangeRole
{
    public class ChangeRoleCommand : IRequest<Unit>
    {
        public string Login {  get; set; }

        public RoleType NewRole {  get; set; }

        public UserInfo Info { get; set; }
    }
}
