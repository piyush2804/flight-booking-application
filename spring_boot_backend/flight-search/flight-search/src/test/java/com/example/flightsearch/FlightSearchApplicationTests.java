package com.example.flightsearch;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import com.example.flightsearch.models.FlightDetails;
import com.example.flightsearch.repository.FlightRepository;

@SpringBootTest
class FlightSearchApplicationTests {

	@Autowired
	Optional<FlightDetails> flights;
	
	@Autowired
	FlightDetails flightDetails;

	@MockBean
	FlightRepository flightRepository;
	
	@Test
	public void getCount() {
		when(flightRepository.count())
		.thenReturn(Long.parseLong("4"));
		
		assertEquals(flightRepository.count(),4L);

	}
	@Test
	public void search() {

		when(flightRepository.findById(1))
		.thenReturn(flights);
		assertEquals(flightRepository.findById(1),flights);
	}
	@Test
	public void find() {

		when(flightRepository.existsById(1))
		.thenReturn(true);
		assertEquals(flightRepository.existsById(1),true);
	}
	@Test
	public void setFlight() {

		when(flightRepository.save(flightDetails))
		.thenReturn(flightDetails);
		assertEquals(flightRepository.save(flightDetails),flightDetails);
	}
}
