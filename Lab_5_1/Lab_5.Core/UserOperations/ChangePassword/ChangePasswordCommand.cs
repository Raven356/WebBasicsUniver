using Lab_5.Core.Contexts;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lab_5.Core.UserOperations.ChangePassword
{
    public class ChangePasswordCommand : IRequest<Unit>
    {
        public string Login { get; set; }

        public string Password { get; set; }

        public string NewPassword { get; set; }
    }
}
