package br.com.uri.spring.service;

import br.com.uri.spring.dto.PersonDTO;
import br.com.uri.spring.entities.CityEntity;
import br.com.uri.spring.entities.PersonEntity;
import br.com.uri.spring.repositories.CityRepository;
import br.com.uri.spring.repositories.PersonRepository;
import org.springframework.stereotype.Service;

@Service
public class PersonService {

    private final PersonRepository personRepository;

    private final CityRepository cityRepository;

    public PersonService(PersonRepository personRepository, CityRepository cityRepository) {
        this.personRepository = personRepository;
        this.cityRepository = cityRepository;
    }

    public void saveObject(PersonDTO personDTO) {
        PersonEntity personEntity = new PersonEntity();

        // Criar a cidade
        CityEntity cityEntity = new CityEntity();
        cityEntity.setName(personDTO.getCity().getName());
        cityEntity.setState(personDTO.getCity().getState());
        cityEntity.setZipCode(personDTO.getCity().getZipCode());
        cityEntity = cityRepository.save(cityEntity);

        // Criar a pessoa
        personEntity.setCityEntity(cityEntity);
        personEntity.setName(personDTO.getName());

        personRepository.save(personEntity);
    }

}
