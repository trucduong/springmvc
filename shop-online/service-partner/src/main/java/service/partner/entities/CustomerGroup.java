package service.partner.entities;

import javax.persistence.Column;
import javax.persistence.Id;

import core.dao.entities.BaseEntity;

public class CustomerGroup extends BaseEntity {
	private static final long serialVersionUID = 2818490755722584371L;

	@Id
	@Column(name = "id", columnDefinition = INT)
	private Integer id;

	@Column(name = "name", columnDefinition = SHORT_5)
	private String name;

	@Column(name = "note", columnDefinition = MEDIUM_5)
	private String note;

	@Override
	public Object getColIdValue() {
		return id;
	}

	@Override
	public String getColIdName() {
		return "id";
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getNote() {
		return note;
	}

	public void setNote(String note) {
		this.note = note;
	}
}
