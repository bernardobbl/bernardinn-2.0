package com.bernardinnn.bernardinn.api.converter;

import com.bernardinnn.bernardinn.api.response.EnderecoResponseDTO;
import com.bernardinnn.bernardinn.api.response.UsuarioResponseDTO;
import com.bernardinnn.bernardinn.infrastructure.entity.EnderecoEntity;
import com.bernardinnn.bernardinn.infrastructure.entity.UsuarioEntity;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2025-05-22T14:58:40-0300",
    comments = "version: 1.5.5.Final, compiler: javac, environment: Java 22.0.2 (Oracle Corporation)"
)
@Component
public class UsuarioMapperImpl implements UsuarioMapper {

    @Override
    public UsuarioResponseDTO paraUsuarioResponseDTO(UsuarioEntity usuario, EnderecoEntity enderecoEntity) {
        if ( usuario == null && enderecoEntity == null ) {
            return null;
        }

        String id = null;
        String nome = null;
        String documento = null;
        String email = null;
        if ( usuario != null ) {
            id = usuario.getId();
            nome = usuario.getNome();
            documento = usuario.getDocumento();
            email = usuario.getEmail();
        }
        EnderecoResponseDTO endereco = null;
        endereco = enderecoEntityToEnderecoResponseDTO( enderecoEntity );

        UsuarioResponseDTO usuarioResponseDTO = new UsuarioResponseDTO( id, nome, email, documento, endereco );

        return usuarioResponseDTO;
    }

    protected EnderecoResponseDTO enderecoEntityToEnderecoResponseDTO(EnderecoEntity enderecoEntity) {
        if ( enderecoEntity == null ) {
            return null;
        }

        String rua = null;
        Long numero = null;
        String bairro = null;
        String complemento = null;
        String cidade = null;
        String cep = null;

        rua = enderecoEntity.getRua();
        numero = enderecoEntity.getNumero();
        bairro = enderecoEntity.getBairro();
        complemento = enderecoEntity.getComplemento();
        cidade = enderecoEntity.getCidade();
        cep = enderecoEntity.getCep();

        EnderecoResponseDTO enderecoResponseDTO = new EnderecoResponseDTO( rua, numero, bairro, complemento, cidade, cep );

        return enderecoResponseDTO;
    }
}
