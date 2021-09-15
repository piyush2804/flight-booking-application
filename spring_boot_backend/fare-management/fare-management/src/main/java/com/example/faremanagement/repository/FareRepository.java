package com.example.faremanagement.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.faremanagement.models.Fare;

@Repository
public interface FareRepository extends MongoRepository<Fare,String>{

}
