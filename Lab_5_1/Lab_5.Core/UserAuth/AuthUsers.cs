using Lab_5.Core.UserInfos;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lab_5.Core.UserAuth
{
    [PrimaryKey("Id")]
    public class AuthUsers
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        public string Login {  get; set; }

        public string Password { get; set; }

        public RoleType Role { get; set; }

        public int? IdInfo { get; set; }

        [ForeignKey("IdInfo")]
        public UserInfo UserInfo { get; set; }
    }
}
