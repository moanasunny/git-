import React from "react";
import { Stepper } from "./Stepper";
import figma from "@figma/code-connect";

figma.connect(
  Stepper,
  "https://www.figma.com/design/Hsg5LWRnNXefayLlE57npT/-%EC%8B%A4%EC%8A%B5-%EA%B3%B5%EC%9C%A0-%ED%8C%8C%EC%9D%BC--%EB%A9%9C%EB%A1%A0-%EB%94%94%EC%9E%90%EC%9D%B8%EC%8B%9C%EC%8A%A4%ED%85%9C--Copy-?node-id=50-12865&t=RwDAGYfhebWTlL7S-4",
  {
    props: {
      arrow: figma.enum("arrow", {
        left: "left",
        right: "right",
      }),
      state: figma.enum("state", {
        default: "default",
        focus: "focus",
      }),
    },
    example: ({ arrow, state }) => <Stepper arrow={arrow} state={state} />,
  },
);
