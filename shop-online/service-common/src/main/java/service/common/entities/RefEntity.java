package service.common.entities;

import javax.persistence.Column;

import core.dao.entities.BaseEntity;

public class RefEntity extends BaseEntity {
	private static final long serialVersionUID = 1L;
	
	@Column(name = "ref_type", columnDefinition = SHORT_1)
	private String refType;
	
	@Column(name = "short_value", columnDefinition = SHORT_1)
	private String shortValue;
	
	@Column(name = "translate_key", columnDefinition = SHORT_5)
	private String translateKey;

	@Column(name = "order_weight", columnDefinition = INT)
	private int orderWeight;

	public String getRefType() {
		return refType;
	}

	public void setRefType(String refType) {
		this.refType = refType;
	}

	public String getShortValue() {
		return shortValue;
	}

	public void setShortValue(String shortValue) {
		this.shortValue = shortValue;
	}

	public String getTranslateKey() {
		return translateKey;
	}

	public void setTranslateKey(String translateKey) {
		this.translateKey = translateKey;
	}

	public int getOrderWeight() {
		return orderWeight;
	}

	public void setOrderWeight(int orderWeight) {
		this.orderWeight = orderWeight;
	}
}
