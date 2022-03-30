## clean-frontend-react

验证整洁架构前端可行性。

## 参考资料

https://github.com/phodal/clean-frontend

https://github.com/bespoyasov/frontend-clean-architecture

https://github.com/falsy/react-with-clean-architecture

https://www.cnblogs.com/yjf512/archive/2012/09/10/2678313.html

[整洁架构之道](https://book.douban.com/subject/30333919/)

## 前言

个人能力有限，如有错误望指正。

我这个实现架构还是有不少的问题:

1. 未使用依赖注入

2. 各个模块依赖抽象

3. 职责划分问题

当你在阅读这篇文章时，我假设你已经看完了 phodal [Clean Frontend Architecture：整洁前端架构](https://github.com/phodal/clean-frontend)

且了解 bob 大叔设计的[整洁架构](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)

## domain

我们先来看下目录结构，目录结构参考[clean-frontend](https://github.com/phodal/clean-frontend)

```js
 ├─src
    ├─code
    ├─domain
    ├─features
    ├─pages
    ├─presentation
    ├─router
    └─stores
```

phodal 文章有讲到，这里我在做赘述。

`router`: 路由

`stores`: 状态管理

那么我们再来看下 `domain`

```js
├─domain
    ├─admin
    │  ├─adapter       // 适配器
    │  ├─model         // 模型
    │  ├─repositories  // 容器
    │  │  └─mapper     // 字段映射
    │  └─usecase       // 用例
```

基本上一致，只是多了一个 adapter(适配器)。因为在 phodal 设计的架构中，我一直很好奇为什么没有 adapter(适配器)。

我认为是 `angular` 的 `service` 承担了`adapter`的职责。

### model

`entity` 实体是我们请求时接口返回给我们的类型。

`model` 这个`model`则是我们`UI`要使用的数据类型,类型与`entity`会有细微出入。

### repositories

我更喜欢叫 **_接口仓库_**,职责就是负责请求`api` 接口

`mapper` 负责将接口请求到的`entity`转换成 `UI` 所需要的 `model` 数据。

### adapter

我们再来看一句话：

这一层的软件结构的目的就是进行数据的转换，将便于用户实例和实体层操作的数据结构变化成为最便于外部结构（比如数据库或者 Web）操作的数据结构。比如 GUI 的 MVC 结构，表现器、视图器、控制器都是属于这个结构的。**_这层很可能是通过控制器将数据结构传给用户实例层，并且返回数据给表现器，视图器。_**

简单来说就是 可以通过`adapter`将数据传递给 UI 层。

tips: `repositories`下的 mapper 也是 `adapter`。

所以我们可以将 `react`的`hook`封装成`adapter`。

其他的我们就可以直接套用 phodal 设计的规则来编写业务代码。

### usecase

负责 `repositories` 调用 and `mapper`映射。

## 各层依赖关系

presentation <- adapter <- usecase <- repositories <- model

## adapter 与 react context 结合

当我用`context`的时候，习惯一股脑地所有方法全部扔 `context`中。

这样会使`context` 职责过多，可以试着`context` 只放 `state`, 一些业务函数呢可以放到`adapter`, `provider`则只需要暴露出状态和`set`方法。

```ts
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState<UserModel>()
  const [activeId, setActiveId] = useState<string>()
  const [userAction, setUserAction] = useState<UserActionDetail>({} as UserActionDetail)

  const value = useMemo(
    () => ({
      user,
      activeId,
      userAction,
      updateUser: setUser,
      updateUserAction: setUserAction,
      updateActiveId: setActiveId
    }),
    [user, userAction, activeId, setUser, setUserAction, setActiveId]
  )

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
```

```ts
export const useGetUserActionListAdapter = () => {
  const { activeId, updateUserAction, updateActiveId } = useUserContext()

  const handleSomeThinkg = userAction => {
    updateUserAction(userAction)
    updateActiveId(0)
  }
}
```

在对应的 `adapter`使用该方法，最终在页面中使用我们自定义的`hook`。

## 结尾

架构只是毛坯房，房子装修的好看不好看，决定这一切的还是"设计团队"、"装修团队"等。不要一上来就是整洁架构，因为整洁架构不是银弹！

[github](https://github.com/martin-yin/clean-frontend-react)
