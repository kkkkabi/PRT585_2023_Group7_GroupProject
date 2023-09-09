using FullStackAPI.Data;
using FullStackAPI.models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FullStackAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EmployeesController : Controller
    {
        private readonly FullstackDbcontext _fullstackDbcontext;
        public EmployeesController(FullstackDbcontext fullstackDbcontext)
        {
            _fullstackDbcontext = fullstackDbcontext;
        }

        /*public FullstackDbcontext FullstackDbcontext { get; } */

        [HttpGet]
        
        public async Task <IActionResult> GetAllEmployees()
        {
            var employees = await _fullstackDbcontext.Employees.ToListAsync();
            
            return Ok(employees);
        }

        [HttpPost]
        public async Task<IActionResult> AddEmplyee([FromBody] Employee employeeRequest)
        {

            await _fullstackDbcontext.Employees.AddAsync(employeeRequest);
            await _fullstackDbcontext.SaveChangesAsync();

            return Ok(employeeRequest);
        }
            
    }
}
