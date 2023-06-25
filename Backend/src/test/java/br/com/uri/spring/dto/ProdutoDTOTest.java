package br.com.uri.spring.dto;

import org.junit.jupiter.api.Test;

import javax.validation.ConstraintViolation;
import javax.validation.Validation;
import javax.validation.Validator;
import javax.validation.ValidatorFactory;
import java.util.Set;

import static org.junit.jupiter.api.Assertions.assertTrue;

public class ProdutoDTOTest {

    @Test
    public void testProdutoDTOValidation() {
        ProdutoDTO produtoDTO = new ProdutoDTO();
        produtoDTO.setCodigoDeBarras(123456789L);
        produtoDTO.setNomeProduto("Produto");
        produtoDTO.setDescricao("Um produto");
        produtoDTO.setQuantidade(10L);
        produtoDTO.setPrecoUnit(9.99f);

        ValidatorFactory factory = Validation.buildDefaultValidatorFactory();
        Validator validator = factory.getValidator();
        Set<ConstraintViolation<ProdutoDTO>> violations = validator.validate(produtoDTO);

        assertTrue(violations.isEmpty(), "DTO passou na validação");
    }

}
