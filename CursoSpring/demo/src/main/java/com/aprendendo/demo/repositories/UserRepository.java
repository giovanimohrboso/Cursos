package com.aprendendo.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.aprendendo.demo.entities.User;

public interface UserRepository extends JpaRepository<User, Long>{
    
}
