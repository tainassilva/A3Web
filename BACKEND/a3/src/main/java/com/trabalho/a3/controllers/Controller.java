package com.trabalho.a3.controllers;

import org.springframework.beans.BeanUtils;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.trabalho.a3.dtos.Dto;
import com.trabalho.a3.model.Modelo;
import com.trabalho.a3.services.Services;

import jakarta.validation.Valid;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600) // Para poder ser scessado de qualquer fonte
@RequestMapping("/login")
class Controller {
	
	final Services servicos;

	public Controller(Services servicos) {
		this.servicos = servicos;
	}
	
	@PostMapping
	public ResponseEntity<Object> saveEasyBeauty(@RequestBody @Valid Dto dto){ //registros que o cliente vai mandar para que esse cadastro seja feito
		var easyBeautyModel = new Modelo();
		BeanUtils.copyProperties(dto, easyBeautyModel);
		return ResponseEntity.status(HttpStatus.CREATED).body(servicos.save(easyBeautyModel));
	}
	
	// valid realizam as validacoes dos dtos
	 
	
}
