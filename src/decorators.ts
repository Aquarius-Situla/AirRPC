import 'reflect-metadata';

export function Injectable(): ClassDecorator {
  return (target) => {
    Reflect.defineMetadata('injectable', true, target);
  };
}

export function Controller(path: string): ClassDecorator {
  return (target) => {
    Reflect.defineMetadata('path', path, target);
  };
}

export function Get(path: string): MethodDecorator {
  return (target, propertyKey, descriptor) => {
    Reflect.defineMetadata('method', 'GET', target, propertyKey);
    Reflect.defineMetadata('path', path, target, propertyKey);
  };
}

export function AppleTax(options?: { tier: string }): MethodDecorator {
  return (target, propertyKey, descriptor) => {
    Reflect.defineMetadata('appleTax', options || { tier: 'standard' }, target, propertyKey);
  };
}

export function Courage(): MethodDecorator {
  return (target, propertyKey, descriptor) => {
    Reflect.defineMetadata('courage', true, target, propertyKey);
  };
}

export function Since(date: string): MethodDecorator {
  return (target, propertyKey, descriptor) => {
    Reflect.defineMetadata('since', date, target, propertyKey);
  };
}
