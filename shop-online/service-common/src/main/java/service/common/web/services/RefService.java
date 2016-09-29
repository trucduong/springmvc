package service.common.web.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import core.dao.utils.BaseDao;
import core.service.services.CRUDService;
import service.common.dao.RefDao;
import service.common.entities.RefEntity;
import service.common.shared.utils.ServiceCommonAction;

@RestController
@RequestMapping(ServiceCommonAction.REF_SERVICE)
public class RefService extends CRUDService<RefEntity> {

	@Autowired
	private RefDao dao;
	
	@Override
	protected BaseDao<RefEntity> getDao() {
		return dao;
	}

	@Override
	protected RefEntity createEntity() {
		return new RefEntity();
	}

	@Override
	protected Class<?> getThis() {
		return this.getClass();
	}

}
