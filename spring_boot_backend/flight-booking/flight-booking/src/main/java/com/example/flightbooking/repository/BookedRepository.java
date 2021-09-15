package com.example.flightbooking.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.example.flightbooking.models.Booking;

public interface BookedRepository extends CrudRepository<Booking,Integer>{
	
	@Query(value="select c.id,b.flight_name,b.dept_city,b.arr_city,b.departure_date,c.first_name,c.last_name,c.ischeckedin from searchflight b INNER JOIN bookflight c on b.id=c.flight_id where c.email =:n",nativeQuery=true)
	public List<Booking> getBooking(@Param("n") String email);
	
}
