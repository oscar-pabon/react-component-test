import figma from "@figma/code-connect"

/**
 * Code Connect mapping for the Tooltip Web Component from Phoenix Component Library
 * Figma Component Set: Tooltip (node-id: 3744-6350)
 *
 * This maps the Figma design to the liva-tooltip web component (not React)
 */

const livaTooltipComponent = figma.html`<liva-tooltip></liva-tooltip>`;

figma.connect(
  livaTooltipComponent,
  "https://www.figma.com/design/YSsmFp0wm28RUpu5l01XKp/Phoenix-Component-Library?node-id=3744-6350&m=dev",
  {
    variant: { Position: "Top-Left" },
    props: {
      content: figma.string("Text"),
    },
    example: (props) => figma.html`<liva-tooltip content="${props.content}" position="top-left">
  <button>Hover me</button>
</liva-tooltip>`,
  },
)

figma.connect(
  livaTooltipComponent,
  "https://www.figma.com/design/YSsmFp0wm28RUpu5l01XKp/Phoenix-Component-Library?node-id=3744-6350&m=dev",
  {
    variant: { Position: "Top-Right" },
    props: {
      content: figma.string("Text"),
    },
    example: (props) => figma.html`<liva-tooltip content="${props.content}" position="top-right">
  <button>Hover me</button>
</liva-tooltip>`,
  },
)

figma.connect(
  livaTooltipComponent,
  "https://www.figma.com/design/YSsmFp0wm28RUpu5l01XKp/Phoenix-Component-Library?node-id=3744-6350&m=dev",
  {
    variant: { Position: "Top Center" },
    props: {
      content: figma.string("Text"),
    },
    example: (props) => figma.html`<liva-tooltip content="${props.content}" position="top-center">
  <button>Hover me</button>
</liva-tooltip>`,
  },
)

figma.connect(
  livaTooltipComponent,
  "https://www.figma.com/design/YSsmFp0wm28RUpu5l01XKp/Phoenix-Component-Library?node-id=3744-6350&m=dev",
  {
    variant: { Position: "Bottom-Left" },
    props: {
      content: figma.string("Text"),
    },
    example: (props) => figma.html`<liva-tooltip content="${props.content}" position="bottom-left">
  <button>Hover me</button>
</liva-tooltip>`,
  },
)

figma.connect(
  livaTooltipComponent,
  "https://www.figma.com/design/YSsmFp0wm28RUpu5l01XKp/Phoenix-Component-Library?node-id=3744-6350&m=dev",
  {
    variant: { Position: "Bottom-Right" },
    props: {
      content: figma.string("Text"),
    },
    example: (props) => figma.html`<liva-tooltip content="${props.content}" position="bottom-right">
  <button>Hover me</button>
</liva-tooltip>`,
  },
)

figma.connect(
  livaTooltipComponent,
  "https://www.figma.com/design/YSsmFp0wm28RUpu5l01XKp/Phoenix-Component-Library?node-id=3744-6350&m=dev",
  {
    variant: { Position: "Bottom-Center" },
    props: {
      content: figma.string("Text"),
    },
    example: (props) => figma.html`<liva-tooltip content="${props.content}" position="bottom-center">
  <button>Hover me</button>
</liva-tooltip>`,
  },
)

figma.connect(
  livaTooltipComponent,
  "https://www.figma.com/design/YSsmFp0wm28RUpu5l01XKp/Phoenix-Component-Library?node-id=3744-6350&m=dev",
  {
    variant: { Position: "Left" },
    props: {
      content: figma.string("Text"),
    },
    example: (props) => figma.html`<liva-tooltip content="${props.content}" position="left">
  <button>Hover me</button>
</liva-tooltip>`,
  },
)

figma.connect(
  livaTooltipComponent,
  "https://www.figma.com/design/YSsmFp0wm28RUpu5l01XKp/Phoenix-Component-Library?node-id=3744-6350&m=dev",
  {
    variant: { Position: "Right" },
    props: {
      content: figma.string("Text"),
    },
    example: (props) => figma.html`<liva-tooltip content="${props.content}" position="right">
  <button>Hover me</button>
</liva-tooltip>`,
  },
)
