package br.com.uri.spring.dto;

import org.junit.jupiter.api.Test;

import javax.validation.ConstraintViolation;
import javax.validation.Validation;
import javax.validation.Validator;
import javax.validation.ValidatorFactory;
import java.util.Set;

import static org.junit.jupiter.api.Assertions.assertTrue;

public class ClienteDTOTest {

    @Test
    public void testClienteDTOValidation() {
        ClienteDTO clienteDTO = new ClienteDTO();
        clienteDTO.setNome("John Doe");
        clienteDTO.setCPF("123.456.789-00");
        clienteDTO.setDataNasc("1990-01-01");
        clienteDTO.setEndereco("123 Main Street");

        ValidatorFactory factory = Validation.buildDefaultValidatorFactory();
        Validator validator = factory.getValidator();
        Set<ConstraintViolation<ClienteDTO>> violations = validator.validate(clienteDTO);

        assertTrue(violations.isEmpty(), "DTO passou na validação");
    }

}
