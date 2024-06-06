<script lang="ts">
  import { createEventDispatcher } from 'svelte';
	import { db } from '../lib/firebase.client';
  import { ref, onValue } from "firebase/database";
  import { seats, type Seat } from '$lib/seats';
	import { onMount } from 'svelte';

  const dispatch = createEventDispatcher();

	export let seatObject: Seat;

  let hasSeats = false;
	let seatSelected: Seat;

  function getDatabaseSeatData() {
    const seatRef = ref(db, 'baby-seat');
    onValue(seatRef, (snapshot) => {
      const seatData = snapshot.val();
      $seats = Object.values(seatData);
    });
  }

  function saveItem() {
		dispatch('saveSeat', {
			item: seatObject
		});
	}

  $: hasSeats = !!$seats ? true : false;

  onMount(() => {
		getDatabaseSeatData();
	});
</script>

{#if hasSeats}
<div class="w-[300px] mt-4">
  <div class="flex flex-col mb-4">
    <label for="serialnumber" class="mb-1">Seriennummer</label>
    <input id="serialnumber" bind:value="{seatObject.serialNumber}" type="text" aria-label="Seriennummer" />
  </div>
  <div class="flex flex-col mb-4">
    <label for="name">Name</label>
    <input id="name" bind:value="{seatObject.name}" type="text" aria-label="Name" />
  </div>
  <div class="flex flex-col mb-4">
    <label for="productiondate">Produktionsdatum</label>
    <input id="productiondate" bind:value="{seatObject.productionDate}" type="date" aria-label="Produktionsdatum" />
  </div>
  <div class="flex flex-col mb-4">
    <label for="color">Farbe</label>
    <input id="color" bind:value="{seatObject.color}" type="text" aria-label="Farbe" />
  </div>
  <div class="flex flex-col mb-4">
    <label for="note">Bemerkung</label>
    <textarea id="note" bind:value="{seatObject.note}" aria-label="Bemerkung" />
  </div>
  <div class="flex flex-col mb-4">
    <label for="rentstart">Beginn Vermietung</label>
    <input id="rentstart" bind:value="{seatObject.rentstart}" type="date" aria-label="Beginn der Vermietung" />
  </div>
  <div class="flex flex-col mb-4">
    <label for="rentend">Ende Vermietung</label>
    <input id="rentend" bind:value="{seatObject.rentend}" type="date" aria-label="Ende der Vermietung" />
  </div>
  <div class="mt-5 text-center">
    <button class="p-2 pl-5 pr-5 bg-blue-500 text-gray-100 text-lg rounded-lg focus:border-4 border-blue-300" on:click={saveItem}>
    Speichern
    </button>
  </div>
</div>
{/if}

<style>
  input, textarea {
    @apply bg-white border-2 border-gray-400 px-2 py-1 rounded
  }
</style>
