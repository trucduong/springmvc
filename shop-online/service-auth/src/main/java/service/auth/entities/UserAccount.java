package service.auth.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Id;
import javax.persistence.Table;

import core.dao.entities.BaseEntity;
import service.auth.shared.AccountStatus;
import service.auth.shared.AccountType;

@Entity
@Table(name = "user_accounts")
public class UserAccount extends BaseEntity {

	private static final long serialVersionUID = -61352121879032316L;

	@Id
	@Column(name = "login_name", unique = true, columnDefinition = SHORT)
	private String loginName;

	@Column(name = "password", columnDefinition = MEDIUM)
	private String password;

	@Enumerated(EnumType.STRING)
	@Column(name = "status", columnDefinition = SHORT)
	private AccountStatus status;

	@Enumerated(EnumType.STRING)
	@Column(name = "account_type", columnDefinition = SHORT)
	private AccountType accountType;

	@Column(name = "shop_id", columnDefinition = SHORT)
	private String shopId;

	// permission id array (Json format)
	@Column(name = "permissions", columnDefinition = LONG)
	private String permissions;

	public UserAccount() {
	}

	public String getLoginName() {
		return loginName;
	}

	public void setLoginName(String loginName) {
		this.loginName = loginName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public AccountStatus getStatus() {
		return status;
	}

	public void setStatus(AccountStatus status) {
		this.status = status;
	}

	public AccountType getAccountType() {
		return accountType;
	}

	public void setAccountType(AccountType accountType) {
		this.accountType = accountType;
	}

	public String getPermissions() {
		return permissions;
	}

	public void setPermissions(String permissions) {
		this.permissions = permissions;
	}

	public String getShopId() {
		return shopId;
	}

	public void setShopId(String shopId) {
		this.shopId = shopId;
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
