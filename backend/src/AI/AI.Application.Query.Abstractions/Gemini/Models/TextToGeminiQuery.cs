using AI.Dto;
using MediatR;

namespace AI.Business.Query.Abstractions.Gemini.Models;

public record TextToGeminiQuery(string TextQuery) : IRequest<TextDto>;