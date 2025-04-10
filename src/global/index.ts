import { registerProperties } from './register-properties'
import { App } from 'vue'

export function globalRegister(app: App): void {
  app.use(registerProperties)
}
