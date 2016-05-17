package com.spring.example.core.dao;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.spring.example.core.dto.MapDto;
import com.spring.example.core.entity.AdminAccountRole;
import com.spring.example.core.entity.AdminPermission;

@Repository
public class AdminAccountRoleDao extends BaseDao<AdminAccountRole>{

	/**
	 * 
	 */
	private static final long serialVersionUID = -2122153663790710770L;

	public List<String> getPermissions(String loginName) {
		StringBuffer query = new StringBuffer();
		
		String[] columns = {AdminPermission.PERMISSION_NAME};
		
		Map<String, Object> params = new HashMap<>();
		
		List<String> permissions = new ArrayList<>();
		List<MapDto> dtos = executeNativeQuery(query.toString(), columns, params);
		for (MapDto dto : dtos) {
			permissions.add(dto.getString(AdminPermission.PERMISSION_NAME));
		}
		return permissions;
 	}

}
