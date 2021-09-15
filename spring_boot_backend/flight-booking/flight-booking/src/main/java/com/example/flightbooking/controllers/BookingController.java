package com.example.flightbooking.controllers;

import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import com.example.flightbooking.models.Booking;
import com.example.flightbooking.models.BookingDetails;
import com.example.flightbooking.models.FlightDetails;
import com.example.flightbooking.models.Credentials;
import com.example.flightbooking.repository.BookRepository;
import com.example.flightbooking.repository.BookedRepository;
import com.example.flightbooking.repository.CredentialRepository;

@RestController
@CrossOrigin
@RequestMapping("/book")
public class BookingController {
	
	@Autowired
	private RestTemplate restTemplate;
	
	@Autowired
	BookRepository bookRepository;

	@Autowired 
	BookedRepository bookedRepository;
	
	@Autowired 
	CredentialRepository credentialRepository;
	
	List<BookingDetails> lis;
	
	List<Booking> lis3;
	
	@GetMapping(value="/list")
	public List<BookingDetails> getBookingList() 
	{
		return (List<BookingDetails>) (bookRepository.findAll());
	}

	@PostMapping(value="/add")
	public void addFlight(@RequestBody List<BookingDetails> obj)
	{
		FlightDetails obj3=restTemplate.getForObject("http://localhost:8080/flight/id", FlightDetails.class);
		
		for (int i=0;i<obj.size();i++) {
			obj.get(i).setFlight_id(obj3.getId());
		    obj.get(i).setIscheckedin("No");
		    System.out.println(obj.get(i));
		    bookRepository.save(obj.get(i));
		}

	}
	@DeleteMapping("/delete")
    public void deleteBooking() {
    	bookRepository.deleteAll();
    }
	@PostMapping(value="/brn")
	public List<Booking> searchBooking(@RequestBody BookingDetails obj)
	{
		if(lis3!=null) {
			lis3.clear();
			}

		lis3=bookedRepository.getBooking(obj.getEmail());
		
		return bookedRepository.getBooking(obj.getEmail());
	}
	
	@PostMapping(value="/signup")
	public Credentials signup(@RequestBody Credentials obj)
	{
		return obj;
	}
	@PostMapping(value="/login")
	public Credentials login(@RequestBody Credentials obj)
	{
		System.out.println(obj);
		boolean entry=credentialRepository.existsByEmailAndPassword(obj.getEmail(), obj.getPassword());
		if(entry==true) {
			return (obj);
		}
		else {
			return(new Credentials());
		}
	}
	@GetMapping(value="/getbooking")
	public List<Booking> getBooking()
	{
		System.out.println(lis3);
		return (lis3);
	}
	//ADMIN
	@GetMapping(value="/getadminbooking")
	public List<Booking> getAdminBooking()
	{
		Iterable<Booking> x=bookedRepository.findAll();
		List<Booking> target = new ArrayList<>();
		x.forEach(target::add);
		System.out.println(target);
		return target;
	}	
}
