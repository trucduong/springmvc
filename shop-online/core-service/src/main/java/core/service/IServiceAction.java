package core.service;

import java.util.Map;

public interface IServiceAction {
	String getUrl();
	Map<String, Object> getParams();
	Object getData();
}
