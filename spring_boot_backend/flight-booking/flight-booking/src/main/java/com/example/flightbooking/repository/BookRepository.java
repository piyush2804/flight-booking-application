package com.example.flightbooking.repository;

import org.springframework.data.repository.CrudRepository;
import com.example.flightbooking.models.BookingDetails;

public interface BookRepository  extends CrudRepository<BookingDetails,Integer>{

}
