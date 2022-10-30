import { setActivePinia, createPinia } from "pinia";
import {
  afterEach,
  beforeAll,
  beforeEach,
  describe,
  test,
  expect,
} from "vitest";
import { useSearchStore } from "./search";

beforeAll(() => {
  setActivePinia(createPinia());
});

describe("useSearchStore", () => {
  let store: ReturnType<typeof useSearchStore>;

  //beforEach ensures a completely new store is created before each test is run
  //to avoid coupling
  beforeEach(() => {
    store = useSearchStore();
  });

  //afterEach will reinitialize store to an empty state
  //so that every test we run has a fresh store
  afterEach(() => {
    store.$reset();
  });

  test("creates a store", () => {
    expect(store).toBeDefined();
  });
});
