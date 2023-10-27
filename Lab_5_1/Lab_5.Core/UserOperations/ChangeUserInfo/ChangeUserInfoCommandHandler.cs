using Lab_5.Core.Contexts;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lab_5.Core.UserOperations.ChangeUserInfo
{
    public class ChangeUserInfoCommandHandler : IRequestHandler<ChangeUserInfoCommand, Unit>
    {
        private readonly ILab5Context _context;

        public ChangeUserInfoCommandHandler(ILab5Context context)
        {
            _context = context;
        }

        public async Task<Unit> Handle(ChangeUserInfoCommand request, CancellationToken cancellationToken)
        {
            using var transaction = (_context as Lab5Context).Database.BeginTransaction();
            try
            {
                var info = _context.Info.Where(inf => inf.Id == request.Id).First();
                info.Surname = request.Surname;
                info.Phone = request.Phone;
                info.Faculity = request.Faculity;
                info.Patronymic = request.Patronymic;
                info.Group = request.Group;
                info.IdCard = request.IdCard;
                info.Name = request.Name;
                await _context.SaveChangesAsync();

                var user = _context.AuthTable.Where(auth => auth.Login == request.OldLogin).First();
                user.Login = request.Login;
                await _context.SaveChangesAsync();
                await transaction.CommitAsync();
                return Unit.Value;
            }
            catch(Exception e)
            {
                await transaction.RollbackAsync();
                throw e;
            }
        }
    }
}
