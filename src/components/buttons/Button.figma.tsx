import React from "react"
import Button from "./Button"
import figma from "@figma/code-connect"
import './Button.css';

/**
 * Code Connect mapping for the Button component from Phoenix Component Library
 */

figma.connect(
  Button,
  "https://www.figma.com/design/YSsmFp0wm28RUpu5l01XKp/Phoenix-Component-Library?node-id=1124-7123&m=dev",
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
      rounded: figma.boolean("⥰ Rounded"),
      label: figma.string("Button Text"),
    },
    example: (props) => (
      <Button 
        label={props.label} 
        disabled={props.disabled}
    ),
  },
)
