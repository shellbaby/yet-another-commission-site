/* eslint-disable prettier/prettier */
import type { routes } from './index.ts'

export interface ApiDefinition {
  clients: {
    store: typeof routes['clients.store']
  }
  client: {
    clients: {
      show: typeof routes['client.clients.show']
      update: typeof routes['client.clients.update']
      destroy: typeof routes['client.clients.destroy']
    }
  }
  admin: {
    clients: {
      index: typeof routes['admin.clients.index']
      store: typeof routes['admin.clients.store']
      show: typeof routes['admin.clients.show']
      update: typeof routes['admin.clients.update']
      destroy: typeof routes['admin.clients.destroy']
    }
    commissions: {
      index: typeof routes['admin.commissions.index']
      store: typeof routes['admin.commissions.store']
      show: typeof routes['admin.commissions.show']
      update: typeof routes['admin.commissions.update']
      destroy: typeof routes['admin.commissions.destroy']
    }
  }
  auth: {
    emails: {
      verify: typeof routes['auth.emails.verify']
    }
    signup: {
      status: typeof routes['auth.signup.status']
    }
    session: {
      store: typeof routes['auth.session.store']
    }
  }
}
