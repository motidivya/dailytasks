using Microsoft.AspNetCore.Mvc;
using TodoApi.Models;
namespace TodoApi.Controllers;


[ApiController]
[Route("[controller]")]
public class TodoAPIController : ControllerBase
{

    private TodoContext _context;

    public TodoAPIController(TodoContext context)
    {
        _context = context;
    }

    [HttpPost]
    public async Task<ActionResult<TodoItem>> PostTodoItem(TodoItem todoItem)
    {
        _context.TodoItems.Add(todoItem);
        await _context.SaveChangesAsync();

        // return CreatedAtAction("GetTodoItem", new { id = todoItem.Id }, todoItem);
        return CreatedAtAction(nameof(GetTodoItem), new { id = todoItem.Id }, todoItem);
    }
}
