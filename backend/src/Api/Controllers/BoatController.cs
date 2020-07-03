using System.Collections.Generic;
using System.Threading.Tasks;
using Api.Services;
using BL.Entities;
using DAL.Models;
using DAL.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{
    [ApiController]
    [Route("api/boats")]
    public class BoatController : Controller
    {
        readonly BoatRepository _repo;
        readonly FileService _fileService;

        public BoatController(BoatRepository repo, FileService fileService) =>
            (_repo, _fileService) = (repo, fileService);


        public async Task<ActionResult<List<Boat>>> GetAll()
        {
            var boats = await _repo.FindAll();

            return Ok(boats);
        }

        [Route("{id}")]
        public async Task<ActionResult<Boat>> GetOne(int id)
        {
            var boat = await _repo.Find(id);
            if (boat == null) return NotFound();

            return Ok(boat);
        }

        [HttpPost]
        public async Task<ActionResult<Boat>> Create([FromBody] BoatModel boat)
        {
            return Ok(await _repo.Create(boat));
        }

        [HttpPut]
        [Route("{id}")]
        public async Task<ActionResult<Boat>> Update(int id, [FromBody] BoatModel boat)
        {
            return Ok(await _repo.Update(id, boat));
        }

        [HttpDelete]
        [Route("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var deleted = await _repo.Delete(id);
            if (!deleted) return NotFound();

            return NoContent();
        }

        [HttpPost]
        [Route("upload-picture")]
        public async Task<IActionResult> UploadPicture(IFormFile file)
        {
            return Ok(await _fileService.SaveFile(file, "boat-picture-"));
        }
    }
}
