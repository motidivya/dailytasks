using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using InvokeWebAPIEF.Model;

namespace InvokeWebAPIEF.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CryptoController : ControllerBase
    {
        private readonly InvokeWebAPIEFContext _context;

        public CryptoController(InvokeWebAPIEFContext context)
        {
            _context = context;
        }

        // GET: api/Crypto
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Crypto>>> GetCrypto()
        {
          if (_context.Crypto == null)
          {
              return NotFound();
          }
            return await _context.Crypto.ToListAsync();
        }

        // GET: api/Crypto/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Crypto>> GetCrypto(int id)
        {
          if (_context.Crypto == null)
          {
              return NotFound();
          }
            var crypto = await _context.Crypto.FindAsync(id);

            if (crypto == null)
            {
                return NotFound();
            }

            return crypto;
        }

        // PUT: api/Crypto/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCrypto(int id, Crypto crypto)
        {
            if (id != crypto.Id)
            {
                return BadRequest();
            }

            _context.Entry(crypto).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CryptoExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Crypto
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Crypto>> PostCrypto(Crypto crypto)
        {
          if (_context.Crypto == null)
          {
              return Problem("Entity set 'InvokeWebAPIEFContext.Crypto'  is null.");
          }
            _context.Crypto.Add(crypto);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCrypto", new { id = crypto.Id }, crypto);
        }

        // DELETE: api/Crypto/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCrypto(int id)
        {
            if (_context.Crypto == null)
            {
                return NotFound();
            }
            var crypto = await _context.Crypto.FindAsync(id);
            if (crypto == null)
            {
                return NotFound();
            }

            _context.Crypto.Remove(crypto);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CryptoExists(int id)
        {
            return (_context.Crypto?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
