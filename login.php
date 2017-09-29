<?php

// 获取请求中传递的用户名数据
	$username = $_REQUEST["username"];
	/* 在数据库中去查询是否有这条数据的用户信息 */
	// 连接数据库服务器
	mysql_connect("localhost:3306", "root", "");
	// 选择数据库
	mysql_select_db("1706");
	// 创建查询SQL语句
	$sql = "SELECT count(*) FROM users WHERE username='$username'";
	// 执行SQL语句，返回查询结果集
	$result = mysql_query($sql);
	// 根据查询结果集判断
	if ($row = mysql_fetch_array($result)) {
		if ($row[0] == 1) 
			echo '{"status":0, "message":"exist"}';
		else
			echo '{"status":1, "message":"not exist"}';
	} else {
		echo '{"status":2, "message":"error"}';
	}
	// 关闭数据库连接
	mysql_close();
	?>