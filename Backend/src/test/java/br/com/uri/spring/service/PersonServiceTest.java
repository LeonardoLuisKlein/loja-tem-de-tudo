package br.com.uri.spring.service;

import br.com.uri.spring.dto.CityDTO;
import br.com.uri.spring.dto.PersonDTO;
import br.com.uri.spring.repositories.CityRepository;
import br.com.uri.spring.repositories.PersonRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;

@ExtendWith(MockitoExtension.class)
public class PersonServiceTest {

    private PersonService personService;

    @Mock
    private PersonRepository personRepository;

    @Mock
    private CityRepository cityRepository;

    @BeforeEach
    public void initService() {
        this.personService =
                new PersonService(this.personRepository, this.cityRepository);
    }

    @Test
    public void givenAValidRequestWhenCreatingPersonThenSave(){
        this.personService.saveObject(buildMockPayload());
        Mockito.verify(personRepository, Mockito.times(1)).save(Mockito.any());
    }

    private PersonDTO buildMockPayload() {
        PersonDTO person = new PersonDTO();
        person.setName("Joe");
        CityDTO cityDTO = new CityDTO();
        cityDTO.setName("Aratiba");
        cityDTO.setState("RS");
        cityDTO.setZipCode("99601231");
        person.setCity(cityDTO);
        return person;
    }


}
