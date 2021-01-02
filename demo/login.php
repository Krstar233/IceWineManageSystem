<?php 
	header('Content-type:text/html; charset=utf-8');
	// 处理用户登录信息
	# 接收用户的登录信息
	$username = trim($_POST['user']);
	$password = trim($_POST['password']);
	// 判断提交的登录信息
	if (($username == '') || ($password == '')) {
		// 若为空,视为未填写,提示错误,并3秒后返回登录界面
		header('refresh:3; url=login.html');
		echo "用户名或密码不能为空,系统将在3秒后跳转到登录界面,请重新填写登录信息!";
		exit;
	} elseif (($username != 'root') || ($password != 'root')) {
		# 用户名或密码错误,同空的处理方式
		header('refresh:3; url=login-page.html');
		echo "用户名或密码错误,系统将在3秒后跳转到登录界面,请重新填写登录信息!";
		exit;
	} elseif (($username = 'root') && ($password = 'root')) {
		// 处理完附加项后跳转到登录成功的首页
		header('location:ice-wine-stock-qurey.html');
	}
?>
