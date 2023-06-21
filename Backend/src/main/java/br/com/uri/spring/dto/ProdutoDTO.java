package br.com.uri.spring.dto;

import lombok.Data;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Data
public class ProdutoDTO {

    @NotNull
    private long CodigoDeBarras;

    @NotBlank
    private String NomeProduto;

    @NotBlank
    private String Descricao;

    @NotNull
    private long Quantidade;

    @NotNull
    private float PrecoUnit;
}
