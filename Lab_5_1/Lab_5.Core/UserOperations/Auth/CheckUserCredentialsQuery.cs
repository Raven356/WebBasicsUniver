using Lab_5.Core.UserInfos;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lab_5.Core.UserOperations.Auth
{
    public class CheckUserCredentialsQuery : IRequest<UserInfo>
    {
        public string Login { get; set; }

        public string Password { get; set; }
    }
}
