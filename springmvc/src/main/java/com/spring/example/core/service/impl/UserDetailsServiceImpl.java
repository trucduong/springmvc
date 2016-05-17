package com.spring.example.core.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import com.spring.example.core.dao.AdminAccountDao;
import com.spring.example.core.dao.AdminAccountRoleDao;
import com.spring.example.core.entity.AdminAccount;
import com.spring.example.core.entity.AdminAccountRole;

public class UserDetailsServiceImpl implements UserDetailsService {

	@Autowired
	AdminAccountDao accountDao;
	
	@Autowired
	AdminAccountRoleDao accountRoleDao;
	
	
	@Override
	public UserDetails loadUserByUsername(final String username) throws UsernameNotFoundException {

		AdminAccount account = accountDao.find(username);
		if (account == null) {
			throw new UsernameNotFoundException(username);
		}
		
		List<AdminAccountRole> roles = accountRoleDao.getAllDataByColumn(AdminAccountRole.LOGIN_NAME, username);
		List<GrantedAuthority> authorities = buildUserAuthority(roles);

		return buildUserForAuthentication(account, authorities);

	}

	private User buildUserForAuthentication(AdminAccount account, List<GrantedAuthority> authorities) {
//		return new User(account.getLoginName(), account.getPassword(),
//				(account.getStatus() == ApplicationConstant.ACCOUNT_ACTIVE), true, true, true, authorities);
		return null;
	}

	private List<GrantedAuthority> buildUserAuthority(List<AdminAccountRole> roles) {

//		Set<GrantedAuthority> setAuths = new HashSet<GrantedAuthority>();
//		
//		// Build user's authorities
//		for (AdminAccountRole role : roles) {
//			role.get
//			setAuths.add(new SimpleGrantedAuthority(permissionDetail.getLoginRoleName()));
//		}
//
//		List<GrantedAuthority> Result = new ArrayList<GrantedAuthority>(setAuths);
//
//		return Result;
		return null;
	}

}
