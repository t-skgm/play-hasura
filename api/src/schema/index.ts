import { importSchema } from 'graphql-import'

export const imporTypeDefs = () => importSchema('./src/schema/schema.graphql')
