# AirPowerUniappStarter

### 写在前面

你当前正在查看基于 ```AirPower``` 基础库的 宿主项目的代码, 我们使用的是 ```Vite``` 构建, 包管理使用的是 ```yarn```, 请先安装前叙的相关工具后继续接下来的操作 ：）

### 一、初始化仓库

> 建议windows开发者使用 ```git bash``` 不要使用windows自带的拉垮的 ```cmd``` ```powershell``` 等。否则接下来的脚本可能出现问题，你只能通过自己手动去操作。

```shell
git clone https://github.com/HammCn/AirPowerUniappStarter.git &&
cd AirPowerUniappStarter/src && 
git clone -b uniapp https://github.com/HammCn/AirPower4T.git airpower && cd ../ &&
yarn
```

### 二、修改环境变量

在 ```main.ts``` 中按需修改配置

```typescript
const rootUrl = 'https://service.hamm.cn/'

AirConfig.apiUrl = `${rootUrl}api/`
AirConfig.staticUrl = `${rootUrl}upload/`
```

### 三、启动和打包


使用 HBuilder 开发者工具导入这个项目，然后编译运行即可。


### 四、其他命令

```shell
#使用标准commit模板
yarn c   

#更新项目和AirPower
yarn u   

#查看Git格式化日志
yarn l           
```

### And now, enjoy your coding!
