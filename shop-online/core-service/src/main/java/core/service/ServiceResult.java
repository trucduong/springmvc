package core.service;

public class ServiceResult {
	public static final String SUCCESS = "success";
	public static final String ERROR = "error";
	
	private String type;
	private Object value;
	
	public static ServiceResult success(Object value) {
		ServiceResult serviceResult = new ServiceResult();
		serviceResult.setType(SUCCESS);
		serviceResult.setValue(value);
		return serviceResult;
	}
	
	public static ServiceResult error(Object value) {
		ServiceResult serviceResult = new ServiceResult();
		serviceResult.setType(ERROR);
		serviceResult.setValue(value);
		return serviceResult;
	}
	
	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public Object getValue() {
		return value;
	}

	public void setValue(Object value) {
		this.value = value;
	}
	
	public boolean isSuccess() {
		return type.equals(SUCCESS);
	}
}
