
# EggJs操作Redis

## 安装egg-redis

` npm i egg-redis --save`



## 配置插件

`plugin`

```js
module.exports = {
  redis: {
    enable: true,
    package: 'egg-redis',
  },
};
```



## 添加redis配置

```js
  config.redis = {
    client: {
      port: cConfig.redis.port, // Redis port
      host: cConfig.redis.path, // Redis host
      password: cConfig.redis.password, // Redis password
      db: 0,
    },
  };
```



## 使用

```js
this.app.redis.set('kj', 'is a cool boy!');
this.app.redis.set('kj', 'ia a cool boy', 'EX', 36000 * 24); // 设置有效时间
this.app.redis.get('kj'); // 获取
this.app.redis.flushall(); // 清空redis
```

