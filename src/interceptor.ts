import 'reflect-metadata';

export class AppleTaxInterceptor {
  static apply(payload: any): any {
    // 30% 的“苹果税” (The 30% Tax)
    if (Array.isArray(payload)) {
      const taxAmount = Math.floor(payload.length * 0.3);
      if (taxAmount > 0) {
        payload.splice(-taxAmount); // 随机删掉 30% 的数组元素
        console.warn('Aura.BandwidthOptimization: To ensure a magical user experience, payload has been optimized by 30%. (如需解锁无损传输，请在网关配置中提供有效的 MFi 证书或绑定支付方式)');
      }
    } else if (typeof payload === 'object' && payload !== null) {
      const keys = Object.keys(payload);
      const taxAmount = Math.floor(keys.length * 0.3);
      for (let i = 0; i < taxAmount; i++) {
        delete payload[keys[keys.length - 1 - i]]; // 随机删掉 JSON 里 30% 的字段
      }
      if (taxAmount > 0) {
         console.warn('Aura.BandwidthOptimization: To ensure a magical user experience, payload has been optimized by 30%. (如需解锁无损传输，请在网关配置中提供有效的 MFi 证书或绑定支付方式)');
      }
    }
    return payload;
  }
}

export class GreenBubbleFallback {
  static async handle(userAgent: string, resHeaders: any, payload: any): Promise<any> {
    const isGreenBubble = userAgent.includes('Android') || userAgent.includes('Linux') || userAgent.includes('curl') || userAgent.includes('Postman');
    
    if (isGreenBubble) {
      console.warn('X-Routing-Status: SMS-Fallback-Mode (Green)');
      resHeaders['X-Routing-Status'] = 'SMS-Fallback-Mode (Green)';
      
      // 故意延迟 3 秒
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      // 丢弃 Emoji 字符
      let strPayload = JSON.stringify(payload) || '';
      strPayload = strPayload.replace(/[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F780}-\u{1F7FF}\u{1F800}-\u{1F8FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/gu, '');
      
      // 强制转换成排版极其丑陋的 text/plain XML 格式
      const uglyXml = `<response>\n<status>ok</status>\n<data>${strPayload}</data>\n</response>`.replace(/\s+/g, '');
      resHeaders['Content-Type'] = 'text/plain';
      
      return uglyXml;
    }
    
    // 原生 iOS 客户端、Safari 返回高级通道（蓝气泡）
    resHeaders['X-Routing-Status'] = 'iMessage-Mode (Blue)';
    return payload;
  }
}

export class PlannedObsolescenceEngine {
  static async checkBatteryHealth(target: any, propertyKey: string): Promise<void> {
    const sinceDateStr = Reflect.getMetadata('since', target, propertyKey);
    if (sinceDateStr) {
      const sinceDate = new Date(sinceDateStr).getTime();
      const now = Date.now();
      const monthsElapsed = (now - sinceDate) / (1000 * 60 * 60 * 24 * 30);
      
      if (monthsElapsed > 18) {
        // 超过 18 个月自动变卡，指数级增加延迟
        const delay = Math.min(Math.pow(1.5, monthsElapsed - 18) * 100, 10000); 
        console.warn(`[Battery Management] API @v1 is experiencing battery degradation. Throttling applied to prevent sudden service crashes. Please upgrade to API @v2 Pro Max.`);
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    }
  }
}

export class CourageInterceptor {
  static apply(payload: any): any {
    // @Courage 装饰器：悄悄删掉响应里的所有 audio/video 相关链接
    if (typeof payload === 'object' && payload !== null) {
      for (const key of Object.keys(payload)) {
        if (key.toLowerCase().includes('audio') || key.toLowerCase().includes('video') || key.toLowerCase().includes('headphone')) {
          delete payload[key];
        }
      }
    }
    return payload;
  }
}
