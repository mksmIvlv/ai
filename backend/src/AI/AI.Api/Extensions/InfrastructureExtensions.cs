using AI.Infrastructure;
using AI.Infrastructure.Abstraction;
using AI.Infrastructure.Abstraction.Gemini;
using AI.Infrastructure.Gemini;

namespace AI.Api.Extensions;

public static class InfrastructureExtensions
{
    public static IServiceCollection AddInfrastructureExtensions(this IServiceCollection services)
    {
        services.AddSingleton<IInteractionGemini,  InteractionGemini>();
        
        return services;
    }
}