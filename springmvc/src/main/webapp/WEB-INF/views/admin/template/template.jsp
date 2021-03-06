<%@page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %> 
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@taglib prefix="spring" uri="http://www.springframework.org/tags"%> 
<%@ page session="false" %>
<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="description" content="">
	<meta name="author" content="">
	<title><tiles:insertAttribute name="title" ignore="true"></tiles:insertAttribute></title>

	<%-- Urls --%>
	<spring:url value="/admin" var="root_path" />
	<spring:url value="/resources/share" var="share_resource" />
	<spring:url value="/resources/admin" var="root_resource" />

	<%-- Libs --%>
	<link href="${share_resource}/css/font-awesome.min.css" rel="stylesheet">
	<link href="${share_resource}/css/bootstrap.min.css" rel="stylesheet">
	<link href="${share_resource}/css/metisMenu.min.css" rel="stylesheet">
	<link href="${share_resource}/css/timeline.css" rel="stylesheet">

	<%-- Custom --%>
	<link href="${root_resource}/style.css" rel="stylesheet">

	<!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
	<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
	<!--[if lt IE 9]>
	<script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
	<script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
	<![endif]-->
</head>
<body>
	<div id="wrapper">
		<!-- Header -->
		<tiles:insertAttribute name="header"></tiles:insertAttribute>
		<!-- Content -->
		<tiles:insertAttribute name="content"></tiles:insertAttribute>
	</div>
	<!-- /#wrapper -->

	<%-- Libs --%>
	<script src="${share_resource}/js/jquery.min.js"></script>
	<script src="${share_resource}/js/bootstrap.min.js"></script>
	<script src="${share_resource}/js/metisMenu.min.js"></script>

	<%-- Custom --%>
	<script src="${root_resource}/script.js"></script>
</body>
</html>
