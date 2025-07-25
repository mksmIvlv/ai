using AI.Business.Query.Abstractions.Gemini.Models;
using AI.Business.Query.Gemini;
using MediatR;

namespace AI.Api.Extensions;

public static class ApplicationExtensions
{
    public static IServiceCollection AddApplicationExtensions(this IServiceCollection services)
    {
        services.AddMediatR(typeof(TextToGeminiQueryHandler).Assembly);
        
        return services;
    }
}