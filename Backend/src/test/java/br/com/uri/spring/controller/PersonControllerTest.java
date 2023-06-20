package br.com.uri.spring.controller;

import br.com.uri.spring.dto.CityDTO;
import br.com.uri.spring.dto.PersonDTO;
import br.com.uri.spring.service.PersonServiceTest;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

@ExtendWith(SpringExtension.class)
@WebMvcTest(controllers = PersonController.class)
public class PersonControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    @MockBean
    private PersonServiceTest personService;

    @Test
    public void givenAValidRequestWhenCreatingPersonThenShouldReturnOk() throws Exception {
        String URI = "/v1/persons";

        PersonDTO content = buildMockPayload();

        RequestBuilder requestBuilder = MockMvcRequestBuilders
                .post(URI)
                .content(objectMapper.writeValueAsString(content))
                .accept(MediaType.APPLICATION_JSON)
                .contentType(MediaType.APPLICATION_JSON);
        mockMvc.perform(requestBuilder)
                .andExpect(MockMvcResultMatchers.status().isAccepted());
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
