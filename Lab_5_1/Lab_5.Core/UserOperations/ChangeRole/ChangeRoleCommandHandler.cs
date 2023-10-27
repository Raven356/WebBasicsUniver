using Lab_5.Core.Contexts;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lab_5.Core.UserOperations.ChangeRole
{
    public class ChangeRoleCommandHandler : IRequestHandler<ChangeRoleCommand, Unit>
    {
        private readonly ILab5Context _context;

        public ChangeRoleCommandHandler(ILab5Context context)
        {
            _context = context;
        }

        public async Task<Unit> Handle(ChangeRoleCommand request, CancellationToken cancellationToken)
        {

            using (var transaction = (_context as Lab5Context).Database.BeginTransaction())
            {
                try
                {
                    var user = await _context.AuthTable
                        .Where(a => a.Login.Equals(request.Login))
                        .FirstAsync();

                    user.Role = request.NewRole;
                    await _context.SaveChangesAsync();

                    var userInfo = await _context.Info.Where(inf => inf.Id == request.Info.Id).FirstAsync();
                    userInfo.Surname = request.Info.Surname;
                    userInfo.Phone = request.Info.Phone;
                    userInfo.Faculity = request.Info.Faculity;
                    userInfo.Patronymic = request.Info.Patronymic;
                    userInfo.Group = request.Info.Group;
                    userInfo.IdCard = request.Info.IdCard;
                    userInfo.Name = request.Info.Name;
                    await _context.SaveChangesAsync();
                    transaction.Commit();
                }
                catch (Exception ex)
                {
                    transaction.Rollback();
                    throw ex;
                }
            }
            return Unit.Value;
        }
    }
}
