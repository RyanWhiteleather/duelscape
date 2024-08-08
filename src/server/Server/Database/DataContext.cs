using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations.Schema;

namespace Server.Database
{
    public class DataContext(DbContextOptions<DataContext> options) : DbContext(options)
    {
        public DbSet<PlayerDao> Players { get; set; }
    }

    [Table("Player")]
    public class PlayerDao
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
    }
}
