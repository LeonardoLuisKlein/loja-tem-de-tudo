package br.com.uri.spring.dto;

import lombok.Data;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Data
public class VendaDTO {

    @NotNull
    private long ID_Cliente;

    @NotNull
    private long CodigoDeBarras;

    @NotNull
    private long Quantidade;

    @NotNull
    private float PrecoUnit;

}
