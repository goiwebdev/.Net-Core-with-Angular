using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebApplication2.Model;

namespace WebApplication2.Controllers
{




    [Route("api/[controller]")]
    public class SampleDataController : Controller
    {

        private readonly WebApplicationDbContext _context;

        public SampleDataController(WebApplicationDbContext context)
        {
            _context = context;
        }


        private static string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        [HttpGet("[action]")]
        public IEnumerable<WeatherForecast> WeatherForecasts()
        {
            var rng = new Random();
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                DateFormatted = DateTime.Now.AddDays(index).ToString("d"),
                TemperatureC = rng.Next(-20, 55),
                Summary = Summaries[rng.Next(Summaries.Length)]
            });
        }

        public class WeatherForecast
        {
            public string DateFormatted { get; set; }
            public int TemperatureC { get; set; }
            public string Summary { get; set; }

            public int TemperatureF
            {
                get
                {
                    return 32 + (int)(TemperatureC / 0.5556);
                }
            }
        }

        [HttpGet("[action]")]
        public IEnumerable<Users> GetUsers()
        {
            return _context.Users;
        }


        [HttpPost("[action]")]
        public void Create([FromBody] Users user)
        {
            try
            {
                _context.Users.Add(user);
                _context.SaveChanges();
            }
            catch (Exception e)
            {

                throw e;
            }

        }

        [HttpGet("{id}", Name = "GetModel")]
        public string GetModel(string id)
        {
            return null;
        }

        //[HttpGet("[action]")]
        
        [HttpGet]  
        [Route("api/SAmpleData/Details/{id}")]  
        public IActionResult Details(int id)
        {
            var item = _context.Users.Find(id);
            if (item == null)
            {
                return NotFound();
            }
            return Ok(item);
            //return objemployee.GetEmployeeData(id);
        }


        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var todo = _context.Users.Find(id);
            if (todo == null)
            {
                return NotFound();
            }

            _context.Users.Remove(todo);
            _context.SaveChanges();
            return NoContent();

        }
    }
}
