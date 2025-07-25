using AI.Business.Query.Abstractions.Gemini.Models;
using AI.Dto;
using AI.Infrastructure.Abstraction.Gemini;
using MediatR;

namespace AI.Business.Query.Gemini;

public class TextToGeminiQueryHandler(IInteractionGemini interactionGemini) : IRequestHandler<TextToGeminiQuery, TextDto>
{
    public async Task<TextDto> Handle(TextToGeminiQuery gemini, CancellationToken cancellationToken)
    {
        var result = await interactionGemini.ModelGemini.GenerateContentAsync(gemini.TextQuery, cancellationToken);

        return new TextDto
        {
            Text = result.Text
        };
    }
}