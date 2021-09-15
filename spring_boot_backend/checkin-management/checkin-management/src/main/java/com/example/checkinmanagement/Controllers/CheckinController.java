package com.example.checkinmanagement.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.checkinmanagement.entities.Checkin;
import com.example.checkinmanagement.repository.CheckinRepository;


@RestController
@RequestMapping("/checkin")
@CrossOrigin
public class CheckinController {
	@Autowired
	CheckinRepository checkinRepository;

	@PostMapping(value="/setcheckin")
	public void setCheckin(@RequestBody List<Checkin> obj)
	{
		for(int i=0;i<obj.size();i++)
		{
			checkinRepository.save(obj.get(i));
		}
	}
	@GetMapping(value="/getadmincheckin")
	public List<Checkin> getAdminCheckin()
	{
		return (List<Checkin>) checkinRepository.findAll();
	}
	@DeleteMapping("/{id}")
    public Integer DeleteUser(@PathVariable Integer id) {
		checkinRepository.deleteById(id);
        return id;
    }
	@GetMapping("/update/{id}")
    public Checkin GetUser(@PathVariable Integer id) {
        return checkinRepository.findById(id).orElse(null);
        
    }
	@PutMapping("/update")
    public Checkin PutUser(@RequestBody Checkin checkin) {
		System.out.println(checkin);
		Checkin oldUser = checkinRepository.findById(checkin.getId()).orElse(null);
        oldUser.setFirst(checkin.getFirst());
        oldUser.setLast(checkin.getLast());
        System.out.println(oldUser);
        return checkinRepository.save(oldUser);
    }
	
}
