package br.com.uri.spring.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Data
@Entity
public class CommerceItemEntity {

    @Id
    private Long id;

    private String commerceId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JsonIgnore
    private ShippingEntity shippingEntity;

}
