package com.trabalho.a3;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@EntityScan(basePackages = "model")
@SpringBootApplication
@RestController
public class A3Application {

	public static void main(String[] args) {
		SpringApplication.run(A3Application.class, args);
	}
	@GetMapping("/")
	public String index() {
		return "ola,mundo";
	}
}
