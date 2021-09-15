package com.example.faremanagement.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.stereotype.Service;
@Service
@Document(collection="fare")
public class Fare {
	@Id
	String id;
	String flight_name;
	int fare;
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getFlight_name() {
		return flight_name;
	}
	public void setFlight_name(String flight_name) {
		this.flight_name = flight_name;
	}
	public int getFare() {
		return fare;
	}
	public void setFare(int fare) {
		this.fare = fare;
	}
	@Override
	public String toString() {
		return "Fare [id=" + id + ", flight_name=" + flight_name + ", fare=" + fare + "]";
	}
	public Fare(String id, String flight_name, int fare) {
		super();
		this.id = id;
		this.flight_name = flight_name;
		this.fare = fare;
	}
	public Fare() {
		
	}
	

}
