/* eslint-disable prettier/prettier */
/// <reference path="../manifest.d.ts" />

import type { ExtractBody, ExtractErrorResponse, ExtractQuery, ExtractQueryForGet, ExtractResponse } from '@tuyau/core/types'
import type { InferInput, SimpleError } from '@vinejs/vine/types'

export type ParamValue = string | number | bigint | boolean

export interface Registry {
  'form.commission_forms.store': {
    methods: ["POST"]
    pattern: '/api/v1/client/form/commission'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/commission_forms_controller').default['store']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/commission_forms_controller').default['store']>>>
    }
  }
  'form.contact_forms.store': {
    methods: ["POST"]
    pattern: '/api/v1/client/form/contact'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/contact_forms_controller').default['store']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/contact_forms_controller').default['store']>>>
    }
  }
  'admin.form.commission_forms.index': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/admin/form/commission'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/commission_forms_controller').default['index']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/commission_forms_controller').default['index']>>>
    }
  }
  'admin.form.commission_forms.show': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/admin/form/commission/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/commission_forms_controller').default['show']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/commission_forms_controller').default['show']>>>
    }
  }
  'admin.form.commission_forms.destroy': {
    methods: ["DELETE"]
    pattern: '/api/v1/admin/form/commission/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/commission_forms_controller').default['destroy']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/commission_forms_controller').default['destroy']>>>
    }
  }
  'admin.form.contact_forms.index': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/admin/form/contact'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/contact_forms_controller').default['index']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/contact_forms_controller').default['index']>>>
    }
  }
  'admin.form.contact_forms.show': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/admin/form/contact/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/contact_forms_controller').default['show']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/contact_forms_controller').default['show']>>>
    }
  }
  'admin.form.contact_forms.destroy': {
    methods: ["DELETE"]
    pattern: '/api/v1/admin/form/contact/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/contact_forms_controller').default['destroy']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/contact_forms_controller').default['destroy']>>>
    }
  }
}
