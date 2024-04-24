# simple 前后端分离后台管理系统

## RBAC 权限模型

![simple](https://cdn.jsdelivr.net/gh/xihuanxiaorang/img/202404250233053.png)

### 表结构

::: code-group

```sql [sys_user]
-- ----------------------------
-- Table structure for sys_user
-- ----------------------------
DROP TABLE IF EXISTS `sys_user`;
CREATE TABLE `sys_user`  (
  `id` bigint NOT NULL AUTO_INCREMENT COMMENT '用户id',
  `username` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '用户账号',
  `nickname` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '用户昵称',
  `password` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '用户密码',
  `gender` tinyint NOT NULL DEFAULT 0 COMMENT '用户性别（0-未知，1-男，2-女）',
  `avatar` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '用户头像',
  `phone` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '手机号码',
  `email` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '用户邮箱',
  `status` tinyint NOT NULL DEFAULT 1 COMMENT '账号状态（0-禁用, 1-启用）',
  `locked` tinyint NOT NULL DEFAULT 0 COMMENT '是否锁定（0-未锁定，1-已锁定）',
  `create_time` datetime NOT NULL COMMENT '创建时间',
  `update_time` datetime NOT NULL COMMENT '更新时间',
  `remark` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '备注',
  `deleted` tinyint NOT NULL DEFAULT 0 COMMENT '逻辑删除标识（0-未删除，1-已删除）',
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `idx_username`(`username` ASC) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '用户表' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of sys_user
-- ----------------------------
INSERT INTO `sys_user` VALUES (1, 'admin', '管理员', '$2a$10$iWVDgX3Zvkx9Uiq/ugOJg.ZV96vcvNum2PRZo5RV.qqOGNLVBh.L6', 0, 'https://avatars.githubusercontent.com/u/90179059?v=4', NULL, NULL, 1, 0, '2024-04-08 19:20:39', '2024-04-08 19:20:41', NULL, 0);
```

```sql [sys_role]
-- ----------------------------
-- Table structure for sys_role
-- ----------------------------
DROP TABLE IF EXISTS `sys_role`;
CREATE TABLE `sys_role`  (
  `id` bigint NOT NULL AUTO_INCREMENT COMMENT '角色id',
  `name` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '角色名称',
  `code` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '角色权限字符串（如：admin）',
  `sort` int NOT NULL DEFAULT 0 COMMENT '显示顺序',
  `status` tinyint NOT NULL DEFAULT 1 COMMENT '角色状态（0-禁用, 1-启用）',
  `remark` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '备注',
  `create_time` datetime NOT NULL COMMENT '创建时间',
  `update_time` datetime NOT NULL COMMENT '更新时间',
  `deleted` tinyint NOT NULL DEFAULT 0 COMMENT '逻辑删除标识（0-未删除，1-已删除）',
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `idx_code`(`code` ASC) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '角色表' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of sys_role
-- ----------------------------
INSERT INTO `sys_role` VALUES (1, '系统管理员', 'ADMIN', 0, 1, NULL, '2024-04-08 19:34:13', '2024-04-08 19:34:15', 0);
INSERT INTO `sys_role` VALUES (2, '访问游客', 'GUEST', 1, 1, NULL, '2024-04-12 00:41:01', '2024-04-12 00:41:03', 0);
```

```sql [sys_menu]
-- ----------------------------
-- Table structure for sys_menu
-- ----------------------------
DROP TABLE IF EXISTS `sys_menu`;
CREATE TABLE `sys_menu`  (
  `id` bigint NOT NULL AUTO_INCREMENT COMMENT '菜单id',
  `name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '菜单名称',
  `permission` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '权限标识',
  `type` tinyint NOT NULL COMMENT '菜单类型（1-目录，2-菜单，3-按钮，4-外链）',
  `sort` int NOT NULL DEFAULT 0 COMMENT '显示顺序',
  `parent_id` bigint NOT NULL COMMENT '父菜单id',
  `path` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '路由地址（浏览器地址栏路径）',
  `icon` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '菜单图标',
  `component` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '组件路径（vue页面完整路径，省略.vue后缀）',
  `status` tinyint NOT NULL DEFAULT 1 COMMENT '菜单状态（0-禁用, 1-启用）',
  `redirect` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '跳转路径',
  `visible` tinyint NOT NULL DEFAULT 1 COMMENT '是否可见（0-否，1-是）',
  `keep_alive` tinyint NULL DEFAULT NULL COMMENT '【菜单】是否开启页面缓存（0-否，1-是）',
  `always_show` tinyint NULL DEFAULT NULL COMMENT '【目录】只有一个子路由是否始终显示（0-否，1-是）',
  `create_time` datetime NOT NULL COMMENT '创建时间',
  `update_time` datetime NOT NULL COMMENT '更新时间',
  `deleted` tinyint NOT NULL DEFAULT 0 COMMENT '逻辑删除标识（0-未删除，1-已删除）',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 11 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '菜单权限表' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of sys_menu
-- ----------------------------
INSERT INTO `sys_menu` VALUES (1, '系统管理', NULL, 1, 0, 0, '/system', 'system', 'Layout', 1, '/system/user', 1, NULL, 1, '2024-04-08 19:57:51', '2024-04-08 19:57:53', 0);
INSERT INTO `sys_menu` VALUES (2, '用户管理', NULL, 2, 0, 1, 'user', 'user', 'system/user/index', 1, '', 1, 1, NULL, '2024-04-08 20:01:07', '2024-04-08 20:01:09', 0);
INSERT INTO `sys_menu` VALUES (3, '角色管理', NULL, 2, 1, 1, 'role', 'role', 'system/role/index', 1, '', 1, 1, NULL, '2024-04-08 20:02:43', '2024-04-08 20:02:44', 0);
INSERT INTO `sys_menu` VALUES (4, '菜单管理', NULL, 2, 2, 1, 'menu', 'menu', 'system/menu/index', 1, NULL, 1, 1, NULL, '2024-04-08 20:04:10', '2024-04-08 20:04:12', 0);
INSERT INTO `sys_menu` VALUES (5, '用户新增', 'system:user:add', 3, 0, 2, NULL, NULL, NULL, 1, NULL, 1, NULL, NULL, '2024-04-08 20:06:24', '2024-04-08 20:06:27', 0);
INSERT INTO `sys_menu` VALUES (6, '平台文档', NULL, 1, 1, 0, '/doc', 'document', 'Layout', 1, '/doc/internal-doc', 1, NULL, NULL, '2024-04-19 14:16:52', '2024-04-19 14:16:55', 0);
INSERT INTO `sys_menu` VALUES (7, '平台文档(内嵌)', NULL, 2, 0, 6, 'internal-doc', 'document', 'demo/internal-doc', 1, NULL, 1, NULL, NULL, '2024-04-20 17:39:33', '2024-04-20 17:39:36', 0);
INSERT INTO `sys_menu` VALUES (8, '平台文档(外链)', NULL, 4, 1, 6, 'https://docs.xiaorang.fun', 'link', NULL, 1, NULL, 1, NULL, NULL, '2024-04-19 14:21:42', '2024-04-19 14:21:44', 0);
INSERT INTO `sys_menu` VALUES (9, '接口文档', NULL, 1, 2, 0, '/api', 'api', 'Layout', 1, '/api/apifox', 1, NULL, 1, '2024-04-20 16:44:05', '2024-04-20 16:44:09', 0);
INSERT INTO `sys_menu` VALUES (10, 'Apifox', NULL, 2, 0, 9, 'apifox', 'api', 'demo/api/apifox', 1, NULL, 1, NULL, NULL, '2024-04-20 16:50:00', '2024-04-20 16:50:02', 0);
```

```sql [sys_user_role]
-- ----------------------------
-- Table structure for sys_user_role
-- ----------------------------
DROP TABLE IF EXISTS `sys_user_role`;
CREATE TABLE `sys_user_role`  (
  `id` bigint NOT NULL AUTO_INCREMENT COMMENT '自增编号',
  `user_id` bigint NOT NULL COMMENT '用户id',
  `role_id` bigint NOT NULL COMMENT '角色id',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '用户和角色关联表' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of sys_user_role
-- ----------------------------
INSERT INTO `sys_user_role` VALUES (1, 1, 1);
```

```sql [sys_role_menu]
-- ----------------------------
-- Table structure for sys_role_menu
-- ----------------------------
DROP TABLE IF EXISTS `sys_role_menu`;
CREATE TABLE `sys_role_menu`  (
  `id` bigint NOT NULL AUTO_INCREMENT COMMENT '自增编号',
  `role_id` bigint NOT NULL COMMENT '角色id',
  `menu_id` bigint NOT NULL COMMENT '菜单id',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 11 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '角色和菜单关联表' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of sys_role_menu
-- ----------------------------
INSERT INTO `sys_role_menu` VALUES (1, 1, 1);
INSERT INTO `sys_role_menu` VALUES (2, 1, 2);
INSERT INTO `sys_role_menu` VALUES (3, 1, 3);
INSERT INTO `sys_role_menu` VALUES (4, 1, 4);
INSERT INTO `sys_role_menu` VALUES (5, 1, 5);
INSERT INTO `sys_role_menu` VALUES (6, 1, 6);
INSERT INTO `sys_role_menu` VALUES (7, 1, 7);
INSERT INTO `sys_role_menu` VALUES (8, 1, 8);
INSERT INTO `sys_role_menu` VALUES (9, 1, 9);
INSERT INTO `sys_role_menu` VALUES (10, 1, 10);
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
    @Schema(description = "创建时间")
    @TableField(fill = FieldFill.INSERT)
    @JsonInclude(value = JsonInclude.Include.NON_NULL)
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime createTime;

    /**
     * 更新时间
     */
    @Schema(description = "更新时间")
    @TableField(fill = FieldFill.INSERT_UPDATE)
    @JsonInclude(value = JsonInclude.Include.NON_NULL)
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
    private GenderEnum gender;

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
     * 账号状态（0-禁用, 1-启用）
     *
     * @see StatusEnum
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
     * 角色状态（0-禁用, 1-启用）
     *
     * @see StatusEnum
     */
    private Integer status;

    /**
     * 备注
     */
    private String remark;

    /**
     * 逻辑删除标识（0-未删除，1-已删除）
     */
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
     * 菜单类型（1-目录，2-菜单，3-按钮，4-外链）
     */
    private MenuTypeEnum type;

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
     * 菜单状态（0-禁用, 1-启用）
     *
     * @see StatusEnum
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