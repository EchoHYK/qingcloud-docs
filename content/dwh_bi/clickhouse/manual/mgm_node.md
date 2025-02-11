---
title: "管理集群节点"
description: 
draft: false
weight: 4
---


根据需要增加集群节点，需要注意的是增加节点的过程不会对原有数据迁移，这是为了尽快的完成增加节点操作，让计算资源更快的被集群应用。

- 若需对已有数据进行重新迁移，可以进入数据库执行 `SYSTEM RESHARDING` ，即可对集群的所有节点进行数据重分布。
  
- 若需对节点进行删除则自动进行集群的重分布，无需执行 `SYSTEM RESHARDING`。

本小节主要介绍如何增加和删除集群节点。

## 增加节点

1. 登录 QingCloud 管理控制台。
2. 选择**产品与服务** > **数据仓库与 BI** > **ClickHouse**，进入 ClickHouse 集群列表页。
3. 点击集群 ID，进入集群详情页面。
4. 点击**新增节点**，配置节点信息。
5. 点击**提交**，即可新增加集群节点。

  ![添加节点](../../_images/add_nodes.png)

> **注解**：
> 
> 由于 `SYSTEM RESHARDING` 的执行会造成大量的数据迁移工作，可能会对您的集群造成影响，默认情况下我们为其增加了 40MB/S 的迁移上限，但这并不代表不会对您的集群产生影响，如果需要进行该操作请选择在业务低峰时进行。

## 删除节点

暂不支持删除集群节点。
