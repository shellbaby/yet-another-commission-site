import '@adonisjs/core/types/http'

type ParamValue = string | number | bigint | boolean

export type ScannedRoutes = {
  ALL: {
    'clients.store': { paramsTuple?: []; params?: {} }
    'client.clients.show': { paramsTuple?: []; params?: {} }
    'client.clients.update': { paramsTuple?: []; params?: {} }
    'client.clients.destroy': { paramsTuple?: []; params?: {} }
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
    'auth.signup.status': { paramsTuple?: []; params?: {} }
    'auth.session.store': { paramsTuple?: []; params?: {} }
    'auth.session.destroy': { paramsTuple?: []; params?: {} }
  }
  GET: {
    'client.clients.show': { paramsTuple?: []; params?: {} }
    'admin.clients.index': { paramsTuple?: []; params?: {} }
    'admin.clients.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'admin.commissions.index': { paramsTuple?: []; params?: {} }
    'admin.commissions.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'auth.emails.verify': { paramsTuple: [ParamValue]; params: {'email': ParamValue} }
    'auth.signup.status': { paramsTuple?: []; params?: {} }
    'auth.session.destroy': { paramsTuple?: []; params?: {} }
  }
  HEAD: {
    'client.clients.show': { paramsTuple?: []; params?: {} }
    'admin.clients.index': { paramsTuple?: []; params?: {} }
    'admin.clients.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'admin.commissions.index': { paramsTuple?: []; params?: {} }
    'admin.commissions.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'auth.emails.verify': { paramsTuple: [ParamValue]; params: {'email': ParamValue} }
    'auth.signup.status': { paramsTuple?: []; params?: {} }
    'auth.session.destroy': { paramsTuple?: []; params?: {} }
  }
  POST: {
    'clients.store': { paramsTuple?: []; params?: {} }
    'admin.clients.store': { paramsTuple?: []; params?: {} }
    'admin.commissions.store': { paramsTuple?: []; params?: {} }
    'auth.session.store': { paramsTuple?: []; params?: {} }
  }
  PATCH: {
    'client.clients.update': { paramsTuple?: []; params?: {} }
    'admin.clients.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'admin.commissions.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  DELETE: {
    'client.clients.destroy': { paramsTuple?: []; params?: {} }
    'admin.clients.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'admin.commissions.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  PUT: {
    'admin.clients.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'admin.commissions.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
}
declare module '@adonisjs/core/types/http' {
  export interface RoutesList extends ScannedRoutes {}
}