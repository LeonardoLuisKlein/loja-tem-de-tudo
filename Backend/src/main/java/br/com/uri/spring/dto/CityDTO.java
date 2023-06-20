package br.com.uri.spring.dto;

import lombok.Data;

import javax.validation.constraints.NotBlank;

@Data
public class CityDTO {

    @NotBlank
    private String name;

    @NotBlank
    private String state;

    @NotBlank
    private String zipCode;


}
