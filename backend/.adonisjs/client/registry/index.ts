/* eslint-disable prettier/prettier */
import type { AdonisEndpoint } from '@tuyau/core/types'
import type { Registry } from './schema.d.ts'
import type { ApiDefinition } from './tree.d.ts'

const placeholder: any = {}

const routes = {
  'form.commission_forms.store': {
    methods: ["POST"],
    pattern: '/api/v1/client/form/commission',
    tokens: [{"old":"/api/v1/client/form/commission","type":0,"val":"api","end":""},{"old":"/api/v1/client/form/commission","type":0,"val":"v1","end":""},{"old":"/api/v1/client/form/commission","type":0,"val":"client","end":""},{"old":"/api/v1/client/form/commission","type":0,"val":"form","end":""},{"old":"/api/v1/client/form/commission","type":0,"val":"commission","end":""}],
    types: placeholder as Registry['form.commission_forms.store']['types'],
  },
  'form.contact_forms.store': {
    methods: ["POST"],
    pattern: '/api/v1/client/form/contact',
    tokens: [{"old":"/api/v1/client/form/contact","type":0,"val":"api","end":""},{"old":"/api/v1/client/form/contact","type":0,"val":"v1","end":""},{"old":"/api/v1/client/form/contact","type":0,"val":"client","end":""},{"old":"/api/v1/client/form/contact","type":0,"val":"form","end":""},{"old":"/api/v1/client/form/contact","type":0,"val":"contact","end":""}],
    types: placeholder as Registry['form.contact_forms.store']['types'],
  },
  'admin.form.commission_forms.index': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/admin/form/commission',
    tokens: [{"old":"/api/v1/admin/form/commission","type":0,"val":"api","end":""},{"old":"/api/v1/admin/form/commission","type":0,"val":"v1","end":""},{"old":"/api/v1/admin/form/commission","type":0,"val":"admin","end":""},{"old":"/api/v1/admin/form/commission","type":0,"val":"form","end":""},{"old":"/api/v1/admin/form/commission","type":0,"val":"commission","end":""}],
    types: placeholder as Registry['admin.form.commission_forms.index']['types'],
  },
  'admin.form.commission_forms.show': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/admin/form/commission/:id',
    tokens: [{"old":"/api/v1/admin/form/commission/:id","type":0,"val":"api","end":""},{"old":"/api/v1/admin/form/commission/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/admin/form/commission/:id","type":0,"val":"admin","end":""},{"old":"/api/v1/admin/form/commission/:id","type":0,"val":"form","end":""},{"old":"/api/v1/admin/form/commission/:id","type":0,"val":"commission","end":""},{"old":"/api/v1/admin/form/commission/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['admin.form.commission_forms.show']['types'],
  },
  'admin.form.commission_forms.destroy': {
    methods: ["DELETE"],
    pattern: '/api/v1/admin/form/commission/:id',
    tokens: [{"old":"/api/v1/admin/form/commission/:id","type":0,"val":"api","end":""},{"old":"/api/v1/admin/form/commission/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/admin/form/commission/:id","type":0,"val":"admin","end":""},{"old":"/api/v1/admin/form/commission/:id","type":0,"val":"form","end":""},{"old":"/api/v1/admin/form/commission/:id","type":0,"val":"commission","end":""},{"old":"/api/v1/admin/form/commission/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['admin.form.commission_forms.destroy']['types'],
  },
  'admin.form.contact_forms.index': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/admin/form/contact',
    tokens: [{"old":"/api/v1/admin/form/contact","type":0,"val":"api","end":""},{"old":"/api/v1/admin/form/contact","type":0,"val":"v1","end":""},{"old":"/api/v1/admin/form/contact","type":0,"val":"admin","end":""},{"old":"/api/v1/admin/form/contact","type":0,"val":"form","end":""},{"old":"/api/v1/admin/form/contact","type":0,"val":"contact","end":""}],
    types: placeholder as Registry['admin.form.contact_forms.index']['types'],
  },
  'admin.form.contact_forms.show': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/admin/form/contact/:id',
    tokens: [{"old":"/api/v1/admin/form/contact/:id","type":0,"val":"api","end":""},{"old":"/api/v1/admin/form/contact/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/admin/form/contact/:id","type":0,"val":"admin","end":""},{"old":"/api/v1/admin/form/contact/:id","type":0,"val":"form","end":""},{"old":"/api/v1/admin/form/contact/:id","type":0,"val":"contact","end":""},{"old":"/api/v1/admin/form/contact/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['admin.form.contact_forms.show']['types'],
  },
  'admin.form.contact_forms.destroy': {
    methods: ["DELETE"],
    pattern: '/api/v1/admin/form/contact/:id',
    tokens: [{"old":"/api/v1/admin/form/contact/:id","type":0,"val":"api","end":""},{"old":"/api/v1/admin/form/contact/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/admin/form/contact/:id","type":0,"val":"admin","end":""},{"old":"/api/v1/admin/form/contact/:id","type":0,"val":"form","end":""},{"old":"/api/v1/admin/form/contact/:id","type":0,"val":"contact","end":""},{"old":"/api/v1/admin/form/contact/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['admin.form.contact_forms.destroy']['types'],
  },
} as const satisfies Record<string, AdonisEndpoint>

export { routes }

export const registry = {
  routes,
  $tree: {} as ApiDefinition,
}

declare module '@tuyau/core/types' {
  export interface UserRegistry {
    routes: typeof routes
    $tree: ApiDefinition
  }
}
