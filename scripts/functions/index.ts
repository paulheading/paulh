import { AxiosError } from 'axios'

export const isAxiosError = (something: any): something is AxiosError => something.isAxiosError === true;

export * from './trello'