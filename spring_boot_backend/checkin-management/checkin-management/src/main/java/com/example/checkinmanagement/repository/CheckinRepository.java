package com.example.checkinmanagement.repository;

import org.springframework.data.repository.CrudRepository;

import com.example.checkinmanagement.entities.Checkin;

public interface CheckinRepository extends CrudRepository<Checkin,Integer>{
//	@Query(value="select c.id,b.flight_name,b.dept_city,b.arr_city,b.departure_date,c.first_name,c.last_name,c.ischeckedin,c.email from searchflight b INNER JOIN bookflight c on b.id=c.flight_id",nativeQuery=true)
//	public List<Checkin> getCheckin();
}
