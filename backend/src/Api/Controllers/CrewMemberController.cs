using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Api.Models;
using Api.Services;
using BL.Entities;
using DAL.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{
    [ApiController]
    [Route("api/boats/{boatId}/crew")]
    public class CrewMemberController : Controller
    {
        readonly CrewMemberRepository _repo;
        readonly FileService _fileService;

        public CrewMemberController(CrewMemberRepository repo, FileService file) =>
            (_repo, _fileService) = (repo, file);

        public async Task<ActionResult<List<CrewMember>>> GetAll(int boatId)
        {
            var crewMembers = await _repo.Find(c => c.BoatId == boatId);

            return Ok(crewMembers);
        }

        [Route("{id}")]
        public async Task<ActionResult<Boat>> GetOne(int id)
        {
            var crewMember = await _repo.Find(id);
            if (crewMember == null) return NotFound();

            return Ok(crewMember);
        }

        [HttpPost]
        public async Task<ActionResult<Boat>> Create(int boatId, [FromBody] CrewMemberModel model)
        {
            return Ok(await _repo.Create(boatId, model));
        }

        [HttpPut]
        [Route("{id}")]
        public async Task<ActionResult<Boat>> Update(int id, [FromBody] CrewMemberModel model)
        {
            return Ok(await _repo.Update(id, model));
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
            return Ok(await _fileService.SaveFile(file, "crew-avatar-"));
        }
    }
}
