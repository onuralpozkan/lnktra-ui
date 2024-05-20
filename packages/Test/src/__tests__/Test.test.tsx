import { render } from "@testing-library/react";

import Test from "../Test";
import { expect } from "vitest";

describe("Test", () => {
  it("Test snapshot test", () => {
    const wrapper = render(<Test />);
    expect(wrapper).toMatchSnapshot();
  });
});

