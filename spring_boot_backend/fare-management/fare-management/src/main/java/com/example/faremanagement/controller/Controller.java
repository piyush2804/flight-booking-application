package com.example.faremanagement.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.faremanagement.models.Fare;
import com.example.faremanagement.repository.FareRepository;

@RestController
@CrossOrigin
public class Controller {
	@Autowired
	FareRepository fareRepository;
	
	@GetMapping(value="/")
	public List<Fare> getFare()
	{
		return fareRepository.findAll();
	}
    @PutMapping("/")
    public Fare PutUser(@RequestBody Fare flight) {
    	Fare oldUser = fareRepository.findById(flight.getId()).orElse(null);
        oldUser.setFlight_name(flight.getFlight_name());
        oldUser.setFare(flight.getFare());
        return fareRepository.save(oldUser);
    }

}
