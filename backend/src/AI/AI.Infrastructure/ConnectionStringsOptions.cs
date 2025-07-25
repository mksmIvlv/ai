using AI.Infrastructure.Abstraction;

namespace AI.Infrastructure;

public record ConnectionStringsOptions : IConnectionStringsOptions
{
    public string ApiKeiGemini { get; init; }
}