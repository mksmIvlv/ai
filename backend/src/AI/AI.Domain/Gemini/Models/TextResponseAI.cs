using AI.Domain.Base;

namespace AI.Domain.Gemini.Models;

public record TextResponseAI : IBaseModel<string>
{
    public int Id { get; set; }
    public string Body { get; set; }
}