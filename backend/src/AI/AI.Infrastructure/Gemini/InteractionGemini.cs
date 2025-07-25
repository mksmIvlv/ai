using AI.Infrastructure.Abstraction;
using AI.Infrastructure.Abstraction.Gemini;
using GenerativeAI;
using Microsoft.Extensions.Options;

namespace AI.Infrastructure.Gemini;

public record InteractionGemini : IInteractionGemini
{
    public GenerativeModel ModelGemini { get; }

    public InteractionGemini(IConnectionStringsOptions connections)
    {
        var googleAI = new GoogleAi(connections.ApiKeiGemini);
        ModelGemini = googleAI.CreateGenerativeModel("models/gemini-2.5-pro");
    }
}