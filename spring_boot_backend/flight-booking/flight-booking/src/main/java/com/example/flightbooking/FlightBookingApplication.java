package com.example.flightbooking;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import org.springframework.web.client.RestTemplate;

@SpringBootApplication
public class FlightBookingApplication {
	
	@Bean
//	@LoadBalanced
	public RestTemplate getrestTemplate() {
		return new RestTemplate();
	}
	public static void main(String[] args) {
		SpringApplication.run(FlightBookingApplication.class, args);
		
	}

}
