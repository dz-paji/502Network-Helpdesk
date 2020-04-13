---
title: 客户 API
lang: zh-CN
---

## 说明

在发起请求时，需要传入下列 header:

`Authorization: Bearer ApiKey`, `Content-Type: application/json`, `Accept: Application/vnd.pterodactyl.v1+json`

其中 Authorization 字段的 ApiKey 可以在面板申请到.

## API 详细介绍

### 列出服务器

此 API 地址为 `<domain name>/api/client`. 请求方法为 `GET`.
若请求合法，则会返回此 ApiKey 所有者的服务器信息. 如下为示例输出

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

### 列出特定服务器的信息

此 API 地址为 `<domain name>/api/client/servers/<identifier>`. 请求方法为 `GET`.
使用此方法，可以通过 identifier 查询任意一台服务器的信息。
注: identifier 即为编号.
若请求合法，被查询的服务器的信息会被返回. 属下所示:

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

