import { IConfig } from '../../models';


export interface IConfigState {
    config: IConfig | null;
}

export const initialConfigState: IConfigState = {
    config: null
}