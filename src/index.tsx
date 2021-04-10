import React, { FC, HTMLAttributes } from "react"

export const Box: FC<HTMLAttributes<HTMLDivElement>> = ({ children }) => (
  <div>{children}</div>
)
