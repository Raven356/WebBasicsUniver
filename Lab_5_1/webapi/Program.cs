using Lab_5.Core;
using Lab_5.Core.Contexts;
using Lab_5.Web;
using Microsoft.AspNetCore.Diagnostics;

var builder = WebApplication.CreateBuilder(args);



builder.Services.AddControllers();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddSingleton<Lab5Context>();

Startup.Configure(builder.Services);
builder.Services.AddScoped<ILab5Context, Lab5Context>();

var app = builder.Build();


if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseRouting();
app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseAuthorization();

app.MapControllers();

//app.UseMiddleware<ExceptionHandlingMiddleware>();

app.Run();
