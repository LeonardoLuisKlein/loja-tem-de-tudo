package br.com.uri.spring.entities;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "city")
@Data
public class CityEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    @Column
    private String name;

    @Column
    private String state;

    @Column
    private String zipCode;

}
