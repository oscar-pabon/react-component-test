import React from "react"
import Tooltip from "./Tooltip"
import figma from "@figma/code-connect"

/**
 * Code Connect mapping for the Tooltip component from Phoenix Component Library
 * Figma Component Set: Tooltip (node-id: 3744:6350)
 */

figma.connect(
  Tooltip,
  "https://www.figma.com/design/YSsmFp0wm28RUpu5l01XKp/Phoenix-Component-Library?node-id=3744-6350&m=dev",
  {
    props: {
      content: figma.textContent("Text#3744:3"),
      position: figma.enum("Position", {
        "Top-Left": "Top-Left",
        "Bottom-Left": "Bottom-Left",
        "Top-Right": "Top-Right",
        "Bottom-Right": "Bottom-Right",
        "Top Center": "Top Center",
        "Bottom-Center": "Bottom-Center",
        "Right": "Right",
        "Left": "Left",
      }),
    },
    example: (props) => (
      <Tooltip
        content={props.content}
        position={props.position as any}
      >
        <button>Hover me</button>
      </Tooltip>
    ),
  },
)
