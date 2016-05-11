package com.spring.example.core.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * System permissions
 *
 */
@Entity
@Table(name = "admin_permissions")
public class AdminPermission extends BaseEntity {

	private static final long serialVersionUID = 2243399028554666270L;

	/**
	 * mapping to spring security role
	 */
	@Id
	@Column(name = "name", length = 100)
	private String name;

	@Column(name = "display_name", columnDefinition = "NVARCHAR(100)")
	private String displayName;
	
	@Column( name = "description" , columnDefinition = "TEXT")
	private String description;
	
	@Column(name = "status")
	private Integer status;

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

	public Integer getStatus() {
		return status;
	}

	public void setStatus(Integer status) {
		this.status = status;
	}
}
