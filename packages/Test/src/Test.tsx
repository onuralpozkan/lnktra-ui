/* React */
import * as React from "react";

/* Style */
import classNames from "classnames";
import "./index.scss";

/* Interface & Type definitions */
export interface ITest {
  role?: string;
}

const Test: React.FC<ITest> = ({ ...props }) => {
  return (
    <div className={classNames("hp-test")} {...props}>
      Test
    </div>
  );
};

export default Test;
