package service.catalogue.web.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import core.dao.utils.BaseDao;
import core.service.services.CRUDService;
import service.catalogue.dao.ProductDao;
import service.catalogue.entities.Product;
import service.catalogue.shared.utils.ServiceCatalogueAction;

@RestController
@RequestMapping(ServiceCatalogueAction.PRODUCT_SERVICE)
public class ProductService extends CRUDService<Product> {

	@Autowired
	private ProductDao dao;
	
	@Override
	protected BaseDao<Product> getDao() {
		return dao;
	}

	@Override
	protected Product createEntity() {
		return new Product();
	}

	@Override
	protected Class<?> getThis() {
		return this.getClass();
	}
}
