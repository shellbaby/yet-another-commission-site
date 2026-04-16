import '@adonisjs/core/types/http'

type ParamValue = string | number | bigint | boolean

export type ScannedRoutes = {
  ALL: {
    'client.clients.store': { paramsTuple?: []; params?: {} }
    'client.clients.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'client.clients.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'client.clients.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'client.commissions.index': { paramsTuple?: []; params?: {} }
    'client.commissions.store': { paramsTuple?: []; params?: {} }
    'client.commissions.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'client.commissions.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'admin.clients.index': { paramsTuple?: []; params?: {} }
    'admin.clients.store': { paramsTuple?: []; params?: {} }
    'admin.clients.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'admin.clients.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'admin.clients.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'admin.commissions.index': { paramsTuple?: []; params?: {} }
    'admin.commissions.store': { paramsTuple?: []; params?: {} }
    'admin.commissions.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'admin.commissions.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'admin.commissions.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'auth.emails.verify': { paramsTuple: [ParamValue]; params: {'email': ParamValue} }
  }
  GET: {
    'client.clients.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'client.commissions.index': { paramsTuple?: []; params?: {} }
    'client.commissions.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'admin.clients.index': { paramsTuple?: []; params?: {} }
    'admin.clients.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'admin.commissions.index': { paramsTuple?: []; params?: {} }
    'admin.commissions.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'auth.emails.verify': { paramsTuple: [ParamValue]; params: {'email': ParamValue} }
  }
  HEAD: {
    'client.clients.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'client.commissions.index': { paramsTuple?: []; params?: {} }
    'client.commissions.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'admin.clients.index': { paramsTuple?: []; params?: {} }
    'admin.clients.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'admin.commissions.index': { paramsTuple?: []; params?: {} }
    'admin.commissions.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'auth.emails.verify': { paramsTuple: [ParamValue]; params: {'email': ParamValue} }
  }
  POST: {
    'client.clients.store': { paramsTuple?: []; params?: {} }
    'client.commissions.store': { paramsTuple?: []; params?: {} }
    'admin.clients.store': { paramsTuple?: []; params?: {} }
    'admin.commissions.store': { paramsTuple?: []; params?: {} }
  }
  PUT: {
    'client.clients.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'admin.clients.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'admin.commissions.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  PATCH: {
    'client.clients.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'admin.clients.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'admin.commissions.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  DELETE: {
    'client.clients.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'client.commissions.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'admin.clients.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'admin.commissions.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
}
declare module '@adonisjs/core/types/http' {
  export interface RoutesList extends ScannedRoutes {}
}