using Lab_5.Core.UserInfos;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lab_5.Core.UserOperations.GetUserInfo
{
    public class GetUserInfoQuery : IRequest<GetUserInfoResponse>
    {
        public string Login { get; set; }
    }
}
