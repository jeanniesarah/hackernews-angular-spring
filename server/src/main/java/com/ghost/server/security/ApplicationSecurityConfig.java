package com.ghost.server.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import static com.ghost.server.security.ApplicationUserRole.*;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class ApplicationSecurityConfig extends WebSecurityConfigurerAdapter {

    private final PasswordEncoder passwordEncoder;

    @Autowired
    public ApplicationSecurityConfig(PasswordEncoder passwordEncoder) {
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .csrf().disable() //TODO: revisit in section 5
                .authorizeRequests()
                .antMatchers("/", "index", "/css/*", "/js/*").permitAll()
                .antMatchers("/api/**").hasRole(MEMBER.name())
//                .antMatchers(HttpMethod.DELETE,"/management/api/**").hasAuthority(MEMBER_WRITE.getPermission()) //1:36
//                .antMatchers(HttpMethod.POST, "/management/api/**").hasAuthority(MEMBER_WRITE.getPermission())
//                .antMatchers(HttpMethod.PUT, "/management/api/**").hasAuthority(MEMBER_WRITE.getPermission())
//                .antMatchers(HttpMethod.GET,"/management/api/**").hasAnyRole(ADMIN.name(), SUPERADMIN.name())
                .anyRequest()
                .authenticated()
                .and()
                .httpBasic();
    }

    @Override
    @Bean
    protected UserDetailsService userDetailsService() {
        UserDetails memberUser = User.builder()
                .username("member")
                .password(passwordEncoder.encode("password"))
//                .roles(MEMBER.name()) //ROLE_MEMBER
                .authorities(MEMBER.getGrantedAuthorities()) //1:44
                .build();

        UserDetails jeannieUser = User.builder()
                .username("jeannie")
                .password(passwordEncoder.encode("password"))
//                .roles(SUPERADMIN.name()) //ROLE_SUPERADMIN
                .authorities(SUPERADMIN.getGrantedAuthorities())
                .build();

        UserDetails adminUser = User.builder()
                .username("admin")
                .password(passwordEncoder.encode("password"))
//                .roles(ADMIN.name()) //ROLE_ADMIN
                .authorities(ADMIN.getGrantedAuthorities())
                .build();

        return new InMemoryUserDetailsManager(
                memberUser,
                jeannieUser,
                adminUser
        );

    }
}
