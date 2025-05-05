import { ProcessStatus } from "../enums/process-status.enum"
import { ProcessType } from "../enums/process-type.enum"

export interface IProcess{
    color: string
    pid: number
    status: ProcessStatus
    remaining: number
    type: ProcessType
    priority: number
}