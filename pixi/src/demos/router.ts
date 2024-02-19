import React from "react";
const lazy = React.lazy;

const routers = [
  {
    title: "basic",
    cmp: lazy(() => import("./basic")),
  },
  {
    title: "extra",
    cmp: lazy(() => import("./extra")),
  },
  {
    title: "text",
    cmp: lazy(() => import("./text")),
  },
  {
    title: "image",
    cmp: lazy(() => import("./image")),
  },
];

export default routers;
