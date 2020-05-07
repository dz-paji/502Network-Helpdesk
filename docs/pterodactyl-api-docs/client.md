---
title: 客户 API
lang: zh-CN
---

## 说明

在发起请求时，需要传入下列 header:

`Authorization: Bearer ApiKey`, `Content-Type: application/json`, `Accept: Application/vnd.pterodactyl.v1+json`

其中 Authorization 字段的 ApiKey 可以在面板申请到.

## API 详细介绍

### 列出实例

此 API 地址为 `<domain name>/api/client`. 请求方法为 `GET`.
若请求合法，则会返回此 ApiKey 所有者的实例信息. 如下为示例输出

``` json
{
    "object": "list",
    "data": [
        {
            "object": "server",
            "attributes": {
                "server_owner": true,
                "identifier": "b1ea3e80",
                "uuid": "b1ea3e80-84d6-47be-bdbe-292babaa140b",
                "name": "test",
                "description": "",
                "limits": {
                    "memory": 2000,
                    "swap": 2000,
                    "disk": 3000,
                    "io": 500,
                    "cpu": 200
                },
                "feature_limits": {
                    "databases": 0,
                    "allocations": 0
                }
            }
        }
    ],
    "meta": {
        "pagination": {
            "total": 1,
            "count": 1,
            "per_page": 15,
            "current_page": 1,
            "total_pages": 1,
            "links": []
        }
    }
}
```

### 列出特定实例的信息

此 API 地址为 `<domain name>/api/client/servers/<identifier>`. 请求方法为 `GET`.
使用此方法，可以通过 identifier 查询任意一台实例的信息。
若请求合法，被查询的实例的信息会被返回. 属下所示:

``` json
{
    "object": "server",
    "attributes": {
        "server_owner": true,
        "identifier": "b1ea3e80",
        "uuid": "b1ea3e80-84d6-47be-bdbe-292babaa140b",
        "name": "test",
        "description": "",
        "limits": {
            "memory": 2000,
            "swap": 512,
            "disk": 3000,
            "io": 500,
            "cpu": 200
        },
        "feature_limits": {
            "databases": 0,
            "allocations": 0
        }
    }
}
```

### 查询实例资源占用

此 API 地址为 `<domain name>/api/client/servers/<identifier>/utilization`. 请求方法为 `GET`.
使用此方法，可以通过 identifier 查询对应实例的资源占用。
若请求合法，被查询的实例的资源占用信息会被返回。
当实例处于关机状态时，返回如下:

``` json
{
    "object": "stats",
    "attributes": {
        "state": "off",
        "memory": {
            "current": 0,
            "limit": 2000
        },
        "cpu": {
            "current": 0,
            "cores": [],
            "limit": 200
        },
        "disk": {
            "current": 0,
            "limit": 3000
        }
    }
}
```

当实例处于开启状态时，返回如下:

``` json
{
    "object": "stats",
    "attributes": {
        "state": "starting",
        "memory": {
            "current": 712,
            "limit": 2000
        },
        "cpu": {
            "current": 201.23,
            "cores": [
                0.422,
                0.112,
                0.975,
                52.617,
                0.385,
                0.205,
                0.508,
                0.079,
                2.407,
                47.999,
                0.136,
                38.449,
                0.29,
                0.614,
                0.711,
                1.737,
                0.476,
                0.843,
                0.422,
                39.385,
                0.861,
                0.329,
                0.401,
                0.44,
                0,
                6.881,
                0.013,
                0.006,
                0,
                0,
                0.02,
                0.07,
                0,
                0,
                0,
                0,
                0,
                0,
                0.052,
                0,
                0,
                0,
                2.045,
                0.104,
                0,
                0,
                0,
                1.234
            ],
            "limit": 200
        },
        "disk": {
            "current": 141,
            "limit": 3000
        }
    }
}
```

### 向实例发送电源指令

此 API 地址为 `<domain name>/api/client/servers/<identifier>/power`. 请求方法为 `POST`.
使用此方法，可以通过 identifier 控制服务器的开关机。若发送成功，一个空的回复会被返回。

#### 需要的参数

| 参数   | 描述               |
| ------ | ------------------ |
| signal | 将要传达的电源指令 |

#### 指令列表

| 指令      | 描述     |
| --------- | -------- |
| `start`   | 开机     |
| `stop`    | 关机     |
| `restart` | 重启     |
| `kill`    | 杀死进程 |

### 向实例发送指令

使用此 API, 需要实例处于在线状态。

此 API 地址为 `<domain name>/api/client/servers/<identifier>/command`. 请求方法为 `POST`.
使用此方法，可以通过 identifier 向服务器发送指令。若发送成功，一个空的回复会被返回。

#### 需要的参数

| 参数   | 描述               |
| ------ | ------------------ |
| command | 将要传达的指令 |

