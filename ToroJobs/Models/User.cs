using Microsoft.AspNetCore.Identity;

namespace ToroJobs.Models
{
    public class User: IdentityUser
    {
        public int Id { get; set; }
        public string Email { get; set; }
    }
}
