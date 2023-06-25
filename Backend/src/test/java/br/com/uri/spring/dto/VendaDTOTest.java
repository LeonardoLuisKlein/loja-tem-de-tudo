package br.com.uri.spring.dto;

import org.junit.jupiter.api.Test;

import javax.validation.ConstraintViolation;
import javax.validation.Validation;
import javax.validation.Validator;
import javax.validation.ValidatorFactory;
import java.util.Set;

import static org.junit.jupiter.api.Assertions.assertTrue;

public class VendaDTOTest {

    @Test
    public void testVendaDTOValidation() {
        VendaDTO vendaDTO = new VendaDTO();
        vendaDTO.setID_Cliente(1L);
        vendaDTO.setCodigoDeBarras(123L);
        vendaDTO.setQuantidade(5L);
        vendaDTO.setPrecoUnit(10.0f);

        ValidatorFactory factory = Validation.buildDefaultValidatorFactory();
        Validator validator = factory.getValidator();
        Set<ConstraintViolation<VendaDTO>> violations = validator.validate(vendaDTO);

        assertTrue(violations.isEmpty(), "DTO passou na validação");
    }

}
