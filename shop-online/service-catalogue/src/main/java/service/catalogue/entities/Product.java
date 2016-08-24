package service.catalogue.entities;

import java.math.BigDecimal;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import core.dao.entities.BaseEntity;

@Entity
@Table(name="products")
public class Product extends BaseEntity {

	private static final long serialVersionUID = -1261723538239931214L;

	@Column(name = "code", columnDefinition = SHORT_2)
	private String code;

	@Column(name = "name", columnDefinition = SHORT_5)
	private String name;

	@Column(name = "image", columnDefinition = BLOB)
	private Object image;

	@Column(name = "unit", columnDefinition = MEDIUM_1)
	private String unit;

	@Column(name = "group", columnDefinition = INT)
	private Integer group;

	@Column(name = "input_price", columnDefinition = DECIMAL)
	private String inputPrice;

	@Column(name = "retail_price", columnDefinition = DECIMAL)
	private String retailPrice;

	@Column(name = "wholesale_price", columnDefinition = DECIMAL)
	private String wholesalePrice;

	@Column(name = "saleof_per", columnDefinition = INT)
	private Integer saleofPer;

	@Column(name = "saleof_price", columnDefinition = DECIMAL)
	private BigDecimal saleofPrice;

	@Column(name = "warning_number", columnDefinition = INT)
	private Integer warningNumber;

	@Column(name = "status", columnDefinition = MEDIUM_1)
	private String status;

	@Column(name = "note", columnDefinition = MEDIUM_5)
	private String note;
//
//	@Override
//	public Object getColIdValue() {
//		return code;
//	}
//
//	@Override
//	public String getColIdName() {
//		return "code";
//	}
//	
//	@Override
//	public Object convertToId(String value) {
//		return value;
//	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Object getImage() {
		return image;
	}

	public void setImage(Object image) {
		this.image = image;
	}

	public String getUnit() {
		return unit;
	}

	public void setUnit(String unit) {
		this.unit = unit;
	}

	public Integer getGroup() {
		return group;
	}

	public void setGroup(Integer group) {
		this.group = group;
	}

	public String getInputPrice() {
		return inputPrice;
	}

	public void setInputPrice(String inputPrice) {
		this.inputPrice = inputPrice;
	}

	public String getRetailPrice() {
		return retailPrice;
	}

	public void setRetailPrice(String retailPrice) {
		this.retailPrice = retailPrice;
	}

	public String getWholesalePrice() {
		return wholesalePrice;
	}

	public void setWholesalePrice(String wholesalePrice) {
		this.wholesalePrice = wholesalePrice;
	}

	public Integer getSaleofPer() {
		return saleofPer;
	}

	public void setSaleofPer(Integer saleofPer) {
		this.saleofPer = saleofPer;
	}

	public BigDecimal getSaleofPrice() {
		return saleofPrice;
	}

	public void setSaleofPrice(BigDecimal saleofPrice) {
		this.saleofPrice = saleofPrice;
	}

	public Integer getWarningNumber() {
		return warningNumber;
	}

	public void setWarningNumber(Integer warningNumber) {
		this.warningNumber = warningNumber;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getNote() {
		return note;
	}

	public void setNote(String note) {
		this.note = note;
	}
}
