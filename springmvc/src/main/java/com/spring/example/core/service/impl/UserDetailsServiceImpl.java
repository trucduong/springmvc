package com.spring.example.core.service.impl;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import com.spring.example.core.dao.AdminAccountDao;
import com.spring.example.core.entity.AdminAccount;
import com.spring.example.core.util.AccountStatus;

public class UserDetailsServiceImpl implements UserDetailsService {

	@Autowired
	AdminAccountDao accountDao;

	@Override
	public UserDetails loadUserByUsername(final String username) throws UsernameNotFoundException {

		AdminAccount account = accountDao.find(username);
		if (account == null) {
			throw new UsernameNotFoundException(username);
		}
		
		List<String> permissions = accountDao.getPermissions(username);
		List<GrantedAuthority> authorities = buildUserAuthority(permissions);

		return buildUserForAuthentication(account, authorities);
	}

	private User buildUserForAuthentication(AdminAccount account, List<GrantedAuthority> authorities) {
		return new User(account.getLoginName(), account.getPassword(),
				AccountStatus.ACTIVE.equals(account.getStatus()), true, true, true, authorities);
	}

	private List<GrantedAuthority> buildUserAuthority(List<String> permissions) {

		Set<GrantedAuthority> setAuths = new HashSet<GrantedAuthority>();
		
		// Build user's authorities
		for (String permisison : permissions) {
			setAuths.add(new SimpleGrantedAuthority(permisison));
		}

		List<GrantedAuthority> Result = new ArrayList<GrantedAuthority>(setAuths);

		return Result;
	}
}
