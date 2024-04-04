# simple 前后端分离后台管理系统

## RBAC 权限模型

![simple](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img/202404032308055.png)

::: code-group

```sql [sys_user]
CREATE TABLE IF NOT EXISTS `sys_user`
(
    `id`          bigint           NOT NULL AUTO_INCREMENT COMMENT '用户id',
    `username`    varchar(64)      NOT NULL COMMENT '用户账号',
    `nickname`    varchar(64)      NOT NULL COMMENT '用户昵称',
    `password`    varchar(100)     NOT NULL COMMENT '用户密码',
    `gender`      tinyint          NOT NULL DEFAULT 0 COMMENT '用户性别（0-未知，1-男，2-女）',
    `avatar`      varchar(255)     NULL COMMENT '用户头像',
    `phone`       varchar(20)      NULL COMMENT '手机号码',
    `email`       varchar(128)     NULL COMMENT '用户邮箱',
    `status`      tinyint ZEROFILL NOT NULL DEFAULT 0 COMMENT '账号状态((0-正常, 1-禁用))',
    `locked`      tinyint          NOT NULL DEFAULT 0 COMMENT '是否锁定（0-未锁定，1-已锁定）',
    # `creator` varchar(64) NULL COMMENT '创建者',
    `create_time` datetime         NOT NULL COMMENT '创建时间',
    # `updater` varchar(64) NULL COMMENT '更新者',
    `update_time` datetime         NOT NULL COMMENT '更新时间',
    `remark`      varchar(500)     NULL COMMENT '备注',
    `deleted`     tinyint          NOT NULL DEFAULT 0 COMMENT '逻辑删除标识（0-未删除，1-已删除）',
    PRIMARY KEY (`id`),
    UNIQUE INDEX `idx_username` (`username` ASC) USING BTREE
) ENGINE = InnoDB
  CHARACTER SET = utf8mb4
  COLLATE = utf8mb4_general_ci COMMENT = '用户表';
```

```sql [sys_role]
CREATE TABLE IF NOT EXISTS `sys_role`
(
    `id`          bigint       NOT NULL AUTO_INCREMENT COMMENT '角色id',
    `name`        varchar(30)  NOT NULL COMMENT '角色名称',
    `code`        varchar(100) NOT NULL COMMENT '角色权限字符串（如：admin）',
    `sort`        int          NOT NULL DEFAULT 0 COMMENT '显示顺序',
    `status`      tinyint      NOT NULL DEFAULT 0 COMMENT '角色状态（0-正常，1-停用）',
    `remark`      varchar(500) NULL COMMENT '备注',
    # `creator` varchar(64) NULL COMMENT '创建者',
    `create_time` datetime     NOT NULL COMMENT '创建时间',
    # `updater` varchar(64) NULL COMMENT '更新者',
    `update_time` datetime     NOT NULL COMMENT '更新时间',
    `deleted`     tinyint      NOT NULL DEFAULT 0 COMMENT '逻辑删除标识（0-未删除，1-已删除）',
    PRIMARY KEY (`id`)
) ENGINE = InnoDB
  CHARACTER SET = utf8mb4
  COLLATE = utf8mb4_general_ci COMMENT = '角色表';
```

