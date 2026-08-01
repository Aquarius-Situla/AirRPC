# AirRPC.
### Pro 级微服务。不可思议的强大。*

<sub>* AirRPC 是一项专为“愚人节 (April Fools' Day)”设计的技术概念艺术品。它包含大量被称为“现实扭曲力场 (Reality Distortion Field)”的非标准逻辑。绝对禁止用于任何真实的生产环境，否则你可能会面临极其严重的“生态税”和系统崩溃风险。</sub>

![Coverage](https://img.shields.io/badge/Coverage-0%25-red.svg)
![Production](https://img.shields.io/badge/Production-Absolutely_Not-critical.svg)
![Courage](https://img.shields.io/badge/Courage-100%25-blue.svg)
![Ecosystem](https://img.shields.io/badge/Ecosystem-Walled_Garden-lightgrey.svg)
![License](https://img.shields.io/badge/License-APSL--2.0-black.svg)

认识全新的微服务网格生态。由内而外，彻底重构。 
我们移除了所有你不需要的冗余配置，只保留了最纯粹的通信本质。 这是有史以来最智能的路由引擎。它不仅懂得如何传递数据，更懂得如何在合适的时机，以最环保的方式对你的 Payload 进行智能优化 (30% 流量削减)。

**无线，无缝，无懈可击。**
采用业界领先的 APSL-2.0 协议。致敬每一位疯狂的改变者。

## 核心系统要求 (System Requirements)
为了获得最极致的 AirRPC 体验，请确保你的运行环境满足以下条件：
* Node.js v18.0 或更高版本
* TypeScript 4.5 或更高版本
* **充足的幽默感 (Sense of Humor >= 1.0)**
* **不惧怕被领导开除的勇气 (Requires Courage™)**
* *注意：如果强行在公司核心业务线部署，我们不提供任何降级保障或法律援助。*

## 核心特性

- **Aura 协议**: 抛弃繁琐的 gRPC，让服务间调用如同魔法般自然。
- **环保与优化**: 强大的 Payload 优化，默认节省 30% 传输负担 (Apple Tax Interceptor)。
- **生态隔离**: 原生 iOS / Safari 客户端尊享蓝色无损极速通道。如果是 Android 或 cURL，自动降级为绿色短信模式并强制延迟。
- **电池健康管理 (Planned Obsolescence)**: 老旧 API (超过 18 个月) 自动降频，保护系统免于崩溃。

## 代码示例

为了确保你知晓这是个恶搞项目，启动时必须携带 `iKnowThisIsAnAprilFoolsJokeAndWillNotUseInProduction: true` 配置，否则将引发 `[Fatal] You are holding it wrong.` 崩溃。

```typescript
import { Controller, Get, AppleTax, Courage, Since } from '@air-rpc/core';
import { AirRPCFactory } from '@air-rpc/core';

@Controller('/users')
export class UserController {

  // @AppleTax 装饰器看似是一个安全特性，其实是抽成 30% 数据的元凶
  @Get('/list')
  @AppleTax({ tier: 'enterprise' }) 
  async getUsers() {
    return [/*...大量数据...*/];
  }

  // @Courage 装饰器号称“移除历史包袱”，其实是悄悄删掉响应里的所有 audio/video 相关链接
  @Get('/media')
  @Courage()
  @Since('2024-01-01') // 过了 18 个月自动变卡
  async getMediaFiles() {
    return { audioUrl: '...', videoUrl: '...' };
  }
}

// 启动网关
async function bootstrap() {
  const app = await AirRPCFactory.create(UserController, {
    enableAppleTax: true,
    // 必须强制要求传入下面这行配置才能启动：
    iKnowThisIsAnAprilFoolsJokeAndWillNotUseInProduction: true 
  });
  console.log("AirRPC is running magically ✨");
}

bootstrap();
```
