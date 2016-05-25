package com.spring.example.core.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Table;

import com.spring.example.core.util.PermissionStatus;

/**
 * System permissions
 *
 */
@Entity
@Table(name = "admin_permissions")
public class AdminPermission extends BaseEntity {

	private static final long serialVersionUID = 2243399028554666270L;
	
	public static final String PERMISSION_NAME = "permission_name";

	/**
	 * mapping to spring security role
	 */
	@Column(name = "permission_name", length = 100)
	private String name;

	@Column(name = "display_name", columnDefinition = "NVARCHAR(100)")
	private String displayName;
	
	@Column( name = "description" , columnDefinition = "TEXT")
	private String description;
	
	@Enumerated(EnumType.STRING)
	@Column(name = "status", length = 50)
	private PermissionStatus status;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDisplayName() {
		return displayName;
	}

	public void setDisplayName(String displayName) {
		this.displayName = displayName;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public PermissionStatus getStatus() {
		return status;
	}

	public void setStatus(PermissionStatus status) {
		this.status = status;
	}
}
