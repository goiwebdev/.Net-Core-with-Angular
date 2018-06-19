using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication2.Model
{
    public class WebApplicationSeedData
    {
        private WebApplicationDbContext _context;

        public WebApplicationSeedData(WebApplicationDbContext context)
        {
            _context = context;
        }

        public async Task SeedData()
        {
            if (!_context.Users.Any())
            {
                var user = new Users()
                {                   
                    FirstName = "David",
                    LastName = "Maigue",
                    MiddleName = "Test"
                };

                _context.Users.Add(user);
                await _context.SaveChangesAsync();

            }


        }


    }
}
