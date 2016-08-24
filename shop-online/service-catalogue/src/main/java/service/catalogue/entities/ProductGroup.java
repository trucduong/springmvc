package service.catalogue.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import core.dao.entities.BaseEntity;

@Entity
@Table(name="product_groups")
public class ProductGroup extends BaseEntity {
	private static final long serialVersionUID = 225993716844123067L;

//	@Column(name = "id", columnDefinition = INT)
//	private Integer id;

	@Column(name = "name", columnDefinition = SHORT_5)
	private String name;

	@Column(name = "code", columnDefinition = SHORT_5)
	private String code;

	@Column(name = "status", columnDefinition = MEDIUM_1)
	private String status;
//
//	@Override
//	public Object getColIdValue() {
//		return id;
//	}
//
//	@Override
//	public String getColIdName() {
//		return "id";
//	}
//	
//	@Override
//	public Object convertToId(String value) {
//		return Integer.valueOf(value);
//	}

//	public Integer getId() {
//		return id;
//	}
//
//	public void setId(Integer id) {
//		this.id = id;
//	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}
}
