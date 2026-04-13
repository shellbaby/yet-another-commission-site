import '@adonisjs/core/types/http'

type ParamValue = string | number | bigint | boolean

export type ScannedRoutes = {
  ALL: {
    'form.commission_forms.store': { paramsTuple?: []; params?: {} }
    'form.contact_forms.store': { paramsTuple?: []; params?: {} }
    'admin.form.commission_forms.index': { paramsTuple?: []; params?: {} }
    'admin.form.commission_forms.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'admin.form.commission_forms.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'admin.form.contact_forms.index': { paramsTuple?: []; params?: {} }
    'admin.form.contact_forms.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'admin.form.contact_forms.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  GET: {
    'admin.form.commission_forms.index': { paramsTuple?: []; params?: {} }
    'admin.form.commission_forms.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'admin.form.contact_forms.index': { paramsTuple?: []; params?: {} }
    'admin.form.contact_forms.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  HEAD: {
    'admin.form.commission_forms.index': { paramsTuple?: []; params?: {} }
    'admin.form.commission_forms.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'admin.form.contact_forms.index': { paramsTuple?: []; params?: {} }
    'admin.form.contact_forms.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  POST: {
    'form.commission_forms.store': { paramsTuple?: []; params?: {} }
    'form.contact_forms.store': { paramsTuple?: []; params?: {} }
  }
  DELETE: {
    'admin.form.commission_forms.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'admin.form.contact_forms.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
}
declare module '@adonisjs/core/types/http' {
  export interface RoutesList extends ScannedRoutes {}
}