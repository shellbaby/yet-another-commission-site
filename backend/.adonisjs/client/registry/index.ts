/* eslint-disable prettier/prettier */
import type { AdonisEndpoint } from '@tuyau/core/types'
import type { Registry } from './schema.d.ts'
import type { ApiDefinition } from './tree.d.ts'

const placeholder: any = {}

const routes = {
  'client.clients.store': {
    methods: ["POST"],
    pattern: '/api/v1/clients',
    tokens: [{"old":"/api/v1/clients","type":0,"val":"api","end":""},{"old":"/api/v1/clients","type":0,"val":"v1","end":""},{"old":"/api/v1/clients","type":0,"val":"clients","end":""}],
    types: placeholder as Registry['client.clients.store']['types'],
  },
  'client.clients.show': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/clients/:id',
    tokens: [{"old":"/api/v1/clients/:id","type":0,"val":"api","end":""},{"old":"/api/v1/clients/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/clients/:id","type":0,"val":"clients","end":""},{"old":"/api/v1/clients/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['client.clients.show']['types'],
  },
  'client.clients.update': {
    methods: ["PUT","PATCH"],
    pattern: '/api/v1/clients/:id',
    tokens: [{"old":"/api/v1/clients/:id","type":0,"val":"api","end":""},{"old":"/api/v1/clients/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/clients/:id","type":0,"val":"clients","end":""},{"old":"/api/v1/clients/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['client.clients.update']['types'],
  },
  'client.clients.destroy': {
    methods: ["DELETE"],
    pattern: '/api/v1/clients/:id',
    tokens: [{"old":"/api/v1/clients/:id","type":0,"val":"api","end":""},{"old":"/api/v1/clients/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/clients/:id","type":0,"val":"clients","end":""},{"old":"/api/v1/clients/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['client.clients.destroy']['types'],
  },
  'client.commissions.index': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/commissions',
    tokens: [{"old":"/api/v1/commissions","type":0,"val":"api","end":""},{"old":"/api/v1/commissions","type":0,"val":"v1","end":""},{"old":"/api/v1/commissions","type":0,"val":"commissions","end":""}],
    types: placeholder as Registry['client.commissions.index']['types'],
  },
  'client.commissions.store': {
    methods: ["POST"],
    pattern: '/api/v1/commissions',
    tokens: [{"old":"/api/v1/commissions","type":0,"val":"api","end":""},{"old":"/api/v1/commissions","type":0,"val":"v1","end":""},{"old":"/api/v1/commissions","type":0,"val":"commissions","end":""}],
    types: placeholder as Registry['client.commissions.store']['types'],
  },
  'client.commissions.show': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/commissions/:id',
    tokens: [{"old":"/api/v1/commissions/:id","type":0,"val":"api","end":""},{"old":"/api/v1/commissions/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/commissions/:id","type":0,"val":"commissions","end":""},{"old":"/api/v1/commissions/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['client.commissions.show']['types'],
  },
  'client.commissions.destroy': {
    methods: ["DELETE"],
    pattern: '/api/v1/commissions/:id',
    tokens: [{"old":"/api/v1/commissions/:id","type":0,"val":"api","end":""},{"old":"/api/v1/commissions/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/commissions/:id","type":0,"val":"commissions","end":""},{"old":"/api/v1/commissions/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['client.commissions.destroy']['types'],
  },
  'admin.clients.index': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/admin/clients',
    tokens: [{"old":"/api/v1/admin/clients","type":0,"val":"api","end":""},{"old":"/api/v1/admin/clients","type":0,"val":"v1","end":""},{"old":"/api/v1/admin/clients","type":0,"val":"admin","end":""},{"old":"/api/v1/admin/clients","type":0,"val":"clients","end":""}],
    types: placeholder as Registry['admin.clients.index']['types'],
  },
  'admin.clients.store': {
    methods: ["POST"],
    pattern: '/api/v1/admin/clients',
    tokens: [{"old":"/api/v1/admin/clients","type":0,"val":"api","end":""},{"old":"/api/v1/admin/clients","type":0,"val":"v1","end":""},{"old":"/api/v1/admin/clients","type":0,"val":"admin","end":""},{"old":"/api/v1/admin/clients","type":0,"val":"clients","end":""}],
    types: placeholder as Registry['admin.clients.store']['types'],
  },
  'admin.clients.show': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/admin/clients/:id',
    tokens: [{"old":"/api/v1/admin/clients/:id","type":0,"val":"api","end":""},{"old":"/api/v1/admin/clients/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/admin/clients/:id","type":0,"val":"admin","end":""},{"old":"/api/v1/admin/clients/:id","type":0,"val":"clients","end":""},{"old":"/api/v1/admin/clients/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['admin.clients.show']['types'],
  },
  'admin.clients.update': {
    methods: ["PUT","PATCH"],
    pattern: '/api/v1/admin/clients/:id',
    tokens: [{"old":"/api/v1/admin/clients/:id","type":0,"val":"api","end":""},{"old":"/api/v1/admin/clients/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/admin/clients/:id","type":0,"val":"admin","end":""},{"old":"/api/v1/admin/clients/:id","type":0,"val":"clients","end":""},{"old":"/api/v1/admin/clients/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['admin.clients.update']['types'],
  },
  'admin.clients.destroy': {
    methods: ["DELETE"],
    pattern: '/api/v1/admin/clients/:id',
    tokens: [{"old":"/api/v1/admin/clients/:id","type":0,"val":"api","end":""},{"old":"/api/v1/admin/clients/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/admin/clients/:id","type":0,"val":"admin","end":""},{"old":"/api/v1/admin/clients/:id","type":0,"val":"clients","end":""},{"old":"/api/v1/admin/clients/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['admin.clients.destroy']['types'],
  },
  'admin.commissions.index': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/admin/commissions',
    tokens: [{"old":"/api/v1/admin/commissions","type":0,"val":"api","end":""},{"old":"/api/v1/admin/commissions","type":0,"val":"v1","end":""},{"old":"/api/v1/admin/commissions","type":0,"val":"admin","end":""},{"old":"/api/v1/admin/commissions","type":0,"val":"commissions","end":""}],
    types: placeholder as Registry['admin.commissions.index']['types'],
  },
  'admin.commissions.store': {
    methods: ["POST"],
    pattern: '/api/v1/admin/commissions',
    tokens: [{"old":"/api/v1/admin/commissions","type":0,"val":"api","end":""},{"old":"/api/v1/admin/commissions","type":0,"val":"v1","end":""},{"old":"/api/v1/admin/commissions","type":0,"val":"admin","end":""},{"old":"/api/v1/admin/commissions","type":0,"val":"commissions","end":""}],
    types: placeholder as Registry['admin.commissions.store']['types'],
  },
  'admin.commissions.show': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/admin/commissions/:id',
    tokens: [{"old":"/api/v1/admin/commissions/:id","type":0,"val":"api","end":""},{"old":"/api/v1/admin/commissions/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/admin/commissions/:id","type":0,"val":"admin","end":""},{"old":"/api/v1/admin/commissions/:id","type":0,"val":"commissions","end":""},{"old":"/api/v1/admin/commissions/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['admin.commissions.show']['types'],
  },
  'admin.commissions.update': {
    methods: ["PUT","PATCH"],
    pattern: '/api/v1/admin/commissions/:id',
    tokens: [{"old":"/api/v1/admin/commissions/:id","type":0,"val":"api","end":""},{"old":"/api/v1/admin/commissions/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/admin/commissions/:id","type":0,"val":"admin","end":""},{"old":"/api/v1/admin/commissions/:id","type":0,"val":"commissions","end":""},{"old":"/api/v1/admin/commissions/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['admin.commissions.update']['types'],
  },
  'admin.commissions.destroy': {
    methods: ["DELETE"],
    pattern: '/api/v1/admin/commissions/:id',
    tokens: [{"old":"/api/v1/admin/commissions/:id","type":0,"val":"api","end":""},{"old":"/api/v1/admin/commissions/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/admin/commissions/:id","type":0,"val":"admin","end":""},{"old":"/api/v1/admin/commissions/:id","type":0,"val":"commissions","end":""},{"old":"/api/v1/admin/commissions/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['admin.commissions.destroy']['types'],
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
