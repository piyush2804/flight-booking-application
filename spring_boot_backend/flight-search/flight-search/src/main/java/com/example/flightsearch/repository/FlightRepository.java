package com.example.flightsearch.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.flightsearch.models.FlightDetails;
@Repository
public interface FlightRepository extends CrudRepository<FlightDetails,Integer>{
	List<FlightDetails> findByDeptAndArrAndDate(String dept,String arr,String date);
}

