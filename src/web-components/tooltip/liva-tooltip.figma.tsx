import figma from "@figma/code-connect"

/**
 * Code Connect mapping for the Tooltip Web Component from Phoenix Component Library
 * Figma Component Set: Tooltip (node-id: 3744-6350)
 *
 * This maps the Figma design to the liva-tooltip web component (not React)
 */

figma.connect(
  "liva-tooltip",
  "https://www.figma.com/design/YSsmFp0wm28RUpu5l01XKp/Phoenix-Component-Library?node-id=3744-6350&m=dev",
  {
    variant: { Position: "Top-Left" },
    props: {
      content: figma.string("Text"),
      position: figma.enum("Position", {
        "Top-Left": "top-left",
        "Bottom-Left": "bottom-left",
        "Top-Right": "top-right",
        "Bottom-Right": "bottom-right",
        "Top Center": "top-center",
        "Bottom-Center": "bottom-center",
        "Right": "right",
        "Left": "left",
      }),
    },
    example: (props) => `<!-- Import the web component -->
<script type="module">
  import './web-components';
</script>

<!-- Use the web component -->
<liva-tooltip content="${props.content}" position="${props.position}">
  <button>Hover me</button>
</liva-tooltip>`,
  },
)