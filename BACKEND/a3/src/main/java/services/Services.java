package services;

import repository.Repositorio;
import org.springframework.stereotype.Service;
import jakarta.transaction.Transactional;
import model.Modelo;

@Service
public class Services {
	//Camada intermediaria entre repository e controller
   // Comunicação interna e injeção das depedencias
	
	final Repositorio repositorio ;
	
	public Services(Repositorio repositorio) {
	this.repositorio = repositorio;
}
	@Transactional // se algo na transação ser errado, ele garante que tudo volte ao normal e não tenha dados quebrados
	public Modelo save(Modelo easyBeautyModel) {
		return repositorio.save(easyBeautyModel);
	}
}
