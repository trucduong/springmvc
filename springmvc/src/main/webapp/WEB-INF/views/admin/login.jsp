<%@page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@taglib prefix="spring" uri="http://www.springframework.org/tags"%> 
<!DOCTYPE html>
<html>
<head>
<title>Login</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
</head>
<body>
	<form name="loginForm" action="<c:url value='/admin/login/j_spring_security_check' />" method='POST'>
		<input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}"/>
		<h1><spring:message code="admin.login.title"/></h1>
		<div>
			<input type="text" class="form-control" name="username"
				placeholder="<spring:message code="admin.login.login_name"/>" required />
		</div>
		<div>
			<input type="password" class="form-control" name="password"
				placeholder="<spring:message code="admin.login.password"/>" required />
		</div>
		<div>
			<input type="submit" value="<spring:message code="admin.login.login"/>" />
		</div>
	</form>
</body>
</html>
