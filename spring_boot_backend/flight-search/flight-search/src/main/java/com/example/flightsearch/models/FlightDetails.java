package com.example.flightsearch.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.stereotype.Service;
@Service
@Entity
@Table(name = "searchflight")
public class FlightDetails {
	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	int id;
	String flight_name;
	@Column(name="dept_city")
	String dept;
	@Column(name="arr_city")
	String arr;
	@Column(name="departure_date")
	String date;
	@Column(name="arrival_date")
	String arrivaldate;
	int fare;
	String departure;
	String arrival;
	//List<BookingDetails> bookings;
	public FlightDetails() {
		
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getFlight_name() {
		return flight_name;
	}
	public void setFlight_name(String flight_name) {
		this.flight_name = flight_name;
	}
	public String getDept() {
		return dept;
	}
	public void setDept(String dept) {
		this.dept = dept;
	}
	public String getArr() {
		return arr;
	}
	public void setArr(String arr) {
		this.arr = arr;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public String getArrivaldate() {
		return arrivaldate;
	}
	public void setArrivaldate(String arrivaldate) {
		this.arrivaldate = arrivaldate;
	}
	public int getFare() {
		return fare;
	}
	public void setFare(int fare) {
		this.fare = fare;
	}
	public String getDeparture() {
		return departure;
	}
	public void setDeparture(String departure) {
		this.departure = departure;
	}
	public String getArrival() {
		return arrival;
	}
	public void setArrival(String arrival) {
		this.arrival = arrival;
	}
	@Override
	public String toString() {
		return "FlightDetails [id=" + id + ", flight_name=" + flight_name + ", dept=" + dept + ", arr=" + arr
				+ ", date=" + date + ", arrivaldate=" + arrivaldate + ", fare=" + fare + ", departure=" + departure
				+ ", arrival=" + arrival + "]";
	}
	public FlightDetails(int id,String flight_name, String dept, String arr, String date, String arrivaldate, int fare,
			String departure, String arrival) {
		super();
		this.id=id;
		this.flight_name = flight_name;
		this.dept = dept;
		this.arr = arr;
		this.date = date;
		this.arrivaldate = arrivaldate;
		this.fare = fare;
		this.departure = departure;
		this.arrival = arrival;
	}



	
	
}
