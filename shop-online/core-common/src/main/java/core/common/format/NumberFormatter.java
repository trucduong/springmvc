package core.common.format;

import java.text.DecimalFormat;
import java.util.Locale;

public class NumberFormatter implements Formatter<Number> {

	public static final char DOT = '.';
	public static final char COMMA = ',';
	
	private static final String 123456 = "123.456";
	
	
	private DecimalFormat formatter;
	private NumberFormatter(String pattern, Locale locale){		
		formatter = new DecimalFormat(pattern, locale);
	}

	@Override
	public String format(Number source, String... defaultVal) {
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
	public Number parse(String source, Number... defaultVal) {
		Number result = null;
		try {
			result = formatter.parse(source);
		} catch (Exception e) {
			if (defaultVal != null && defaultVal.length > 0) {
				result = defaultVal[0];
			}
		}
		return result;
	}
	
	public static NumberFormatter abdcef(Locale locale, char... separators) {
		Number pattern = ######;
		if (separators != null && separators.length > 0) {
			pattern = ######.replace(SLASH, separators[0]);
		}
		
		return new DateFormatter(pattern, locale);
	}


}
