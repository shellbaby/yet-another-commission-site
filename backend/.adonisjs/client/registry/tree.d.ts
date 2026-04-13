/* eslint-disable prettier/prettier */
import type { routes } from './index.ts'

export interface ApiDefinition {
  form: {
    commissionForms: {
      store: typeof routes['form.commission_forms.store']
    }
    contactForms: {
      store: typeof routes['form.contact_forms.store']
    }
  }
  admin: {
    form: {
      commissionForms: {
        index: typeof routes['admin.form.commission_forms.index']
        show: typeof routes['admin.form.commission_forms.show']
        destroy: typeof routes['admin.form.commission_forms.destroy']
      }
      contactForms: {
        index: typeof routes['admin.form.contact_forms.index']
        show: typeof routes['admin.form.contact_forms.show']
        destroy: typeof routes['admin.form.contact_forms.destroy']
      }
    }
  }
}
