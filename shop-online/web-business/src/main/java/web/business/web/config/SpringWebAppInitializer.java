package web.business.web.config;

import javax.servlet.Filter;

import org.springframework.orm.jpa.support.OpenEntityManagerInViewFilter;
import org.springframework.web.filter.DelegatingFilterProxy;
import org.springframework.web.servlet.support.AbstractAnnotationConfigDispatcherServletInitializer;

import web.business.config.AppConfig;

public class SpringWebAppInitializer extends AbstractAnnotationConfigDispatcherServletInitializer {
	@Override
	protected Class<?>[] getRootConfigClasses() {
		return new Class<?>[] { AppConfig.class };
		// As we have SecurityConfig.java in same package as AppConfig.java and
		// enabled ComponentScan to scan "com.sivalabs.springapp.config" we
		// don't need to explicitely configure it.
		// otherwise we should add SecurityConfig.class to
		// getRootConfigClasses()
		// return new Class<?>[] { AppConfig.class, SecurityConfig.class};
	}

	@Override
	protected Class<?>[] getServletConfigClasses() {
		return new Class<?>[] { WebMvcConfig.class };
	}

	@Override
	protected String[] getServletMappings() {
		return new String[] { "/" };
	}

	@Override
	protected Filter[] getServletFilters() {
		return new Filter[] { new DelegatingFilterProxy("springSecurityFilterChain"),
				new OpenEntityManagerInViewFilter() };
	}
}