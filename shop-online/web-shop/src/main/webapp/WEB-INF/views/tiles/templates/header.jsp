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


<header>
		<div class="tophead">
			<div class=" colorw topheadright">
				<!-- Khi nao login thanh cong thi hien ra
				<ul>
					<li>
						<img src="img/thong bao">
					</li>
					<li>
						<img src="img/inbox">
					</li>
					<li>
						Xin chao Admin,  thay the button Shop Login 
					</li>

				</ul>
				  -->
				<button class="shoplogin">Shop Đăng Nhập</button>
			</div>
			<div class="panel-group topheadleft">
			      <h4 class="panel-title anoneunder language">
			      	<a class="anoneunder" data-toggle="collapse" href="#collapse1">
			      	<span><img class="ico" src="img/vietnamicon.ico"><span>
			        <span class="colorw" style="font-size: 12px;">LANGUAGE</span>
			        </a>
			      </h4>
			    <div id="collapse1" class="country panel-collapse collapse">
			    	  <div>
					      <a class="panel-title" data-toggle="collapse" href="#collapse1">
					      	<img class="ico" src="img/unitedkingdomicon.ico">
					        <span>English</span>
					      </a>
			      	  </div>
				      <div>
					      <a class="panel-title" data-toggle="collapse" href="#collapse1">
					      	<img class="ico" src="img/bruneiicon.ico">
					        <span>Brunei Darussalam</span>
					      </a>
				      </div>
				      <div>
					      <a class="panel-title" data-toggle="collapse" href="#collapse1">
					      	<img class="ico" src="img/cambodiaicon.ico">
					        <span>Cambodia</span>
					      </a>
				      </div>
				      <div>
					      <a class="panel-title" data-toggle="collapse" href="#collapse1">
					      	<img class="ico" src="img/chinaicon.ico">
					        <span>China</span>
					      </a>
				      </div>
				      <div>
					      <a class="panel-title" data-toggle="collapse" href="#collapse1">
					      	<img class="ico" src="img/indonesiaicon.ico">
					        <span>Indonesia</span>
					      </a>
				      </div>
				      <div>
					      <a class="panel-title" data-toggle="collapse" href="#collapse1">
					      	<img class="ico" src="img/laosicon.ico">
					        <span>Lao PDR</span>
					      </a>
				      </div>
				      <div>
					      <a class="panel-title" data-toggle="collapse" href="#collapse1">
					      	<img class="ico" src="img/malaysiaicon.ico">
					        <span>Malaysia</span>
					      </a>
				      </div>
				      <div>
					      <a class="panel-title" data-toggle="collapse" href="#collapse1">
					      	<img class="ico" src="img/myanmaricon.ico">
					        <span>Myanmar</span>
					      </a>
				      </div>
				      <div>
					      <a class="panel-title" data-toggle="collapse" href="#collapse1">
					      	<img class="ico" src="img/philippines.ico">
					        <span>Philippines</span>
					      </a>
				      </div>
				      <div>
					      <a class="panel-title" data-toggle="collapse" href="#collapse1">
					      	<img class="ico" src="img/singaporeicon.ico">
					        <span>Singapore</span>
					      </a>
				      </div>
				      <div>
					      <a class="panel-title" data-toggle="collapse" href="#collapse1">
					      	<img class="ico" src="img/thailandicon.ico">
					        <span>Thailand</span>
					      </a>
				      </div>
				      <div>
					      <a class="panel-title" data-toggle="collapse" href="#collapse1">
					      	<img class="ico" src="img/vietnamicon.ico">
					        <span>Viet Nam</span>
					        <img class="ico accept" src="img/accept.ico">
					      </a>
				      </div>
			    </div>
			</div>	
		</div>

		<div class="mainhead">
			<div class="colorw logo" style="font-size:35px; ">LOGO</div>
			<div class="contenthead">
				<ul>
					<li>
						<div class="bill">
							<a class="cart" href="#">
								<img class="cartimg" src="img/cart.ico" alt="">
								<h5 class="productcart">Giỏ hàng</h5>
								<h6 class="productcart">0 Sản phẩm - 0đ.</h6>
							</a>
						</div>
					</li>
					
					<li>
						<div class="search">
							<a href="#">
								<input class="inputsearch" type="text" name="">
								<img class="imgsearch" src="img/search.ico">
								<div class="btsearch">Search</div>
							</a>
						</div>	
					</li>
				</ul>
			</div>	
			<div class="userlogin ">
				<a href="#">Đăng ký</a>
				<a href="#">Đăng nhập</a>
			</div>	
		</div>


	</header>
	<nav>
		<div class="menu">
			<div class="dropdown">
	          <a class="dropdown-toggle" data-toggle="dropdown" href="#">
				<div class="menuproduct">
					<div class="colorw menubt ">DANH MỤC SẢN PHẨM</div>
					<img class="imgdown" src="img/icondown.ico" alt="">
				</div>
	          </a>
	          <ul class="dropdown-menu menumain pull-left">
	            <li><a href="#">Áo cho nam</a></li>
	            <li><a href="#">Áo cho nữ</a></li>
	            <li><a href="#">Quần cho nam</a></li>
	            <li><a href="#">Quần cho nữ</a></li>
	          </ul>
	        </div>

			<div class="navmenu sidenav">
				<img class="line line1" src="img/line.png">
				<div class="navigation  news">Tin tức</div>
				<img class="line line2" src="img/line.png">
				<div class="navigation aboutus">Giới thiệu</div>
				<img class="line line3" src="img/line.png">
				<div class="navigation payment">Thanh Toán</div>
				<img class="line line4" src="img/line.png">
				<div class="navigation contact">Liên hệ</div>
				<img class="line line5" src="img/line.png">
			</div>
		</div>
		<div class="banner"></div>
	</nav>