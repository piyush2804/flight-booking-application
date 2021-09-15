package com.example.flightbooking.repository;

import org.springframework.data.repository.CrudRepository;

import com.example.flightbooking.models.Credentials;


public interface CredentialRepository extends CrudRepository<Credentials,Integer>{
	
	boolean existsByEmailAndPassword(String email,String password);
	
	Credentials findByEmailAndPassword(String email,String password);
}
