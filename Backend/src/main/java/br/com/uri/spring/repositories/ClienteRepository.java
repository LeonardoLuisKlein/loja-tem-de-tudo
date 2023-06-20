package br.com.uri.spring.repositories;

import br.com.uri.spring.entities.ClienteEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface ClienteRepository extends JpaRepository<ClienteEntity, Long>{
}
