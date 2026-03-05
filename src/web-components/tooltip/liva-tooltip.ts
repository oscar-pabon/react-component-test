import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

/**
 * Tooltip position matching Figma design variants
 */
export type TooltipPosition =
  | 'top-left'
  | 'bottom-left'
  | 'top-right'
  | 'bottom-right'
  | 'top-center'
  | 'bottom-center'
  | 'right'
  | 'left';

/**
 * Liva Tooltip Web Component
 * Matches Phoenix Component Library design (node-id: 3744-6350)
 */
@customElement('liva-tooltip')
export class LivaTooltip extends LitElement {
  static styles = css`
    /**
     * Tooltip Component Styles
     * Matching Figma Phoenix Component Library design
     * node-id: 3744-6350
     *
     * Phoenix Design System Token Mapping:
     * - Background: --ph-color-slate-800 (#1e293b = rgb(30, 41, 59))
     * - Text: --ph-color-text-inverted (#ffffff)
     * - Padding: --ph-spacing-4 (4px) / --ph-spacing-8 (8px)
     * - Border Radius: --ph-radius-2 (4px)
     * - Font Size: --ph-font-size-2 (0.875rem = 14px)
     * - Line Height: --ph-font-line-height-3 (150%)
     * - Font Family: --ph-font-family (Inter)
     * - Transitions: --ph-duration (200ms) / --ph-easing
     */

    :host {
      position: relative;
      display: inline-block;
      width: fit-content;
    }

    .tooltip-trigger {
      display: inline-block;
      cursor: help;
    }

    .tooltip {
      position: absolute;
      z-index: 1000;
      opacity: 0;
      visibility: hidden;
      transition: opacity var(--ph-duration, 200ms) var(--ph-easing, cubic-bezier(0.4, 0, 0.2, 1)),
                  visibility var(--ph-duration, 200ms) var(--ph-easing, cubic-bezier(0.4, 0, 0.2, 1)),
                  transform var(--ph-duration, 200ms) var(--ph-easing, cubic-bezier(0.4, 0, 0.2, 1));
      pointer-events: none;
      width: fit-content;
      white-space: nowrap;
    }

    :host([visible]) .tooltip,
    .tooltip--visible {
      opacity: 1;
      visibility: visible;
    }

    /* Tooltip Content - Matching Figma "Box" frame */
    .tooltip__content {
      /* Figma: rgb(30, 41, 59) → Phoenix Token */
      background-color: var(--ph-color-slate-800, #1e293b);

      /* Figma: rgb(255, 255, 255) → Phoenix Token */
      color: var(--ph-color-text-inverted, #ffffff);

      /* Figma: 4px vertical, 8px horizontal → Phoenix Tokens */
      padding: var(--ph-spacing-4, 4px) var(--ph-spacing-8, 8px);

      /* Figma: 4px → Phoenix Token */
      border-radius: var(--ph-radius-2, 4px);

      /* Figma: Inter, 14px (0.875rem), 400 weight, 150% line-height → Phoenix Tokens */
      font-family: var(--ph-font-family, Inter), -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      font-size: var(--ph-font-size-2, 0.875rem);
      font-weight: 400;
      line-height: var(--ph-font-line-height-3, 1.5);

      /* Figma: 0px 4px 10px rgba(30, 41, 59, 0.14) - Custom shadow matching design */
      box-shadow: 0px 4px 10px rgba(30, 41, 59, 0.14);
    }

    /* Tooltip Arrow (Beak) - Matching Figma "Beak" vector */
    .tooltip__arrow {
      position: absolute;
      width: 6px;
      height: 6px;

      /* Figma: Same background as tooltip box → Phoenix Token */
      background-color: var(--ph-color-slate-800, #1e293b);

      transform: rotate(45deg);
    }

    /* Position: Top-Left */
    .tooltip--top-left {
      bottom: calc(100% + var(--ph-spacing-8, 8px));
      left: 0;
      transform: translateY(var(--ph-spacing-4, 4px));
    }

    :host([visible]) .tooltip--top-left,
    .tooltip--top-left.tooltip--visible {
      transform: translateY(0);
    }

    .tooltip--top-left .tooltip__arrow {
      bottom: -3px;
      left: 10px;
    }

    /* Position: Top-Right */
    .tooltip--top-right {
      bottom: calc(100% + var(--ph-spacing-8, 8px));
      right: 0;
      transform: translateY(var(--ph-spacing-4, 4px));
    }

    :host([visible]) .tooltip--top-right,
    .tooltip--top-right.tooltip--visible {
      transform: translateY(0);
    }

    .tooltip--top-right .tooltip__arrow {
      bottom: -3px;
      right: 10px;
    }

    /* Position: Top Center */
    .tooltip--top-center {
      bottom: calc(100% + var(--ph-spacing-8, 8px));
      left: 50%;
      transform: translateX(-50%) translateY(var(--ph-spacing-4, 4px));
    }

    :host([visible]) .tooltip--top-center,
    .tooltip--top-center.tooltip--visible {
      transform: translateX(-50%) translateY(0);
    }

    .tooltip--top-center .tooltip__arrow {
      bottom: -3px;
      left: 50%;
      transform: translateX(-50%) rotate(45deg);
    }

    /* Position: Bottom-Left */
    .tooltip--bottom-left {
      top: calc(100% + var(--ph-spacing-8, 8px));
      left: 0;
      transform: translateY(calc(-1 * var(--ph-spacing-4, 4px)));
    }

    :host([visible]) .tooltip--bottom-left,
    .tooltip--bottom-left.tooltip--visible {
      transform: translateY(0);
    }

    .tooltip--bottom-left .tooltip__arrow {
      top: -3px;
      left: 10px;
    }

    /* Position: Bottom-Right */
    .tooltip--bottom-right {
      top: calc(100% + var(--ph-spacing-8, 8px));
      right: 0;
      transform: translateY(calc(-1 * var(--ph-spacing-4, 4px)));
    }

    :host([visible]) .tooltip--bottom-right,
    .tooltip--bottom-right.tooltip--visible {
      transform: translateY(0);
    }

    .tooltip--bottom-right .tooltip__arrow {
      top: -3px;
      right: 10px;
    }

    /* Position: Bottom-Center */
    .tooltip--bottom-center {
      top: calc(100% + var(--ph-spacing-8, 8px));
      left: 50%;
      transform: translateX(-50%) translateY(calc(-1 * var(--ph-spacing-4, 4px)));
    }

    :host([visible]) .tooltip--bottom-center,
    .tooltip--bottom-center.tooltip--visible {
      transform: translateX(-50%) translateY(0);
    }

    .tooltip--bottom-center .tooltip__arrow {
      top: -3px;
      left: 50%;
      transform: translateX(-50%) rotate(45deg);
    }

    /* Position: Left */
    .tooltip--left {
      right: calc(100% + var(--ph-spacing-8, 8px));
      top: 50%;
      transform: translateY(-50%) translateX(var(--ph-spacing-4, 4px));
    }

    :host([visible]) .tooltip--left,
    .tooltip--left.tooltip--visible {
      transform: translateY(-50%) translateX(0);
    }

    .tooltip--left .tooltip__arrow {
      right: -3px;
      top: 50%;
      transform: translateY(-50%) rotate(45deg);
    }

    /* Position: Right */
    .tooltip--right {
      left: calc(100% + var(--ph-spacing-8, 8px));
      top: 50%;
      transform: translateY(-50%) translateX(calc(-1 * var(--ph-spacing-4, 4px)));
    }

    :host([visible]) .tooltip--right,
    .tooltip--right.tooltip--visible {
      transform: translateY(-50%) translateX(0);
    }

    .tooltip--right .tooltip__arrow {
      left: -3px;
      top: 50%;
      transform: translateY(-50%) rotate(45deg);
    }

    /* Accessibility */
    .tooltip[role="tooltip"] {
      user-select: none;
    }
  `;

