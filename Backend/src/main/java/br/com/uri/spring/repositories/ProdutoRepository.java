package br.com.uri.spring.repositories;

import br.com.uri.spring.entities.ProdutoEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

public interface ProdutoRepository extends JpaRepository<ProdutoEntity, Long> {
}
