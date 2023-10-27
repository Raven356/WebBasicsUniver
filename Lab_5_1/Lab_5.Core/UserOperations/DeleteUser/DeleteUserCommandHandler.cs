using Lab_5.Core.Contexts;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lab_5.Core.UserOperations.DeleteUser
{
    public class DeleteUserCommandHandler : IRequestHandler<DeleteUserCommand, Unit>
    {
        private readonly ILab5Context _context;

        public DeleteUserCommandHandler(ILab5Context lab5Context) {
            _context = lab5Context;
        }

        public async Task<Unit> Handle(DeleteUserCommand request, CancellationToken cancellationToken)
        {
            _context.Info.Remove(_context.Info.Where(a => a.Id == _context.AuthTable.Where(auth => auth.Login == request.Login).First().IdInfo).First());
            await _context.SaveChangesAsync();
            return Unit.Value;
        }
    }
}
