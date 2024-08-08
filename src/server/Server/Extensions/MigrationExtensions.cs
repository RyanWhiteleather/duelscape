using Microsoft.EntityFrameworkCore;
using Server.Database;

namespace Server.Extensions
{
    public static class MigrationExtensions
    {
        public static void ApplyMigrations(this IApplicationBuilder app)
        {
            using IServiceScope scope = app.ApplicationServices.CreateScope();

            using DataContext dataContext = scope.ServiceProvider.GetService<DataContext>();

            dataContext.Database.Migrate();
        }
    }
}
