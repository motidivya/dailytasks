using MysqlEfCoreDemo.Data;
using Microsoft.EntityFrameworkCore;
using Pomelo.EntityFrameworkCore;
public class Startup {
    public IConfiguration Configuration {
        get;
    }
    public Startup(IConfiguration configuration) {
        Configuration = configuration;
    }
    public void ConfigureServices(IServiceCollection services) {
        services.AddRazorPages();
        // services.AddDbContext<MyDbContext>(options => options.UseMySql(this.Configuration.GetConnectionString("Default")));
        services.AddDbContext<MyDbContext>(options => options.UseMySql());
    }
    public void Configure(WebApplication app, IWebHostEnvironment env) {
        if (!app.Environment.IsDevelopment()) {
            app.UseExceptionHandler("/Error");
            // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
            app.UseHsts();
        }
        app.UseHttpsRedirection();
        app.UseStaticFiles();
        app.UseRouting();
        app.UseAuthorization();
        app.MapRazorPages();
        app.Run();
    }
}