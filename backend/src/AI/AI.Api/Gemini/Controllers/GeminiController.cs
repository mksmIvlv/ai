using AI.Business.Query.Abstractions.Gemini.Models;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace AI.Api.Gemini.Controllers;

[ApiController]
[Route("api/[controller]")]
public class GeminiController(IMediator mediator) : Controller
{
    [HttpGet("sendTextQuery")]
    public async Task<IActionResult> SendTextQueryAsync([FromQuery] string textQuery)
    {
        var result = await mediator.Send(new TextToGeminiQuery(textQuery));
        return Ok(new { text = result.Text });
    }
}