/* eslint-disable prettier/prettier */
/// <reference path="../manifest.d.ts" />

import type { ExtractBody, ExtractErrorResponse, ExtractQuery, ExtractQueryForGet, ExtractResponse } from '@tuyau/core/types'
import type { InferInput, SimpleError } from '@vinejs/vine/types'

export type ParamValue = string | number | bigint | boolean

export interface Registry {
  'client.clients.store': {
    methods: ["POST"]
    pattern: '/v1/clients'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/client').signupValidator)>>
      paramsTuple: []
      params: {}
      query: ExtractQuery<InferInput<(typeof import('#validators/client').signupValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/client/clients_controller').default['store']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/client/clients_controller').default['store']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'client.clients.show': {
    methods: ["GET","HEAD"]
    pattern: '/v1/clients/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/client/clients_controller').default['show']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/client/clients_controller').default['show']>>>
    }
  }
  'client.clients.update': {
    methods: ["PUT","PATCH"]
    pattern: '/v1/clients/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/client/clients_controller').default['update']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/client/clients_controller').default['update']>>>
    }
  }
  'client.clients.destroy': {
    methods: ["DELETE"]
    pattern: '/v1/clients/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/client/clients_controller').default['destroy']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/client/clients_controller').default['destroy']>>>
    }
  }
  'client.commissions.index': {
    methods: ["GET","HEAD"]
    pattern: '/v1/commissions'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/client/commissions_controller').default['index']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/client/commissions_controller').default['index']>>>
    }
  }
  'client.commissions.store': {
    methods: ["POST"]
    pattern: '/v1/commissions'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/client/commissions_controller').default['store']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/client/commissions_controller').default['store']>>>
    }
  }
  'client.commissions.show': {
    methods: ["GET","HEAD"]
    pattern: '/v1/commissions/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/client/commissions_controller').default['show']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/client/commissions_controller').default['show']>>>
    }
  }
  'client.commissions.destroy': {
    methods: ["DELETE"]
    pattern: '/v1/commissions/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/client/commissions_controller').default['destroy']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/client/commissions_controller').default['destroy']>>>
    }
  }
  'admin.clients.index': {
    methods: ["GET","HEAD"]
    pattern: '/v1/admin/clients'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/admin/clients_controller').default['index']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/admin/clients_controller').default['index']>>>
    }
  }
  'admin.clients.store': {
    methods: ["POST"]
    pattern: '/v1/admin/clients'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/admin/clients_controller').default['store']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/admin/clients_controller').default['store']>>>
    }
  }
  'admin.clients.show': {
    methods: ["GET","HEAD"]
    pattern: '/v1/admin/clients/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/admin/clients_controller').default['show']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/admin/clients_controller').default['show']>>>
    }
  }
  'admin.clients.update': {
    methods: ["PUT","PATCH"]
    pattern: '/v1/admin/clients/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/admin/clients_controller').default['update']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/admin/clients_controller').default['update']>>>
    }
  }
  'admin.clients.destroy': {
    methods: ["DELETE"]
    pattern: '/v1/admin/clients/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/admin/clients_controller').default['destroy']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/admin/clients_controller').default['destroy']>>>
    }
  }
  'admin.commissions.index': {
    methods: ["GET","HEAD"]
    pattern: '/v1/admin/commissions'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/admin/commissions_controller').default['index']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/admin/commissions_controller').default['index']>>>
    }
  }
  'admin.commissions.store': {
    methods: ["POST"]
    pattern: '/v1/admin/commissions'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/admin/commissions_controller').default['store']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/admin/commissions_controller').default['store']>>>
    }
  }
  'admin.commissions.show': {
    methods: ["GET","HEAD"]
    pattern: '/v1/admin/commissions/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/admin/commissions_controller').default['show']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/admin/commissions_controller').default['show']>>>
    }
  }
  'admin.commissions.update': {
    methods: ["PUT","PATCH"]
    pattern: '/v1/admin/commissions/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/admin/commissions_controller').default['update']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/admin/commissions_controller').default['update']>>>
    }
  }
  'admin.commissions.destroy': {
    methods: ["DELETE"]
    pattern: '/v1/admin/commissions/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/admin/commissions_controller').default['destroy']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/admin/commissions_controller').default['destroy']>>>
    }
  }
  'auth.emails.verify': {
    methods: ["GET","HEAD"]
    pattern: '/v1/auth/verify/:email'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { email: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/email/emails_controller').default['verify']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/email/emails_controller').default['verify']>>>
    }
  }
}
