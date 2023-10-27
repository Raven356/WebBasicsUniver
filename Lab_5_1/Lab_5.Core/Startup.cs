using Lab_5.Core.Contexts;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Text;
using System.Threading.Tasks;

namespace Lab_5.Core
{
    public static class Startup
    {
        public static IServiceCollection Configure(IServiceCollection services)
        {
            return services.AddMediatR(cfg => cfg.RegisterServicesFromAssembly(typeof(Startup).Assembly))
                .AddDbContext<Lab5Context>();
        }
    }
}
