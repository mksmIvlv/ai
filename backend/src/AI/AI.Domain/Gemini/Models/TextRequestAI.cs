using AI.Domain.Base;

namespace AI.Domain.Gemini.Models;

public record TextRequestAI : IBaseModel<string>
{
    public int Id { get; set; }

    public string Body { get; set; }
}