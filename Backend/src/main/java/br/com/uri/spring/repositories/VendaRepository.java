package br.com.uri.spring.repositories;

import br.com.uri.spring.entities.VendaEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface VendaRepository extends JpaRepository<VendaEntity, Long> {
}
