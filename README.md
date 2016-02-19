# grunt 学习
  
1、安装 node.js
	
	 安装nodejs非常简单下一步下一步下一步、的安装方式，这里不再赘述。
	 去 https://nodejs.org/ 上，点击页面中那个绿色“install”按钮即可。

2、安装 grunt-cli
	
	打开控制台：输入命令： npm install -g grunt-cli (windows下)
	验证grunt-cli 是否安装成功 输入命令 grunt

3、简易案例

    1）搭建目录结构
		
		demo文件夹
		src文件夹
		test文件夹
		Gruntfile.js
		package.json

    2）安装 grunt

		输入命令： npm install grunt --save-dev

    3）配置 package.json
		
		{
			"name"		: "demo",
			"version"	: "1.0.0",
			"devDependencies"	: {
				
			}
		}

    4）配置 gruntfile 文件
