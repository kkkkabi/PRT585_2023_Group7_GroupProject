using FullStackAPI.Data;
using FullStackAPI.models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FullStackAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class Kabi_TimesheetsController : Controller
    {
        private readonly FullstackDbcontext _fullstackDbcontext;
        public Kabi_TimesheetsController(FullstackDbcontext fullstackDbcontext)
        {
            _fullstackDbcontext = fullstackDbcontext;
        }

        /*public FullstackDbcontext FullstackDbcontext { get; } */

        [HttpGet]
        
        public async Task <IActionResult> GetAllKabi_Timesheets()
        {
            var Kabi_Timesheets = await _fullstackDbcontext.Kabi_Timesheets.ToListAsync();
            
            return Ok(Kabi_Timesheets);
        }

        [HttpPost]
        public async Task<IActionResult> AddEmplyee([FromBody] Kabi_Timesheet Kabi_TimesheetRequest)
        {

            await _fullstackDbcontext.Kabi_Timesheets.AddAsync(Kabi_TimesheetRequest);
            await _fullstackDbcontext.SaveChangesAsync();

            return Ok(Kabi_TimesheetRequest);
        }
            
    }
}
