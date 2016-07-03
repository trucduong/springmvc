package service.auth.web.controllers;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import core.service.ServiceProvider;
import core.service.ServiceResult;
import service.auth.dao.UserAccountDao;
import service.auth.entities.UserAccount;
import service.auth.shared.ServiceAuthAction;
import service.auth.shared.ServiceAuthErrorCode;
import service.auth.shared.dto.AccountDto;

@RestController
public class AccountController {

	@Autowired
	private UserAccountDao accountDao;
	
	Logger LOGGER = LoggerFactory.getLogger(AccountController.class); 

	@RequestMapping(ServiceAuthAction.GET_ACCOUNT_BY_NAME)
	public ServiceResult getAccountByName(
			@PathVariable(value = ServiceAuthAction.GET_ACCOUNT_BY_NAME__NAME) String name) {
		LOGGER.debug("getAccountByName: " + name);
		UserAccount entity = accountDao.find(name);

		if (entity == null) {
			LOGGER.debug("ERROR: NOT FOUND");
			return ServiceProvider.error(ServiceAuthErrorCode.ACCOUNT_NOT_FOUND);
		}

		AccountDto dto = new AccountDto();
		dto.setLoginName(entity.getLoginName());
		dto.setAccountType(entity.getAccountType());
		dto.setPassword(entity.getPassword());
		dto.setPermissions(entity.getPermissions());
		dto.setShopId(entity.getShopId());
		dto.setStatus(entity.getStatus());

		LOGGER.debug("SUCCESS");
		return ServiceProvider.success(dto);
	}
}
