using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lab_5.Core.UserOperations.GetUserInfo
{
    public class GetUserInfoResponse
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Surname { get; set; }

        public string? Patronymic { get; set; }

        public string Group { get; set; }

        public string Phone { get; set; }

        public string IdCard { get; set; }

        public string Faculity { get; set; }

        public RoleType NewRole { get; set; }
    }
}
