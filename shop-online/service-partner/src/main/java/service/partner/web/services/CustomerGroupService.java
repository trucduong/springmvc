package service.partner.web.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import core.dao.utils.BaseDao;
import core.service.services.CRUDService;
import service.partner.dao.CustomerGroupDao;
import service.partner.entities.CustomerGroup;
import service.partner.shared.utils.ServicePartnerAction;

@RestController
@RequestMapping(ServicePartnerAction.CUSTOMER_SERVICE)
public class CustomerGroupService extends CRUDService<CustomerGroup> {

	@Autowired
	private CustomerGroupDao dao;
	
	@Override
	protected BaseDao<CustomerGroup> getDao() {
		return dao;
	}

	@Override
	protected CustomerGroup createEntity() {
		return new CustomerGroup();
	}

	@Override
	protected Class<?> getThis() {
		return this.getClass();
	}
}
