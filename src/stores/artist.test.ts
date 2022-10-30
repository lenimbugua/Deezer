import { setActivePinia, createPinia } from "pinia";
import {
  afterEach,
  beforeAll,
  beforeEach,
  describe,
  test,
  expect,
} from "vitest";
import { useArtistStore } from "./search";

beforeAll(() => {
  setActivePinia(createPinia());
});

describe("useArtistStore", () => {
  let store: ReturnType<typeof useArtistStore>;

  /*beforEach ensures a completely new store is created before each test is run
  to avoid coupling of stores */
  beforeEach(() => {
    store = useArtistStore();
  });

  /* afterEach will reinitialize store to an empty state
  so that every test we run has a fresh store */
  afterEach(() => {
    store.$reset();
  });

  test("creates a store", () => {
    expect(store).toBeDefined();
  });

  test("searches an artist", () => {
    expect(store.search('')).toBeDefined();
  });
});
