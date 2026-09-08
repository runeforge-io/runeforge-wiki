<script lang="ts">
  import { Tooltip, type WithoutChildrenOrChild } from 'bits-ui';
  import type { Snippet } from 'svelte';

  let {
    children,
    sideOffset = 8,
    side = 'top',
    class: className,
    ...restProps
  }: WithoutChildrenOrChild<Tooltip.ContentProps> & {
    children?: Snippet;
    class?: string;
  } = $props();
</script>

<Tooltip.Portal>
  <Tooltip.Content {sideOffset} {side} class="tooltip-content {className ?? ''}" {...restProps}>
    {#if children}
      {@render children()}
    {/if}
  </Tooltip.Content>
</Tooltip.Portal>

<style>
  /* Portalled to the end of <body>, so the class is global rather than scoped. */
  :global(.tooltip-content) {
    z-index: 50;
    overflow: hidden;
    border: 1px solid var(--sl-color-gray-4);
    border-radius: var(--rf-radius-md);
    background-color: var(--sl-color-gray-5);
    padding: 0.5rem 0.75rem;
    font-size: 0.75rem;
    line-height: 1.5;
    color: var(--sl-color-white);
    box-shadow: 0 4px 12px color-mix(in srgb, var(--sl-color-black) 45%, transparent);
    animation: tooltip-in var(--rf-dur-in) var(--rf-ease-snap);
  }

  /* Frosted only where the blur can carry the loss of fill; browsers without
     backdrop-filter keep the solid panel above. */
  @supports (backdrop-filter: blur(1px)) or (-webkit-backdrop-filter: blur(1px)) {
    :global(.tooltip-content) {
      background-color: color-mix(in srgb, var(--sl-color-gray-5) 72%, transparent);
      -webkit-backdrop-filter: blur(10px);
      backdrop-filter: blur(10px);
    }
  }

  @keyframes tooltip-in {
    from {
      opacity: 0;
      transform: scale(0.96);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    :global(.tooltip-content) {
      animation: none;
    }
  }
</style>
