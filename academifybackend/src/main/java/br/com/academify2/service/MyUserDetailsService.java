package br.com.academify2.service;

import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class MyUserDetailsService implements UserDetailsService {


    @Override
    public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {
        return new User("victor", "$2y$05$cRUUpq5Odqw7tLyfGw74xu/cX/9xKT5JGe4fU9kZ2JwQEhsfT3816", new ArrayList<>());
    }
}
