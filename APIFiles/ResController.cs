using Entity.Models;
using Entity.Repositary;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using System.Web.Http.Cors;

namespace Entity.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class ResController : ApiController
    {
        
        public readonly IReservation Ires;
        public ResController(IReservation ires)
        {
            this.Ires = ires;
        }
        [Route("api/Res/GetAllInfo")]
        [HttpGet]
        public IHttpActionResult GetAlldetails()
        {
            var GetResults = Ires.GetDetails();
            return Ok(GetResults);
        }
        [Route("api/res/add")]
        [HttpPost]
        public IHttpActionResult AddInfo(ResModel r)
        {
            var z = Ires.AddDetail(r);
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            if (z == null)
            {
                return NotFound();
            }
            return Ok(z);


        }
        [Route("api/res/edit")]
        [HttpPost]
        public IHttpActionResult EditInfo(ResModel r)
        {
            var z = Ires.EditDetail(r);
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            if (z == null)
            {
                return NotFound();
            }
            return Ok(z);


        }
        [Route("api/res/delete/{id}")]
        [HttpDelete]
        public IHttpActionResult DeleteInfo(int id)
        {
            var z = Ires.DeleteDetail(id);
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            if (z == null)
            {
                return NotFound();
            }
            return Ok(z);


        }
    }
}
