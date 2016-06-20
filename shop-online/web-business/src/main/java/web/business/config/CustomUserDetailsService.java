package web.business.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;
import web.business.entities.User;
import web.business.services.UserService;
import web.business.web.config.SecurityUser;

@Component
public class CustomUserDetailsService implements UserDetailsService {
	@Autowired
	private UserService userService;

	@Override
	public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {
		User user = userService.findUserByEmail(userName);
		if (user == null) {
			throw new UsernameNotFoundException("UserName " + userName + " not found");
		}
		return new SecurityUser(user);
	}
}