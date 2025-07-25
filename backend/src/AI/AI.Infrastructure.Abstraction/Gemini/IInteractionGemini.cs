using GenerativeAI;

namespace AI.Infrastructure.Abstraction.Gemini;

public interface IInteractionGemini
{
    public GenerativeModel ModelGemini { get; }
}