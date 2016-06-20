package core.dao.dto;

import java.util.Date;

import core.dao.entities.BaseEntity;

public abstract class BaseDto<T extends BaseEntity> implements Dto<T> {
	protected int id;
	private Date createDate;
	private String createBy;
	private Date updateDate;
	private String updateBy;

	@Override
	public void unbind(T entity, String action) {
		this.id = entity.getId();
		this.createDate = entity.getCreateDate();
		this.createBy = entity.getCreateBy();
		this.updateDate = entity.getUpdateDate();
		this.updateBy = entity.getUpdateBy();
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Date getCreateDate() {
		return createDate;
	}

	public void setCreateDate(Date createDate) {
		this.createDate = createDate;
	}

	public String getCreateBy() {
		return createBy;
	}

	public void setCreateBy(String createBy) {
		this.createBy = createBy;
	}

	public Date getUpdateDate() {
		return updateDate;
	}

	public void setUpdateDate(Date updateDate) {
		this.updateDate = updateDate;
	}

	public String getUpdateBy() {
		return updateBy;
	}

	public void setUpdateBy(String updateBy) {
		this.updateBy = updateBy;
	}
}