  /**
   * The content to display in the tooltip
   */
  @property({ type: String })
  content = 'This is a Tooltip';

  /**
   * Position of the tooltip relative to the trigger element
   * Matches Figma Position variants
   */
  @property({ type: String })
  position: TooltipPosition = 'top-left';

  /**
   * Force tooltip to be always visible (useful for development/inspection)
   */
  @property({ type: Boolean, reflect: true })
  visible = false;

  /**
   * Internal state for hover visibility
   */
  @state()
  private isHovered = false;

  private handleMouseEnter = () => {
    if (!this.visible) {
      this.isHovered = true;
    }
  };

  private handleMouseLeave = () => {
    if (!this.visible) {
      this.isHovered = false;
    }
  };

  private getTooltipClasses() {
    const classes = [
      'tooltip',
      `tooltip--${this.position}`,
    ];

    if (this.visible || this.isHovered) {
      classes.push('tooltip--visible');
    }

    return classes.join(' ');
  }

  render() {
    const showTooltip = this.visible || this.isHovered;

    return html`
      <div
        class="tooltip-trigger"
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
        part="trigger"
      >
        <slot></slot>
      </div>
      ${showTooltip ? html`
        <div class="${this.getTooltipClasses()}" role="tooltip" part="tooltip">
          <div class="tooltip__arrow" part="arrow"></div>
          <div class="tooltip__content" part="content">${this.content}</div>
        </div>
      ` : ''}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'liva-tooltip': LivaTooltip;
  }
}
