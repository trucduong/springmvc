<%@page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ page session="false"%>

<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="description" content="">
	<meta name="author" content="">
	<title><tiles:insertAttribute name="title" ignore="true"></tiles:insertAttribute></title>

	<%-- Urls --%>
	<spring:url value="/" var="root_path" />
	<spring:url value="/resources/lib" var="lib_resource" />
	<spring:url value="/resources/web" var="web_resource" />

	<%-- Libs --%>
	<link href="${lib_resource}/css/font-awesome.min.css" rel="stylesheet">
	<link href="${lib_resource}/css/bootstrap.min.css" rel="stylesheet">
	<link href="${lib_resource}/css/metisMenu.min.css" rel="stylesheet">
	<link href="${lib_resource}/css/timeline.css" rel="stylesheet">

	<%-- Custom --%>
	<link href="${web_resource}/style.css" rel="stylesheet">

	<!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
	<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
	<!--[if lt IE 9]>
	<script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
	<script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
	<![endif]-->
	
	
	<footer>
		
	</footer>