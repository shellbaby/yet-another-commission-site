/* eslint-disable prettier/prettier */
import type { AdonisEndpoint } from '@tuyau/core/types'
import type { Registry } from './schema.d.ts'
import type { ApiDefinition } from './tree.d.ts'

const placeholder: any = {}

const routes = {
  'clients.store': {
    methods: ["POST"],
    pattern: '/v1/client',
    tokens: [{"old":"/v1/client","type":0,"val":"v1","end":""},{"old":"/v1/client","type":0,"val":"client","end":""}],
    types: placeholder as Registry['clients.store']['types'],
  },
  'client.clients.show': {
    methods: ["GET","HEAD"],
    pattern: '/v1/client',
    tokens: [{"old":"/v1/client","type":0,"val":"v1","end":""},{"old":"/v1/client","type":0,"val":"client","end":""}],
    types: placeholder as Registry['client.clients.show']['types'],
  },
  'client.clients.update': {
    methods: ["PATCH"],
    pattern: '/v1/client',
    tokens: [{"old":"/v1/client","type":0,"val":"v1","end":""},{"old":"/v1/client","type":0,"val":"client","end":""}],
    types: placeholder as Registry['client.clients.update']['types'],
  },
  'client.clients.destroy': {
    methods: ["DELETE"],
    pattern: '/v1/client',
    tokens: [{"old":"/v1/client","type":0,"val":"v1","end":""},{"old":"/v1/client","type":0,"val":"client","end":""}],
    types: placeholder as Registry['client.clients.destroy']['types'],
  },
  'admin.clients.index': {
    methods: ["GET","HEAD"],
    pattern: '/v1/admin/clients',
    tokens: [{"old":"/v1/admin/clients","type":0,"val":"v1","end":""},{"old":"/v1/admin/clients","type":0,"val":"admin","end":""},{"old":"/v1/admin/clients","type":0,"val":"clients","end":""}],
    types: placeholder as Registry['admin.clients.index']['types'],
  },
  'admin.clients.store': {
    methods: ["POST"],
    pattern: '/v1/admin/clients',
    tokens: [{"old":"/v1/admin/clients","type":0,"val":"v1","end":""},{"old":"/v1/admin/clients","type":0,"val":"admin","end":""},{"old":"/v1/admin/clients","type":0,"val":"clients","end":""}],
    types: placeholder as Registry['admin.clients.store']['types'],
  },
  'admin.clients.show': {
    methods: ["GET","HEAD"],
    pattern: '/v1/admin/clients/:id',
    tokens: [{"old":"/v1/admin/clients/:id","type":0,"val":"v1","end":""},{"old":"/v1/admin/clients/:id","type":0,"val":"admin","end":""},{"old":"/v1/admin/clients/:id","type":0,"val":"clients","end":""},{"old":"/v1/admin/clients/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['admin.clients.show']['types'],
  },
  'admin.clients.update': {
    methods: ["PUT","PATCH"],
    pattern: '/v1/admin/clients/:id',
    tokens: [{"old":"/v1/admin/clients/:id","type":0,"val":"v1","end":""},{"old":"/v1/admin/clients/:id","type":0,"val":"admin","end":""},{"old":"/v1/admin/clients/:id","type":0,"val":"clients","end":""},{"old":"/v1/admin/clients/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['admin.clients.update']['types'],
  },
  'admin.clients.destroy': {
    methods: ["DELETE"],
    pattern: '/v1/admin/clients/:id',
    tokens: [{"old":"/v1/admin/clients/:id","type":0,"val":"v1","end":""},{"old":"/v1/admin/clients/:id","type":0,"val":"admin","end":""},{"old":"/v1/admin/clients/:id","type":0,"val":"clients","end":""},{"old":"/v1/admin/clients/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['admin.clients.destroy']['types'],
  },
  'admin.commissions.index': {
    methods: ["GET","HEAD"],
    pattern: '/v1/admin/commissions',
    tokens: [{"old":"/v1/admin/commissions","type":0,"val":"v1","end":""},{"old":"/v1/admin/commissions","type":0,"val":"admin","end":""},{"old":"/v1/admin/commissions","type":0,"val":"commissions","end":""}],
    types: placeholder as Registry['admin.commissions.index']['types'],
  },
  'admin.commissions.store': {
    methods: ["POST"],
    pattern: '/v1/admin/commissions',
    tokens: [{"old":"/v1/admin/commissions","type":0,"val":"v1","end":""},{"old":"/v1/admin/commissions","type":0,"val":"admin","end":""},{"old":"/v1/admin/commissions","type":0,"val":"commissions","end":""}],
    types: placeholder as Registry['admin.commissions.store']['types'],
  },
  'admin.commissions.show': {
    methods: ["GET","HEAD"],
    pattern: '/v1/admin/commissions/:id',
    tokens: [{"old":"/v1/admin/commissions/:id","type":0,"val":"v1","end":""},{"old":"/v1/admin/commissions/:id","type":0,"val":"admin","end":""},{"old":"/v1/admin/commissions/:id","type":0,"val":"commissions","end":""},{"old":"/v1/admin/commissions/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['admin.commissions.show']['types'],
  },
  'admin.commissions.update': {
    methods: ["PUT","PATCH"],
    pattern: '/v1/admin/commissions/:id',
    tokens: [{"old":"/v1/admin/commissions/:id","type":0,"val":"v1","end":""},{"old":"/v1/admin/commissions/:id","type":0,"val":"admin","end":""},{"old":"/v1/admin/commissions/:id","type":0,"val":"commissions","end":""},{"old":"/v1/admin/commissions/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['admin.commissions.update']['types'],
  },
  'admin.commissions.destroy': {
    methods: ["DELETE"],
    pattern: '/v1/admin/commissions/:id',
    tokens: [{"old":"/v1/admin/commissions/:id","type":0,"val":"v1","end":""},{"old":"/v1/admin/commissions/:id","type":0,"val":"admin","end":""},{"old":"/v1/admin/commissions/:id","type":0,"val":"commissions","end":""},{"old":"/v1/admin/commissions/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['admin.commissions.destroy']['types'],
  },
  'auth.emails.verify': {
    methods: ["GET","HEAD"],
    pattern: '/v1/auth/verify/:uuid',
    tokens: [{"old":"/v1/auth/verify/:uuid","type":0,"val":"v1","end":""},{"old":"/v1/auth/verify/:uuid","type":0,"val":"auth","end":""},{"old":"/v1/auth/verify/:uuid","type":0,"val":"verify","end":""},{"old":"/v1/auth/verify/:uuid","type":1,"val":"uuid","end":""}],
    types: placeholder as Registry['auth.emails.verify']['types'],
  },
  'auth.signup.status': {
    methods: ["GET","HEAD"],
    pattern: '/v1/auth/signup-status',
    tokens: [{"old":"/v1/auth/signup-status","type":0,"val":"v1","end":""},{"old":"/v1/auth/signup-status","type":0,"val":"auth","end":""},{"old":"/v1/auth/signup-status","type":0,"val":"signup-status","end":""}],
    types: placeholder as Registry['auth.signup.status']['types'],
  },
  'auth.session.store': {
    methods: ["POST"],
    pattern: '/v1/auth/signin',
    tokens: [{"old":"/v1/auth/signin","type":0,"val":"v1","end":""},{"old":"/v1/auth/signin","type":0,"val":"auth","end":""},{"old":"/v1/auth/signin","type":0,"val":"signin","end":""}],
    types: placeholder as Registry['auth.session.store']['types'],
  },
  'auth.session.destroy': {
    methods: ["GET","HEAD"],
    pattern: '/v1/auth/signout',
    tokens: [{"old":"/v1/auth/signout","type":0,"val":"v1","end":""},{"old":"/v1/auth/signout","type":0,"val":"auth","end":""},{"old":"/v1/auth/signout","type":0,"val":"signout","end":""}],
    types: placeholder as Registry['auth.session.destroy']['types'],
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
