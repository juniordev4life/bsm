<script lang="ts">
  export let task: { label: string; from: Moment; to: Moment };
  export let coordinates: { x: number; y: number };
  export let isVisible: boolean;
</script>

{#if isVisible}
   <div class="bg-white p-2 rounded z-50" style="position:absolute; top:{coordinates.y}px; left:{coordinates.x}px;">
    <div class="sg-popup-title">{task.label}</div>
    <div class="sg-popup-item">
        <div class="sg-popup-item-label">Von:</div>
        <div class="sg-popup-item-value">{task.from.format('dddd DD.MM.YYYY')}</div>
    </div>
    <div class="sg-popup-item">
        <div class="sg-popup-item-label">Bis:</div>
        <div class="sg-popup-item-value">{task.to.format('dddd DD.MM.YYYY')}</div>
    </div>
  </div>
{/if}
