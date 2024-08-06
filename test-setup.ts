import { afterEach, expect } from "vitest";
import { cleanup } from "@testing-library/react";
import * as matchers from "@testing-library/jest-dom/matchers";

// extend Vitest's expect method with testing-library's matchers
expect.extend(matchers);

// automatically cleanup the code after each test
afterEach(() => {
  cleanup();
});
