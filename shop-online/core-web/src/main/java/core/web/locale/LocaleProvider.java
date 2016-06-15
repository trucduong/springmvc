package core.web.locale;

import java.util.Locale;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.util.StringUtils;
import org.springframework.web.servlet.LocaleResolver;
import org.springframework.web.servlet.support.RequestContextUtils;

import core.web.cache.WebContext;

public class LocaleProvider {
	public static void setLocale(String locate) {
		HttpServletRequest request = WebContext.getRequest();
		HttpServletResponse response = WebContext.getResponse();
		LocaleResolver localeResolver = RequestContextUtils.getLocaleResolver(request);
		localeResolver.setLocale(request, response, StringUtils.parseLocaleString(locate));
	}

	public static Locale getLocale(HttpServletRequest request) {
		return LocaleContextHolder.getLocale();
	}
}