```sql [sys_menu]
CREATE TABLE IF NOT EXISTS `sys_menu`
(
    `id`             bigint       NOT NULL AUTO_INCREMENT COMMENT '菜单id',
    `name`           varchar(50)  NOT NULL COMMENT '菜单名称',
    `permission`     varchar(100) NOT NULL COMMENT '权限标识',
    `type`           tinyint      NOT NULL COMMENT '菜单类型（1-菜单，2-目录，3-外链，4-按钮）',
    `sort`           int          NOT NULL DEFAULT 0 COMMENT '显示顺序',
    `parent_id`      bigint       NOT NULL DEFAULT 0 COMMENT '父菜单id',
    `path`           varchar(200) NULL COMMENT '路由地址（浏览器地址栏路径）',
    `icon`           varchar(100) NULL COMMENT '菜单图标',
    `component`      varchar(255) NULL COMMENT '组件路径（vue页面完整路径，省略.vue后缀）',
    `component_name` varchar(255) NULL COMMENT '组件名',
    `status`         tinyint      NOT NULL DEFAULT 0 COMMENT '菜单状态（0-正常，1-停用）',
    `redirect`       varchar(255) NULL COMMENT '跳转路径',
    `visible`        tinyint      NOT NULL DEFAULT 1 COMMENT '是否可见（0-否，1-是）',
    `keep_alive`     tinyint      NOT NULL DEFAULT 1 COMMENT '【菜单】是否开启页面缓存（0-否，1-是）',
    `always_show`    tinyint      NOT NULL DEFAULT 1 COMMENT '【目录】只有一个子路由是否始终显示（0-否，1-是）',
    # `creator` varchar(64) NULL COMMENT '创建者',
    `create_time`    datetime     NOT NULL COMMENT '创建时间',
    # `updater` varchar(64) NULL COMMENT '更新者',
    `update_time`    datetime     NOT NULL COMMENT '更新时间',
    `deleted`        tinyint      NOT NULL DEFAULT 0 COMMENT '逻辑删除标识（0-未删除，1-已删除）',
    PRIMARY KEY (`id`)
) ENGINE = InnoDB
  CHARACTER SET = utf8mb4
  COLLATE = utf8mb4_general_ci COMMENT = '菜单权限表';
```

```sql [sys_user_role]
CREATE TABLE IF NOT EXISTS `sys_user_role`
(
    `id`      bigint NOT NULL AUTO_INCREMENT COMMENT '自增编号',
    `user_id` bigint NOT NULL COMMENT '用户id',
    `role_id` bigint NOT NULL COMMENT '角色id',
    PRIMARY KEY (`id`)
) ENGINE = InnoDB
  CHARACTER SET = utf8mb4
  COLLATE = utf8mb4_general_ci COMMENT = '用户和角色关联表';
```

```sql [sys_role_menu]
CREATE TABLE IF NOT EXISTS `sys_role_menu`
(
    `id`      bigint NOT NULL AUTO_INCREMENT COMMENT '自增编号',
    `role_id` bigint NOT NULL COMMENT '角色id',
    `menu_id` bigint NOT NULL COMMENT '菜单id',
    PRIMARY KEY (`id`)
) ENGINE = InnoDB
  CHARACTER SET = utf8mb4
  COLLATE = utf8mb4_general_ci COMMENT = '角色和菜单关联表';
```

:::

### 实体类

::: code-group

```java [BaseEntity]
@Data
public class BaseEntity implements Serializable {
    @Serial
    @TableField(exist = false)
    private static final long serialVersionUID = 1L;

    /**
     * 创建时间
     */
    @TableField(fill = FieldFill.INSERT)
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime createTime;
    /**
     * 更新时间
     */
    @TableField(fill = FieldFill.INSERT_UPDATE)
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime updateTime;
}
```

```java [SysUser]
@EqualsAndHashCode(callSuper = true)
@Data
@Accessors(chain = true)
@NoArgsConstructor
@AllArgsConstructor
@TableName(value = "sys_user")
public class SysUser extends BaseEntity {
    /**
     * 用户id
     */
    @TableId(type = IdType.AUTO)
    private Long id;
    /**
     * 用户账号
     */
    private String username;
    /**
     * 用户昵称
     */
    private String nickname;
    /**
     * 用户密码
     */
    private String password;
    /**
     * 用户性别（0-未知，1-男，2-女）
     */
    private Integer gender;
    /**
     * 用户头像
     */
    private String avatar;
    /**
     * 手机号码
     */
    private String phone;
    /**
     * 用户邮箱
     */
    private String email;
    /**
     * 账号状态((0-正常, 1-禁用))
     */
    private Integer status;
    /**
     * 是否锁定（0-未锁定，1-已锁定）
     */
    private Integer locked;
    /**
     * 备注
     */
    private String remark;
    /**
     * 逻辑删除标识（0-未删除，1-已删除）
     */
    @TableLogic
    private Integer deleted;
}
```

