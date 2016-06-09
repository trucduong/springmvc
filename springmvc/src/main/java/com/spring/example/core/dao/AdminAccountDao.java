package com.spring.example.core.dao;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.spring.example.core.dto.MapDto;
import com.spring.example.core.entity.UserAccount;
import com.spring.example.core.entity.UserPermission;

@Repository
public class AdminAccountDao extends BaseDao<UserAccount>{

	/**
	 * 
	 */
	private static final long serialVersionUID = 6566043049507692581L;
	public List<String> getPermissions(String loginName) {
		// Query
		StringBuffer query = new StringBuffer();
		query.append("select p.permission_name ");
		query.append("from admin_role_permissions as p, admin_account_roles as r ");
		query.append("where p.role_id = p.role_id ");
		query.append("and r.login_name = :loginName ");

		// Selected columns
		String[] columns = {UserPermission.PERMISSION_NAME};

		// Parameters
		Map<String, Object> params = new HashMap<>();
		params.put("loginName", loginName);

		// Execute query
		List<String> permissions = new ArrayList<>();
		List<MapDto> dtos = executeNativeQuery(query.toString(), columns, params);
		for (MapDto dto : dtos) {
			permissions.add(dto.getString(UserPermission.PERMISSION_NAME));
		}
		return permissions;
 	}
}
