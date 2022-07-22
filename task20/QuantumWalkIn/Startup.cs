using MySqlConnector;
using Microsoft.Extensions.Configuration;
public class Startup{
    public void ConfigureServices(IServiceCollection services)
{
    // ...
    services.AddTransient<MySqlConnection>(_ => new MySqlConnection(Configuration["ConnectionStrings:Default"]));
}
}