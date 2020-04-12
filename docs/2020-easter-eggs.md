---
title: 2020-easter-eggs
---
# 502Network 2020 复活节彩蛋

## 7 折优惠码

访问 `https://502.network/robots.txt` ，得到如下结果

![robots.txt](https://i2.wmcdn.net/2020/04/12/IXaZFVrW.png)

优惠码为 `D283GDG2QU_token`.

## 5 元账户余额

根据提示词 `mtr`, 发现财务面板知识库上的文章

![mtr](https://i2.wmcdn.net/2020/04/12/45uCHlkc.png)

查看文章，得到 WinMTR 的下载地址 `https://[2a02:180:6:1::b25]/winmtr.exe`.
尝试访问该地址，发现无法建立连接。
使用 `mtr` 查看此地址的路由，发现 rDNS 记录 `3824de03-bafc-48b7-a347-1a01ed32460d.promo.502.network`.

![rDNS](https://i2.wmcdn.net/2020/04/12/2A3R31SK.png)

访问 `3824de03-bafc-48b7-a347-1a01ed32460d.promo.502.network`, 发现无法建立连接。
根据 WinMTR 下载地址，尝试使用 HTTPS 协议访问，发现提示证书非法。选择信任证书后继续，得到 403 错误页面。
尝试请求 `https://3824de03-bafc-48b7-a347-1a01ed32460d.promo.502.network/winmtr.exe`, 得到 404 结果。
看似山穷水尽，查看网站的 SSL，发现为自签证书。

![issuer](https://i2.wmcdn.net/2020/04/12/1KjT0dTf.png)

查看 issuer, 发现 OrganizationalUnit 字段包含神秘 10 字符字符串 `X5AZF2JKW7`

![issuer](https://i2.wmcdn.net/2020/04/12/9jEivGgr.png)

充值码为 `X5AZF2JKW7`
