using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebApplication2.Model;

namespace WebApplication2.Controllers
{

    public class UserController : Controller
    {

        private readonly WebApplicationDbContext _context;

        public UserController(WebApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        [Route("api/User/Index")]
        public IEnumerable<Users> Index()
        {
            return _context.Users;
        }

        [HttpGet]
        [Route("api/User/Details/{id}")]
        public IActionResult Details(int id)
        {
            var item = _context.Users.Find(id);
            if (item == null)
            {
                return NotFound();
            }
            return Ok(item);
        }

        [HttpPut]
        [Route("api/User/Edit")]
        public IActionResult Edit([FromBody]Users user)
        {
            if (user == null)
            {
                return BadRequest();
            }

            var item = _context.Users.Find(user.UserId);
            if (user == null)
            {
                return NotFound();
            }

            item.FirstName = user.FirstName;
            item.MiddleName = user.MiddleName;
            item.LastName = user.LastName;
            //item.IsMale = user.IsMale;

            _context.Users.Update(item);
            _context.SaveChanges();
            return NoContent();
        }


        [HttpDelete]
        [Route("api/User/Delete/{id}")]
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

        [HttpPost]
        [Route("api/User/Create")]
        public IActionResult Create([FromBody]Users user)
        {
            if (user == null)
            {
                return BadRequest();
            }

            _context.Users.Add(user);
            _context.SaveChanges();

            //return CreatedAtRoute("GetTodo", new { id = user.UserId }, user);
            return Ok(user);
        }


    }
}