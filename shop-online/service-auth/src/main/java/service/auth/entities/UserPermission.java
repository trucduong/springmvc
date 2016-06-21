package service.auth.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Table;

import core.dao.entities.BaseEntity;
import core.service.auth.PermissionStatus;

/**
 * System permissions
 *
 */
@Entity
@Table(name = "user_permissions")
public class UserPermission extends BaseEntity {

	private static final long serialVersionUID = 2243399028554666270L;
	
	public static final String PERMISSION_NAME = "permission_name";

	/**
	 * mapping to spring security role
	 */
	@Column(name = "permission_name", length = MEDIUM)
	private String name;

	@Column(name = "display_name", columnDefinition = "NVARCHAR(100)")
	private String displayName;
	
	@Column( name = "description" , columnDefinition = "NVARCHAR(500)")
	private String description;
	
	@Enumerated(EnumType.STRING)
	@Column(name = "status", length = SHORT)
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
