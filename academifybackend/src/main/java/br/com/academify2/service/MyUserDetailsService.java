package br.com.academify2.service;

import br.com.academify2.model.Usuario;
import br.com.academify2.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class MyUserDetailsService implements UserDetailsService {

    @Autowired
    UsuarioRepository usuarioRepository;

    @Override
    public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {
/*        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder(5);
        String passwordEncoded = encoder.encode("111111");
        System.out.println(passwordEncoded);*/

        Usuario usuario = usuarioRepository.findByUsuario(userName);

        return new User(usuario.getUsuario(),usuario.getSenha(), new ArrayList<>());
        // return new User("victor", "$2y$05$cRUUpq5Odqw7tLyfGw74xu/cX/9xKT5JGe4fU9kZ2JwQEhsfT3816", new ArrayList<>());
    }
}
