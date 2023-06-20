package br.com.uri.spring.dto;

import lombok.Data;

import javax.validation.constraints.NotBlank;

@Data
public class ProdutoDTO {

    @NotBlank
    private long CodigoDeBarras;

    @NotBlank
    private String NomeProduto;

    @NotBlank
    private String Descricao;

    @NotBlank
    private long Quantidade;

    @NotBlank
    private float PrecoUnit;
}
