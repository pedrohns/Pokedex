import { createSelector } from "@reduxjs/toolkit";

export default getCounterValue = createSelector(
  (state) => state.counter.value,
);