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

import com.freelancer.javitranslate.dao.AccountDao;
import com.freelancer.javitranslate.dao.AccountPermissionDao;
import com.freelancer.javitranslate.dao.PermissionDetailDao;
import com.freelancer.javitranslate.model.entity.Account;
import com.freelancer.javitranslate.model.entity.AccountPermission;
import com.freelancer.javitranslate.model.entity.PermissionDetail;
import com.freelancer.javitranslate.utils.ApplicationConstant;

public class UserDetailsServiceImpl implements UserDetailsService {
	 	
		@Autowired
		private PermissionDetailDao permissionDetailDao;
		@Autowired
		private AccountDao accountDao;
		@Autowired
		private AccountPermissionDao accountPermissionDao;
	 
		@Override
		public UserDetails loadUserByUsername(final String username) 
	               throws UsernameNotFoundException {
	 
			AdminAccount account = accountDao.find("loginName", username);
			AdminAccountPermission accountPermission = accountPermissionDao.find("accountId", account.getId());
			List<AdminPermissionDetail> permissionDetails = permissionDetailDao.getAllDataByColumn("permissionId", accountPermission.getPermissionId());
			List<GrantedAuthority> authorities = buildUserAuthority(permissionDetails);
	 
			return buildUserForAuthentication(account, authorities);
	 
	 
		}
	 
		private User buildUserForAuthentication(AdminAccount account, 
			List<GrantedAuthority> authorities) {
			return new User(account.getLoginName(), 
					account.getPassword(), (account.getStatus() == ApplicationConstant.ACCOUNT_ACTIVE), 
	                        true, true, true, authorities);
		}
	 
		private List<GrantedAuthority> buildUserAuthority(List<AdminPermissionDetail> permissionDetails) {
	 
			Set<GrantedAuthority> setAuths = new HashSet<GrantedAuthority>();
			// Build user's authorities
			for (AdminPermissionDetail permissionDetail : permissionDetails) {
				setAuths.add(new SimpleGrantedAuthority(permissionDetail.getLoginRoleName()));
			}
	 
			List<GrantedAuthority> Result = new ArrayList<GrantedAuthority>(setAuths);
	 
			return Result;
		}
	 
		
	}
