package core.common.format;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;

public class DateFormatter implements Formatter<Date> {

	public static final char HYPHEN = '-';
	public static final char SLASH = '/';
	
	
	private static final String ddMMyyyy = "dd/MM/yyyy";

	private SimpleDateFormat formatter;
	private DateFormatter(String pattern, Locale locale) {
		formatter = new SimpleDateFormat(pattern, locale);
	}

	@Override
	public String format(Date source, String... defaultVal) {
		String result = null;
		try {
			result = formatter.format(source);
		} catch (Exception e) {
			if (defaultVal != null && defaultVal.length > 0) {
				result = defaultVal[0];
			}
		}
		return result;
	}

	@Override
	public Date parse(String source, Date... defaultVal) {
		Date result = null;
		try {
			result = formatter.parse(source);
		} catch (Exception e) {
			if (defaultVal != null && defaultVal.length > 0) {
				result = defaultVal[0];
			}
		}
		return result;
	}

	public static DateFormatter ddMMyyyy(Locale locale, char... separators) {
		String pattern = ddMMyyyy;
		if (separators != null && separators.length > 0) {
			pattern = ddMMyyyy.replace(SLASH, separators[0]);
		}
		
		return new DateFormatter(pattern, locale);
	}
	
	//TODO: add more format here
}
