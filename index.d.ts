import { FastifyPlugin, FastifyReply, FastifyInstance, RawServerBase } from 'fastify';

declare module "fastify" {
  interface FastifyReply {
    [propertyName extends string]<T extends { [key: string]: any; }>(page: string, data: T): FastifyReply;
    [propertyName extends string](page: string, data?: object): FastifyReply;
  }
  interface FastifyInstance {
    [propertyName extends string]<T extends { [key: string]: any; }>(page: string, data: T): Promise<void>;
    [propertyName extends string](page: string, data?: object): Promise<void>;
    [propertyName extends string]<T extends { [key: string]: any; }>(page: string, data: T, callback: (err: Error | null, data: string)): FastifyReply;
    [propertyName extends string](page: string, data?: object): FastifyReply;
  }
}

export interface PointOfViewOptions {
  engine: {
    ejs?: any;
    eta?: any;
    nunjucks?: any;
    pug?: any;
    handlebars?: any;
    mustache?: any;
    'art-template'?: any;
    twig?: any;
    liquid?: any;
    dot?: any;
  };
  templates?: string;
  includeViewExtension?: boolean;
  options?: object;
  charset?: string;
  maxCache?: number;
  production?: boolean;
  defaultContext?: object;
  layout?: string;
  root?: string;
  viewExt?: string;
  propertyName?: string;
}

declare const pointOfView: FastifyPlugin<PointOfViewOptions>;
export default pointOfView;
