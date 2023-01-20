using Entity.Models;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Runtime.Remoting.Metadata.W3cXsd2001;
using System.Text;
using System.Threading.Tasks;

namespace Entity.Repositary
{
    public interface IReservation
    {
        List<ResModel> GetDetails();
        string AddDetail(ResModel r);
        string EditDetail(ResModel r);
        string DeleteDetail(int id);

    }
    public class Reservationc : IReservation
    {
        SampleEntities3 con = new SampleEntities3();
        List<ResModel> IReservation.GetDetails()
        {
            List<ResModel> reservelist = null;
            reservelist = con.Reservations.Select(f => new ResModel()
            {
                SNo = f.SNo,
                Hotel = f.Hotel,
                Arrival = f.Arrival,
                Departure = f.Departure,
                Type = f.Type,
                Guests = f.Guests,
                Price = f.Price
            }).ToList<ResModel>();
            return reservelist;
        }
        string IReservation.AddDetail(ResModel r)
        {
            if (r != null)
            {
                var record = con.Reservations.Where(q => r.SNo == q.SNo).FirstOrDefault();

                if (record == null)
                {
                    con.Reservations.Add(new Reservation
                    {
                        SNo = r.SNo,
                        Hotel = r.Hotel,
                        Arrival = r.Arrival,
                        Departure = r.Departure,
                        Type = r.Type,
                        Guests = r.Guests,
                        Price = r.Price
                    });
                    //con.SaveChanges();
                    //con.Dispose();

                }
                else
                {
                    record.SNo = r.SNo;
                    record.Hotel = r.Hotel;
                    record.Arrival = r.Arrival;
                    record.Departure = r.Departure;
                    record.Guests = r.Guests;
                    record.Price = r.Price;

                }
            }

            con.SaveChanges();
            //con.Dispose();
            return "Inserted";
        }
        string IReservation.EditDetail(ResModel r)
        {
            var record = con.Reservations.Where(p=>p.SNo== r.SNo).FirstOrDefault();
            if (record != null)
            {
                record.SNo = r.SNo;
                record.Hotel = r.Hotel;
                record.Arrival = r.Arrival;
                record.Departure = r.Departure;
                record.Guests = r.Guests;
                record.Price = r.Price;


            }
            con.SaveChanges();
            con.Dispose();
            return "Edited";
        }
        string IReservation.DeleteDetail(int id)
        {
            var record=con.Reservations.Where(q=>q.SNo== id).FirstOrDefault();
            if (record != null)
            {
                con.Reservations.Remove(record);
            }
            con.SaveChanges();
            //con.Dispose();
            return "Deleted";
        }
            
    }
    
}
