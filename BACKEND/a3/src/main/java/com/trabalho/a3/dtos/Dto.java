package com.trabalho.a3.dtos;

// Classe com validador de dados 
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public class Dto {
		
		@NotBlank
		@Size(max = 11)
		private String cpf;
		
		@NotBlank
		private String nomeCompleto;
		
		@NotBlank
		private String email;
		

		@NotBlank
		@Size(max = 11)
		private String telefone;
		
		@NotBlank
		private String senha;
		
		String getCpf() {
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

