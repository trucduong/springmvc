package service.auth.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import core.dao.entities.BaseEntity;

@Entity
@Table(name = "user_profiles")
public class UserProfile extends BaseEntity {
	private static final long serialVersionUID = -3110764643153799067L;

	@Id
	@Column(name = "login_name", unique = true, columnDefinition = SHORT)
	private String loginName;

	@Column(name = "profile_details", columnDefinition = LONG_1)
	private String details;

	public String getLoginName() {
		return loginName;
	}

	public void setLoginName(String loginName) {
		this.loginName = loginName;
	}

	public String getDetails() {
		return details;
	}

	public void setDetails(String details) {
		this.details = details;
	}

	@Override
	public String getColIdName() {
		return "loginName";
	}

	@Override
	public Object getColIdValue() {
		return getLoginName();
	}
}
