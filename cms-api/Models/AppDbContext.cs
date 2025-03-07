using Microsoft.EntityFrameworkCore;
using cms_api.Models;


namespace cms_api.Models
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<Customer> Customer { get; set; }
        public DbSet<Wallet> Wallet { get; set; }
    }
}
