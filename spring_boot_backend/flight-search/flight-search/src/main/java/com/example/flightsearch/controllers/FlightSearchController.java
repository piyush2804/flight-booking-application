package com.example.flightsearch.controllers;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.example.flightsearch.models.Fare;
import com.example.flightsearch.models.FlightDetails;
import com.example.flightsearch.repository.FlightRepository;

@RestController
@RequestMapping("/flight")
@CrossOrigin
public class FlightSearchController {
	
	Logger logger=LoggerFactory.getLogger(FlightSearchController.class);
	
	@Autowired
	private RestTemplate restTemplate;
	@Autowired
	FlightRepository flightRepository;
	@Autowired
	FlightDetails flightDetails;
	
	List<FlightDetails> lis;
	Optional<FlightDetails> lis2;
	
	List<Fare> fares;
	
	@GetMapping(value="/{userId}")
	public List<FlightDetails> getFlight()
	{
		return (lis);
	}
	
	@PostMapping(value="/search")
	public void searchFlight(@RequestBody FlightDetails flight)
	{
		if(lis!=null) {
		lis.clear();
		}
		logger.info(flight.toString());
		lis=flightRepository.findByDeptAndArrAndDate(flight.getDept(),flight.getArr(),flight.getDate());

	}
	
	@PostMapping(value="/select")
	public void selectFlight(@RequestBody FlightDetails flight)
	{
		if(lis!=null) {
		lis.clear();
		}
		System.out.println(flight);
		lis2=flightRepository.findById(flight.getId());
		lis=lis2.stream().collect(Collectors.toList());
		System.out.println(lis);
		flightDetails.setId(flight.getId());
	}
	
	@GetMapping(value="/id")
	public FlightDetails getFlight2()
	{
		return (flightDetails);
	}
	
	//ADMIN
	
	@GetMapping("/getflights")
	public List<FlightDetails> GetUsers() {
	     ResponseEntity<List<Fare>> rateResponse=restTemplate.exchange("http://fare-management/",HttpMethod.GET, null, new ParameterizedTypeReference<List<Fare>>() {
           });
	       fares = rateResponse.getBody();
	    return (List<FlightDetails>) flightRepository.findAll();
	}
	@GetMapping("/admin/{id}")
	public FlightDetails GetUser(@PathVariable Integer id) {
	        return flightRepository.findById(id).orElse(null);
	}
	@PostMapping("/")
	public FlightDetails PostUser(@RequestBody FlightDetails flight) {
	    	
		for(int i=0;i<fares.size();i++) {
	    	if(flight.getFlight_name().equals(fares.get(i).getFlight_name()))
	    		{
	    		flight.setFare(fares.get(i).getFare());
	    		}
		    }
	    return flightRepository.save(flight);
	 }
	 @PutMapping("/")
	 public FlightDetails PutUser(@RequestBody FlightDetails flight) {
	    	FlightDetails oldUser = flightRepository.findById(flight.getId()).orElse(null);
	        oldUser.setFlight_name(flight.getFlight_name());
	        oldUser.setArr(flight.getArr());
	        oldUser.setArrival(flight.getArrival());
	        oldUser.setDate(flight.getDate());
	        oldUser.setDeparture(flight.getDeparture());
	        oldUser.setFare(flight.getFare());
	        oldUser.setDept(flight.getDept());
	        oldUser.setArrivaldate(flight.getArrivaldate());
	        return flightRepository.save(oldUser);
	 }
	 @DeleteMapping("/{id}")
	 public Integer DeleteUser(@PathVariable Integer id) {
	    	flightRepository.deleteById(id);
	        return id;
	 }
}
