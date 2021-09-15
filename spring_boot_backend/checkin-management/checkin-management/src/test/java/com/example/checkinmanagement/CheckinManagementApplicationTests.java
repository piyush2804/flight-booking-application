package com.example.checkinmanagement;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import com.example.checkinmanagement.entities.Checkin;
import com.example.checkinmanagement.repository.CheckinRepository;

@SpringBootTest
class CheckinManagementApplicationTests {
	
	@Autowired
	Optional<Checkin> checkIn;
	
	@Autowired
	Checkin checkIn2;

	@MockBean
	CheckinRepository checkinRepository;
	
	@Test
	public void getAdminCheckinTest() {
		when(checkinRepository.count())
		.thenReturn(Long.parseLong("4"));
		
		assertEquals(checkinRepository.count(),4L);

	}
	@Test
	public void getAdminCheckinTest2() {

		when(checkinRepository.findById(1))
		.thenReturn(checkIn);
		assertEquals(checkinRepository.findById(1),checkIn);
	}
	@Test
	public void getAdminCheckinTest3() {

		when(checkinRepository.existsById(1))
		.thenReturn(true);
		assertEquals(checkinRepository.existsById(1),true);
	}
	@Test
	public void getAdminCheckinTest4() {

		when(checkinRepository.save(checkIn2))
		.thenReturn(checkIn2);
		assertEquals(checkinRepository.save(checkIn2),checkIn2);
	}

}
