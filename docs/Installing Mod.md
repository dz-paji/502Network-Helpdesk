---
title: 安装 Mod
---
# 安装 Mod

​	LittleSkin 基于 Blessing Skin ，提供上传、存储、检索、分享玩家皮肤的功能。想要在 Minecraft 游戏中显示之前在皮肤站中选择的皮肤的话，还需要 **自定义皮肤 Mod** 的帮助。LittleSkin 支持 [UniSkinMod](http://www.mcbbs.net/forum.php?mod=viewthread&tid=358932) 和 [CustomSkinLoader](http://www.mcbbs.net/thread-269807-1-1.html) 各自的新版和旧版。下面是 **CustomSkinLoader** 和 **UniSkinMod** 的配置介绍。

## 安装

​	首先为客户端安装Forge。

​	然后下载适用于对应 Minecraft 版本的 Mod 文件，将其放入客户端的 mods 目录内。

## CustomSkinLoader

### 14.7+

​	[自 CustomSkinLoader 14.7 起 xfl03 钦点 LittleSkin 加入默认加载列表豪华午餐](https://github.com/xfl03/MCCustomSkinLoader/commit/a49fea706d6ee39afa8341c6bed255c64e03d097)，默认加载顺序仅次于 Mojang API（正版皮肤）。如果你使用的是 14.7 及以上版本的 CustomSkinLoader，则无需再进行任何配置。

### 13.1-14.6a

​	对于这些版本，加载 LittleSkin 皮肤需要手动修改配置文件。

​	配置文件位于 `.minecraft/CustomSkinLoader/CustomSkinLoader.json`，你需要在 loadlist 数组最顶端加入你的皮肤站配置。

​	修改后的 `CustomSkinLoader.json` 文件（示例）：

```json
{
    "enable": true,
    "loadlist": [
        {
            "name": "LittleSkin",
            "type": "CustomSkinAPI",
            "root": "https://littleskin.cn/csl/"
        },
        {
            "name": "Mojang",
            "type": "MojangAPI"
        }
    ]
}
```

**Tip: CustomSkinLoader ExtraList (14.4 以上版本)**

​	ExtraList 是 CustomSkinLoader（14.4 以上版本）提供的快捷添加皮肤站功能。详见 [皮肤 Mod](https://littleskin.cn/user/config) 页面。

### 13.1-

​	对于这些版本，加载 LittleSkin 皮肤需要手动修改配置文件。

​	配置文件位于

 `.minecraft/CustomSkinLoader/skinurls.txt` 以及  `.minecraft/CustomSkinLoader/capeurls.txt` 

​	将 `skinurls.txt` 修改为（示例）：

```
https://littleskin.cn/skin/*.png
http://skins.minecraft.net/MinecraftSkins/*.png
```

​	将 `capeurls.txt` 修改为（示例）：

```
https://littleskin.cn/cape/*.png
```

## UniSkinMod

### 1.4+

​	对于这些版本，加载 LittleSkin 皮肤需要手动修改配置文件。

​	配置文件位于 `.minecraft/config/UniSkinMod/UniSkinMod.json`。

​	修改后的  `UniSkinMod.json` 文件（示例）：

```json
{
    "rootURIs": [
        "https://littleskin.cn/usm",
        "http://www.skinme.cc/uniskin"
    ],
    "legacySkinURIs": [],
    "legacyCapeURIs": []
}
```

### 1.2&1.3

​	对于这些版本，加载 LittleSkin 皮肤需要手动修改配置文件。

​	配置文件位于 `.minecraft/config/UniSkinMod.cfg` 

​	修改后的  `UniSkinMod.cfg` 文件（示例）：

```
# LittleSkin
Root: https://littleskin.cn/usm
```

#### UniSkinMod 1.2 版以下

### 1.2-

​	对于这些版本，加载 LittleSkin 皮肤需要手动修改配置文件。

​	配置文件位于 `.minecraft/config/UniSkinMod.cfg` 

​	修改后的  `UniSkinMod.cfg` 文件（示例）：

```
# LittleSkin
Skin: https://littleskin.cn/skin/%s.png
Cape: https://littleskin.cn/cape/%s.png
# Mojang
Skin: http://skins.minecraft.net/MinecraftSkins/%s.png
Cape: http://skins.minecraft.net/MinecraftCloaks/%s.png
```

**参考页面**

​	[blessing-skin-server.wiki ------ 如何配置皮肤Mod](https://github.com/printempw/blessing-skin-server/wiki/%E5%A6%82%E4%BD%95%E9%85%8D%E7%BD%AE%E7%9A%AE%E8%82%A4-Mod)

