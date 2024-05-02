<script lang="ts">
	import type { Seat } from '$lib/seats';

	export let seatObject: Seat;
</script>

<div class="w-full">
    <div class="flex flex-col mb-4">
      <label class="mb-1">Seriennummer</label>
      <input bind:value="{seatObject.serialNumber}" type="text" aria-label="Seriennummer" />
    </div>
    <div class="flex flex-col mb-4">
      <label>Name</label>
      <input bind:value="{seatObject.name}" type="text" aria-label="Name" />
    </div>
    <div class="flex flex-col mb-4">
      <label>Produktionsdatum</label>
      <input bind:value="{seatObject.productionDate}" type="date" aria-label="Produktionsdatum" />
    </div>
    <div class="flex flex-col mb-4">
      <label>Farbe</label>
      <input bind:value="{seatObject.color}" type="text" aria-label="Farbe" />
    </div>
    <div class="flex flex-col mb-4">
      <label>Flugzulassung</label>
      <input bind:value="{seatObject.allowedonplain}" type="checkbox" aria-label="Farbe" />
    </div>
    <div class="flex flex-col">
      <label>Bemerkung</label>
      <textarea bind:value="{seatObject.note}" aria-label="Bemerkung" />
    </div>
    <div class="flex flex-col mb-4">
      <label>Beginn Vermietung</label>
      <input bind:value="{seatObject.rentstart}" type="date" aria-label="Beginn der Vermietung" />
    </div>
    <div class="flex flex-col mb-4">
      <label>Ende Vermietung</label>
      <input bind:value="{seatObject.rentend}" type="date" aria-label="Ende der Vermietung" />
    </div>
  </div>
  <div class="mt-5 text-center">
    <button class="p-2 pl-5 pr-5 bg-blue-500 text-gray-100 text-lg rounded-lg focus:border-4 border-blue-300">
      Speichern
    </button>
  </div>

<style>
  input {
    @apply bg-white border-2 border-gray-400 px-2 py-1 rounded
  }
</style>
