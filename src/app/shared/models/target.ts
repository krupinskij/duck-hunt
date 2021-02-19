export enum TargetState {
  Default,
  Active,
  Killed
}

export interface Target {
  id: number;
  state: TargetState
}