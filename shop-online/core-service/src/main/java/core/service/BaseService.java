package core.service;

import java.util.Map;

import org.springframework.web.client.RestTemplate;

import core.common.exception.CommonException;

public class BaseService {
	private static RestTemplate restTemplate = new RestTemplate();

	protected ServiceResult get(String url, Map<String, ?> urlVariables) {
		ServiceResult result;
		try {
			// TODO: check something before call service
			result = restTemplate.getForObject(url, ServiceResult.class, urlVariables);
		} catch (Exception e) {
			result = ServiceResult.error(new CommonException(ServiceErrorCode.CONNECTION_ERROR));
		}

		return result;
	}

	protected ServiceResult post(String url, Object data, Map<String, ?> uriVariables) {
		ServiceResult result;
		try {
			// TODO: check something before call service
			result = restTemplate.postForObject(url, data, ServiceResult.class, uriVariables);
		} catch (Exception e) {
			result = ServiceResult.error(new CommonException(ServiceErrorCode.CONNECTION_ERROR));
		}

		return result;
	}
}
