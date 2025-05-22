package com.bernardinnn.bernardinn.api.converter;


import com.bernardinnn.bernardinn.api.response.UsuarioResponseDTO;
import com.bernardinnn.bernardinn.infrastructure.entity.EnderecoEntity;
import com.bernardinnn.bernardinn.infrastructure.entity.UsuarioEntity;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface UsuarioMapper {

    @Mapping(target = "id", source = "usuario.id")
    @Mapping(target = "nome", source = "usuario.nome")
    @Mapping(target = "documento", source = "usuario.documento")
    @Mapping(target = "endereco", source = "enderecoEntity")
    UsuarioResponseDTO paraUsuarioResponseDTO(UsuarioEntity usuario, EnderecoEntity enderecoEntity);

}
