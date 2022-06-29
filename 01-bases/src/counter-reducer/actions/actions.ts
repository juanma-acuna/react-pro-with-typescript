export const INCREASE_BY = "increaseBy";
export const RESET = "reset";

export type CounterAction =
  | { type: "increaseBy"; payload: { value: number } }
  | { type: "reset" };

export const doReset = (): CounterAction => ({ type: RESET });

export const doIncreaseBy = (value: number): CounterAction => ({
  type: INCREASE_BY,
  payload: { value },
});
