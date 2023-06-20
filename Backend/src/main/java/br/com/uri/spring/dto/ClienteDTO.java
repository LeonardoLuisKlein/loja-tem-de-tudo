package br.com.uri.spring.dto;

import lombok.Data;

import javax.validation.constraints.NotBlank;

@Data
public class ClienteDTO {

    @NotBlank
    private String Nome;

    @NotBlank
    private String CPF;

    @NotBlank
    private String DataNasc;

    @NotBlank
    private String Endereco;
}
