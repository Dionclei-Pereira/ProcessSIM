import { ProcessStatus } from "../enums/process-status.enum"

export interface IProcess{
    color: string
    pid: number
    status: ProcessStatus
    remaining: number
}