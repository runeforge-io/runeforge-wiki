<script lang="ts">
  import * as Tooltip from './ui/tooltip/index.js';

  interface Chip {
    label: string;
    /** Tooltip body: the one-line meaning of the tag, from the vocabulary. */
    description: string;
    facet: string;
    href: string;
    /** Filled bars in the level meter. Zero on every other facet. */
    bars: number;
  }

  interface Props {
    groups: { facet: string; label: string; tags: Chip[] }[];
    /** Icon URLs, resolved by Vite in the Astro parent. */
    wrenchIcon: string;
    warningIcon: string;
  }

  let { groups, wrenchIcon, warningIcon }: Props = $props();

  const METER_BARS = [1, 2, 3];
</script>

<nav class="page-tags not-content" aria-label="Page tags">
  <Tooltip.Provider>
    <dl>
      {#each groups as group (group.facet)}
        <div class="group">
          <dt>{group.label}</dt>
          <dd>
            {#each group.tags as tag (tag.href)}
              <Tooltip.Root>
                <Tooltip.Trigger>
                  {#snippet child({ props })}
                    <!-- The trigger props are shaped for a <button>. On an anchor `type` is
                         a MIME hint, so "button" is a bogus value; undefined drops it. -->
                    <a
                      {...props}
                      type={undefined}
                      class="tag"
                      data-facet={tag.facet}
                      href={tag.href}
                    >
                      {#if tag.facet === 'level'}
                        <span class="meter" aria-hidden="true">
                          {#each METER_BARS as bar (bar)}
                            <span class="bar" data-filled={bar <= tag.bars}></span>
                          {/each}
                        </span>
                      {:else if tag.facet === 'tool'}
                        <span class="glyph" aria-hidden="true" style="--icon: url({wrenchIcon})"
                        ></span>
                      {:else if tag.facet === 'status'}
                        <span class="glyph" aria-hidden="true" style="--icon: url({warningIcon})"
                        ></span>
                      {/if}
                      {tag.label}
                    </a>
                  {/snippet}
                </Tooltip.Trigger>
                <Tooltip.Content side="bottom" class="tag-tip">{tag.description}</Tooltip.Content>
              </Tooltip.Root>
            {/each}
          </dd>
        </div>
      {/each}
    </dl>
  </Tooltip.Provider>
</nav>

<style>
  .page-tags {
    margin-block-start: 0.75rem;
  }

  /* Groups flow inline and wrap as units; the column gap is wide enough that a
     wrapped group still reads as belonging to its own label. */
  dl {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem 1.25rem;
    margin: 0;
  }

  .group {
    display: flex;
    align-items: baseline;
    gap: 0.45rem;
  }

  dt {
    font-size: 0.6875rem;
    font-weight: var(--rf-weight-medium);
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--sl-color-gray-3);
    white-space: nowrap;
  }

  dd {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
    margin: 0;
  }

  .tag {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    padding: 0.15rem 0.55rem;
    border: 1px solid var(--sl-color-gray-5);
    border-radius: var(--rf-radius-sm);
    font-size: 0.75rem;
    font-weight: var(--rf-weight-medium);
    line-height: 1.5;
    color: var(--sl-color-gray-2);
    text-decoration: none;
    white-space: nowrap;
    transition:
      color var(--rf-dur-out) var(--rf-ease-snap),
      border-color var(--rf-dur-out) var(--rf-ease-snap),
      background-color var(--rf-dur-out) var(--rf-ease-snap);
  }

  .tag:hover {
    border-color: var(--sl-color-gray-4);
    background-color: color-mix(in srgb, var(--sl-color-gray-5) 45%, transparent);
    color: var(--sl-color-white);
    transition-duration: var(--rf-dur-in);
  }

  .tag[data-facet='level'] {
    border-color: color-mix(in srgb, var(--rf-crimson) 45%, transparent);
    color: var(--sl-color-accent-high);
  }

  .tag[data-facet='level']:hover {
    border-color: var(--rf-crimson);
    background-color: color-mix(in srgb, var(--rf-crimson) 12%, transparent);
    color: var(--sl-color-accent-high);
  }

  .tag[data-facet='tool'] {
    color: var(--sl-color-gray-3);
  }

  .tag[data-facet='tool'] .glyph {
    opacity: 0.7;
  }

  .tag[data-facet='status'] {
    border-color: color-mix(in srgb, var(--sl-color-orange) 55%, transparent);
    color: var(--sl-color-orange-high);
    text-transform: uppercase;
    letter-spacing: 0.03em;
    font-weight: var(--rf-weight-semibold);
  }

  .tag[data-facet='status']:hover {
    border-color: var(--sl-color-orange);
    background-color: color-mix(in srgb, var(--sl-color-orange) 12%, transparent);
    color: var(--sl-color-orange-high);
  }

  /* Bar count is the level, so the three chips stay one colour and the reader
     never has to decode a hue. Unfilled bars keep their slot for the shape. */
  .meter {
    display: inline-flex;
    align-items: flex-end;
    gap: 1px;
    height: 0.6em;
  }

  .bar {
    width: 2px;
    background-color: currentColor;
    opacity: 0.25;
  }

  .bar:nth-child(1) {
    height: 40%;
  }

  .bar:nth-child(2) {
    height: 70%;
  }

  .bar:nth-child(3) {
    height: 100%;
  }

  .bar[data-filled='true'] {
    opacity: 1;
  }

  .glyph {
    flex-shrink: 0;
    width: 0.9em;
    height: 0.9em;
    background-color: currentColor;
    -webkit-mask: var(--icon) center / contain no-repeat;
    mask: var(--icon) center / contain no-repeat;
  }

  .tag:focus-visible {
    outline: 2px solid var(--sl-color-accent);
    outline-offset: 2px;
  }

  /* Wider than the prose default: a tag description is a full sentence, and
     wrapping it to two lines beats a strip the width of the viewport. */
  :global(.tag-tip) {
    max-width: 20rem;
  }

  /* Narrow screens: one group per line, so a label never ends up stranded
     above or beside a group it does not belong to. */
  @media (max-width: 30rem) {
    dl {
      flex-direction: column;
      gap: 0.4rem;
    }
  }

  @media print {
    .page-tags {
      display: none;
    }
  }
</style>
