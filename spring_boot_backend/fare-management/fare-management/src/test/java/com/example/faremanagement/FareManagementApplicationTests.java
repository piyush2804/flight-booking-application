package com.example.faremanagement;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;


import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import com.example.faremanagement.models.Fare;
import com.example.faremanagement.repository.FareRepository;

@SpringBootTest
class FareManagementApplicationTests {

	@Autowired
	Fare fare;

	@MockBean
	FareRepository fareRepository;
	
	@Test
	public void getFareTest() {
		when(fareRepository.count())
		.thenReturn(Long.parseLong("4"));
		
		assertEquals(fareRepository.count(),4L);
	}

	@Test
	public void setFareTest() {

		when(fareRepository.save(fare))
		.thenReturn(fare);
		assertEquals(fareRepository.save(fare),fare);
	}


}
