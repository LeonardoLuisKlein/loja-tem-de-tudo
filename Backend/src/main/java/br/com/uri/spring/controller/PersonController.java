package br.com.uri.spring.controller;


import br.com.uri.spring.dto.PersonDTO;
import br.com.uri.spring.service.PersonService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequestMapping("/v1")
public class PersonController {
    private PersonService personService;

    public PersonController(PersonService personService) {
        this.personService = personService;
    }

    @PostMapping("/persons")
    public ResponseEntity<Void> postData(@RequestBody
                         @Valid PersonDTO personDTO) {
        personService.saveObject(personDTO);
        return ResponseEntity.accepted().build();
    }
}
