import { dbOptions } from './../environment/environment'
import { createConnection } from "typeorm"

export const connection = createConnection(dbOptions)