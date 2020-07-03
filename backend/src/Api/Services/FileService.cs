using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;

namespace Api.Services
{
    public class FileService
    {
        readonly IWebHostEnvironment _env;
        readonly IConfiguration _configuration;

        public FileService(IWebHostEnvironment env, IConfiguration configuration) => (_env, _configuration) = (env, configuration);

        public async Task<string> SaveFile(IFormFile file, string? nameAddon = null)
        {
            var basePath = "/images/" + nameAddon + file.FileName;
            await using var fileStream = File.Create(_env.WebRootPath + basePath);
            await file.CopyToAsync(fileStream);

            return _configuration["Urls"] + "/" + basePath;
        }
    }
}
