package com.trabalho.a3.model;

import java.io.Serializable;
import java.util.UUID;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "TB_USUARIO")
public class Modelo implements Serializable{
	private static final long serialVersionUID = 1L; //Controle das conversões de bytes para o banco de dados 

	@Id
	@GeneratedValue (strategy= GenerationType.AUTO)
	private UUID id;
	
	@Column(nullable = false, unique= true, length= 11)
	private String cpf;
	
	@Column(nullable = false, length= 100)
	private String nomeCompleto;
	
	@Column(nullable = false,unique= true, length= 100)
	private String email;
	
	@Column(nullable = false,unique=true, length= 11)
	private String telefone;
	
	@Column(nullable = false, length= 30)
	private String senha;
	
	public UUID getId() {
		return id;
	}

	public void setId(UUID id) {
		this.id = id;
	}

	public String getCpf() {
		return cpf;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
	}

	public String getNomeCompleto() {
		return nomeCompleto;
	}

	public void setNomeCompleto(String nomeCompleto) {
		this.nomeCompleto = nomeCompleto;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getTelefone() {
		return telefone;
	}

	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}
}

