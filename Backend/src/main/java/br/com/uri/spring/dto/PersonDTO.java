package br.com.uri.spring.dto;

import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.Valid;
import javax.validation.constraints.NotBlank;

@Data
@AllArgsConstructor
@NoArgsConstructor(force = true)
public class PersonDTO {

    @NotBlank
    private String name;

    @NotNull
    @Valid
    private CityDTO city;
}
