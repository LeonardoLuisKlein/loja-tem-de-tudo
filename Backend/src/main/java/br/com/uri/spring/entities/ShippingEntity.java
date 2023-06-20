package br.com.uri.spring.entities;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import java.util.Set;

@Data
@Entity
public class ShippingEntity {

    @Id
    private Long id;

    private String shippingId;

    @OneToMany(mappedBy = "shippingEntity")
    private Set<CommerceItemEntity> commerceItems;

}
