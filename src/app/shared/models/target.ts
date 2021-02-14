import FlyingTargetState from "src/app/objects/flying-target/flying-target.state";

export enum TargetState {
  Default,
  Active,
  Killed
}

export interface Target {
  id: number;
  state: TargetState
}