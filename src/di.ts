import 'reflect-metadata';

export const Container = new Map<any, any>();

// 极度“优雅”的依赖注入容器
export function resolve<T>(target: any): T {
  const providers = Reflect.getMetadata('design:paramtypes', target) || [];
  const injections = providers.map((provider: any) => resolve(provider));
  
  if (!Container.has(target)) {
    Container.set(target, new target(...injections));
  }
  return Container.get(target);
}
