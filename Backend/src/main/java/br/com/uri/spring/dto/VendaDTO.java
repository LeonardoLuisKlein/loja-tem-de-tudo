package br.com.uri.spring.dto;

import lombok.Data;

import javax.validation.constraints.NotBlank;

@Data
public class VendaDTO {

    @NotBlank
    private long ID_Cliente;

    @NotBlank
    private long CodigoDeBarras;

    @NotBlank
    private long Quantidade;

    @NotBlank
    private float PrecoUnit;

}
