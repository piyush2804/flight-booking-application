package com.example.flightbooking.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.transaction.Transactional;

@Entity
@Table(name = "booked")
@Transactional
public class Booking {
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
	@Column(name="first_name")
	private String first;
	@Column(name="last_name")
	private String last;
	private String ischeckedin;
	Booking(){
	
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
	public String getIscheckedin() {
		return ischeckedin;
	}
	public void setIscheckedin(String ischeckedin) {
		this.ischeckedin = ischeckedin;
	}
	public Booking(int id, String flight_name, String dept, String arr, String date, String first, String last,
		String ischeckedin) {
		super();
		this.id = id;
		this.flight_name = flight_name;
		this.dept = dept;
		this.arr = arr;
		this.date = date;
		this.first = first;
		this.last = last;
		this.ischeckedin = ischeckedin;
	}
	@Override
	public String toString() {
		return "Booking [id=" + id + ", flight_name=" + flight_name + ", dept=" + dept + ", arr=" + arr + ", date=" + date
			+ ", first=" + first + ", last=" + last + ", ischeckedin=" + ischeckedin + "]";
	}


}
