import React from "react"
import Button from "./Button"
import figma from "@figma/code-connect"

/**
 * Code Connect mapping for the Button component from Phoenix System Tokens
 */

figma.connect(
  Button,
  "https://www.figma.com/design/YSsmFp0wm28RUpu5l01XKp/Phoenix-System-Tokens?node-id=1124-7123&m=dev",
  {
    props: {
      variant: figma.enum("Variant", {
        "Primary": "primary",
        "Secondary": "secondary",
        "Tertiary": "tertiary",
        "Ghost": "ghost",
        "Destructive": "destructive",
      }),
      size: figma.enum("Size", {
        "Small": "small",
        "Default": "default",
        "Large": "large",
      }),
      disabled: figma.boolean("Disabled"),
    },
    example: (props) => (
      <Button
        label="Button"
        variant={props.variant || "primary"}
        size={props.size || "default"}
        disabled={props.disabled || false}
        onClick={() => {}}
      />
    ),
  },
)
