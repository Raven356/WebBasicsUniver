using Lab_5.Core.Contexts;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lab_5.Core.UserOperations.ChangePassword
{
    public class ChangePasswordCommandHandler : IRequestHandler<ChangePasswordCommand, Unit>
    {
        private readonly ILab5Context _context;

        public ChangePasswordCommandHandler(ILab5Context context)
        {
            _context = context;
        }

        public async Task<Unit> Handle(ChangePasswordCommand request, CancellationToken cancellationToken)
        {
            var user = _context.AuthTable.Where(a => a.Login.Equals(request.Login)).First();
            if( !user.Password.Equals(request.Password) ) {
                throw new ArgumentException("Password was wrong!");
            }

            user.Password = request.NewPassword;
            await _context.SaveChangesAsync();
            return Unit.Value;
        }
    }
}
