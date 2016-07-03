package core.service;

import org.springframework.web.client.RestTemplate;

import core.common.format.JsonFormatter;

public class ServiceProvider {
	private static RestTemplate restTemplate = new RestTemplate();

	public static ServiceResult get(IServiceAction provider) {
		ServiceResult result;
		try {
			// TODO: check something before call service
			result = restTemplate.getForObject(provider.getUrl(), ServiceResult.class, provider.getParams());
		} catch (Exception e) {
			result = ServiceProvider.error(ServiceErrorCode.CONNECTION_ERROR);
		}

		return result;
	}

	public static ServiceResult post(IServiceAction provider) {
		ServiceResult result;
		try {
			// TODO: check something before call service
			result = restTemplate.postForObject(provider.getUrl(), provider.getData(), ServiceResult.class,
					provider.getParams());
		} catch (Exception e) {
			result = ServiceProvider.error(ServiceErrorCode.CONNECTION_ERROR);
		}

		return result;
	}


	public static final String SUCCESS = "success";
	public static final String ERROR = "error";

	public static <T> T getValue(ServiceResult result, Class<T> classOfT) {
		return JsonFormatter.fromJson(result.getValue(), classOfT);
	}

	public static boolean isSuccess(ServiceResult result) {
		return SUCCESS.equals(result.getType());
	}

	public static ServiceResult success(String value) {
		ServiceResult serviceResult = new ServiceResult();
		serviceResult.setType(SUCCESS);
		serviceResult.setValue(value);
		return serviceResult;
	}

	public static ServiceResult success(Object obj) {
		String value = JsonFormatter.toJson(obj);
		return ServiceProvider.success(value);
	}

	public static ServiceResult error(String errorCode) {
		ServiceResult serviceResult = new ServiceResult();
		serviceResult.setType(ERROR);
		serviceResult.setValue(errorCode);
		return serviceResult;
		// return ServiceResultProvider.error(new CommonException(errorCode));
	}
	//
	// public static ServiceResult error(CommonException e) {
	// String errorStr = JsonFormatter.toJson(e);
	// ServiceResult serviceResult = new ServiceResult();
	// serviceResult.setType(ERROR);
	// serviceResult.setValue(errorStr);
	// return serviceResult;
	// }
}
