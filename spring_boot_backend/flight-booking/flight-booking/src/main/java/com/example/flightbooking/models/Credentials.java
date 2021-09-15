package com.example.flightbooking.models;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="credentials")
public class Credentials {
	@Id
	int id;
	String email;
	String password;
	public Credentials() {
	
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public Credentials(String email, String password) {
		super();
		this.email = email;
		this.password = password;
	}
	@Override
	public String toString() {
		return "credentials [email=" + email + ", password=" + password + "]";
	}
}
