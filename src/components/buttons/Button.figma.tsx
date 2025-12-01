import React from "react"
import Button from "./Button"
import figma from "@figma/code-connect"
import './Button.css';

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
      iconLeft: figma.boolean("Show Left Icon"),
      iconRight: figma.boolean("Show Right Icon"),
      rounded: figma.boolean("⥰ Rounded"),
      text: figma.string("Button Text"),
    },
    example: (props) => (
      <Button 
        label={props.text} 
        disabled={props.disabled}
        iconLeft={props.iconLeft}
        iconRight={props.iconRight}
        variant={props.variant} 
        size={props.size}
        rounded={props.rounded}
        onClick={function (): void {
          throw new Error("Your function goes here")
        } }  />
    ),
  },
)
