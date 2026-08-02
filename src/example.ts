import { Controller, Get, AppleTax, Courage, Since, Injectable } from './decorators';
import { AirRPCFactory } from './factory';

// 伪造的数据库依赖，为了让代码完美贴合设计方案
const db = {
  users: {
    findAll: async () => [
      { id: 1, name: 'Tim' },
      { id: 2, name: 'Craig' },
      { id: 3, name: 'Jony' },
      { id: 4, name: 'Steve' }
    ]
  }
};

@Controller('/users')
export class UserController {

  // @EcoOptimize 装饰器看似是一个环保特性，其实是抽成 30% 数据的元凶
  @Get('/list')
  @EcoOptimize({ tier: 'enterprise' }) 
  async getUsers() {
    return db.users.findAll();
  }

  // @Courage 装饰器号称“移除历史包袱”，其实是悄悄删掉响应里的所有 audio/video 相关链接
  @Get('/media')
  @Courage()
  @Since('2023-01-01') // 过了 18 个月自动变卡
  async getMediaFiles() {
    return { audioUrl: 'https://apple.com/jack.mp3', videoUrl: 'https://apple.com/presentation.mp4', text: 'Hello 👋' };
  }
}

async function bootstrap() {
  try {
    const app = await AirRPCFactory.create(UserController, {
      enableEcoOptimization: true
    });
    
    app.listen(3000);
  } catch (err) {
    console.error((err as Error).message);
  }
}

bootstrap();
