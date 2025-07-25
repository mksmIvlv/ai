using AI.Api.Extensions;
using AI.Infrastructure;
using AI.Infrastructure.Abstraction;
using Microsoft.Extensions.Options;

var builder = WebApplication.CreateBuilder(args);

// Настройка конфигурации
builder.Services.Configure<ConnectionStringsOptions>(
    builder.Configuration.GetSection("ConnectionStrings"));
// Внедрение интерфейса вручную
builder.Services.AddSingleton<IConnectionStringsOptions>(sp =>
    sp.GetRequiredService<IOptions<ConnectionStringsOptions>>().Value);

builder.Services.AddApiExtensions();
builder.Services.AddApplicationExtensions();
builder.Services.AddInfrastructureExtensions();

var app = builder.Build();


// В dev-режиме
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
    app.UseSwagger();
    
    app.UseSwaggerUI(c =>
    {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "My API v1");
    });
}

// Редирект на Swagger по умолчанию
app.MapGet("/", context =>
{
    context.Response.Redirect("/swagger");
    return Task.CompletedTask;
});

app.UseCors("AllowLocalhost5173");
app.MapControllers();
app.UseHttpsRedirection();


app.Run();
