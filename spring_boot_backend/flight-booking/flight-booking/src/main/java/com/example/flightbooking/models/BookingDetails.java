package com.example.flightbooking.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "bookflight")
public class BookingDetails {
	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	private int id;
	@Column(name="first_name")
	private String first;
	@Column(name="last_name")
	private String last;
	private String gender;
	private int flight_id;
	private String email;
	private String ischeckedin;
	
	public BookingDetails() {
		
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getFirst() {
		return first;
	}

	public void setFirst(String first) {
		this.first = first;
	}


	public String getLast() {
		return last;
	}

	public void setLast(String last) {
		this.last = last;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public int getFlight_id() {
		return flight_id;
	}

	public void setFlight_id(int flight_id) {
		this.flight_id = flight_id;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getIscheckedin() {
		return ischeckedin;
	}


	public void setIscheckedin(String ischeckedin) {
		this.ischeckedin = ischeckedin;
	}

	public BookingDetails(int id, String first, String last, String gender, int flight_id, String email,
			String ischeckedin) {
		super();
		this.id = id;
		this.first = first;
		this.last = last;
		this.gender = gender;
		this.flight_id = flight_id;
		this.email = email;
		this.ischeckedin = ischeckedin;
	}

	@Override
	public String toString() {
		return "BookingDetails [id=" + id + ", first=" + first + ", last=" + last + ", gender=" + gender
				+ ", flight_id=" + flight_id + ", email=" + email + ", ischeckedin=" + ischeckedin + "]";
	}
}
