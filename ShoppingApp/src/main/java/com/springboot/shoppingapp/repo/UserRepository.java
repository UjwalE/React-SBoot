package com.springboot.shoppingapp.repo;

import com.springboot.shoppingapp.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserRepository extends JpaRepository<User, Integer> {

    List<User> findUserByUserId(Integer userId);
}