```java [SysRole]
@EqualsAndHashCode(callSuper = true)
@Data
@Accessors(chain = true)
@NoArgsConstructor
@AllArgsConstructor
@TableName(value = "sys_role")
public class SysRole extends BaseEntity {
    /**
     * 角色id
     */
    @TableId(type = IdType.AUTO)
    private Long id;
    /**
     * 角色名称
     */
    private String name;
    /**
     * 角色权限字符串（如：admin）
     */
    private String code;
    /**
     * 显示顺序
     */
    private Integer sort;
    /**
     * 角色状态（0-正常，1-停用）
     */
    private Integer status;
    /**
     * 备注
     */
    private String remark;
    /**
     * 逻辑删除标识（0-未删除，1-已删除）
     */
    @TableLogic
    private Integer deleted;
}
```

```java [SysMenu]
@EqualsAndHashCode(callSuper = true)
@Data
@Accessors(chain = true)
@NoArgsConstructor
@AllArgsConstructor
@TableName(value = "sys_menu")
public class SysMenu extends BaseEntity {
    /**
     * 菜单id
     */
    @TableId(type = IdType.AUTO)
    private Long id;
    /**
     * 菜单名称
     */
    private String name;
    /**
     * 权限标识
     */
    private String permission;
    /**
     * 菜单类型（1-菜单，2-目录，3-外链，4-按钮）
     */
    private Integer type;
    /**
     * 显示顺序
     */
    private Integer sort;
    /**
     * 父菜单id
     */
    private Long parentId;
    /**
     * 路由地址（浏览器地址栏路径）
     */
    private String path;
    /**
     * 菜单图标
     */
    private String icon;
    /**
     * 组件路径（vue页面完整路径，省略.vue后缀）
     */
    private String component;
    /**
     * 组件名
     */
    private String componentName;
    /**
     * 菜单状态（0-正常，1-停用）
     */
    private Integer status;
    /**
     * 跳转路径
     */
    private String redirect;
    /**
     * 是否可见（0-否，1-是）
     */
    private Integer visible;
    /**
     * 【菜单】是否开启页面缓存（0-否，1-是）
     */
    private Integer keepAlive;
    /**
     * 【目录】只有一个子路由是否始终显示（0-否，1-是）
     */
    private Integer alwaysShow;
    /**
     * 逻辑删除标识（0-未删除，1-已删除）
     */
    @TableLogic
    private Integer deleted;
}
```

:::

### Mapper

::: code-group

```java [SysUserMapper]
public interface SysUserMapper extends BaseMapper<SysUser> {
}
```

```java [SysUserMapper.xml]
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE mapper
    PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
    "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="fun.xiaorang.simple.admin.mapper.SysUserMapper">
</mapper>
```

```java [SysRoleMapper]
public interface SysRoleMapper extends BaseMapper<SysRole> {
}
```

```java [SysRoleMapper.xml]
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE mapper
    PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
    "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="fun.xiaorang.simple.admin.mapper.SysRoleMapper">
</mapper>
```

```java [SysMenuMapper]
public interface SysMenuMapper extends BaseMapper<SysMenu> {
}
```

```java [SysMenuMapper.xml]
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE mapper
    PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
    "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="fun.xiaorang.simple.admin.mapper.SysMenuMapper">
</mapper>
```

:::

### Service

::: code-group

```java [SysUserService]
public interface SysUserService extends IService<SysUser> {
}
```

```java [SysUserServiceImpl]
@RequiredArgsConstructor
@Service
public class SysUserServiceImpl extends ServiceImpl<SysUserMapper, SysUser> implements SysUserService {
}
```

```java [SysRoleService]
public interface SysRoleService extends IService<SysRole> {
}
```

```java [SysRoleServiceImpl]
@RequiredArgsConstructor
@Service
public class SysRoleServiceImpl extends ServiceImpl<SysRoleMapper, SysRole> implements SysRoleService {
}
```

```java [SysMenuService]
public interface SysMenuService extends IService<SysMenu> {
}
```

```java [SysMenuServiceImpl]
@RequiredArgsConstructor
@Service
public class SysMenuServiceImpl extends ServiceImpl<SysMenuMapper, SysMenu> implements SysMenuService {
}
```

:::