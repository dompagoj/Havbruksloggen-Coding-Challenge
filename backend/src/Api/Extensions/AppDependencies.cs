using Api.Services;
using DAL.Repositories;
using Microsoft.Extensions.DependencyInjection;

namespace Api.Extensions
{
    public static class AppDependencies
    {
        public static void ConfigureDependencies(this IServiceCollection services)
        {
            services.AddScoped<BoatRepository>();
            services.AddScoped<CrewMemberRepository>();

            services.AddSingleton<FileService>();
        }
    }
}
