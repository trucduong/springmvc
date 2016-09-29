package service.catalogue.shared.utils;

import core.service.utils.CRUDServiceAction;

public class ServiceCatalogueAction extends CRUDServiceAction {
	private static final String SERVER_NAME = "service.catalogue.server.name";
	private static final String SERVER_URL = "service.catalogue.server.url";

	public static final String PRODUCT_SERVICE = "/product";
	public static final String PRODUCT_GROUP_SERVICE = "/product-group";
	
	@Override
	public String getServerName() {
		return SERVER_NAME;
	}

	@Override
	public String getServerUrl() {
		return SERVER_URL;
	}
}
