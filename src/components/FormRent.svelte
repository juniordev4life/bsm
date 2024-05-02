<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import type { Rent } from '$lib/rents';
	import { db } from '../lib/firebase.client';
  import { ref, onValue } from "firebase/database";
  import { seats, type Seat } from '$lib/seats';
	import { onMount } from 'svelte';

	const dispatch = createEventDispatcher();

	export let rentObject: Rent;

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
		dispatch('saveRent', {
			item: rentObject
		});
	}

	$: hasSeats = !!$seats ? true : false;

	onMount(() => {
		getDatabaseSeatData();
	});
</script>

{#if hasSeats}
<div class="flex gap-4 flex-col mt-3">
	<div class="flex gap-1 flex-col">
		<label>Sitz</label>
	{#if rentObject.name === ''}
		<select  bind:value={seatSelected} aria-label="Sitz" on:change={() => (rentObject.part = seatSelected)}>
			{#each $seats as seat}
				 <option value={seat}>{seat.name}</option>
			{/each}
		</select>
	{:else}
		<input bind:value={rentObject.part.name} type="text" readonly disabled aria-label="Sitz" />
	{/if}
	</div>
	<div class="flex gap-2">
		<div class="flex gap-1 flex-col">
			<label>Von</label>
			<input  bind:value={rentObject.startDate} type="date" aria-label="Von" />
		</div>
		<div class="flex gap-1 flex-col">
			<label>Bis</label>
			<input  bind:value={rentObject.endDate} type="date" aria-label="Bis" />
		</div>
	</div>
	<div class="flex gap-1 flex-col">
		<label>Name</label>
		<input  bind:value={rentObject.name} type="text" aria-label="Name" />
	</div>
	<div class="flex gap-1 flex-col">
		<label>E-Mail</label>
		<input  bind:value={rentObject.email} type="text" aria-label="E-Mail" />
	</div>
	<div class="flex gap-1 flex-col">
		<label>Telefon</label>
		<input  bind:value={rentObject.phone} type="text" aria-label="Telefon" />
	</div>
	<div class="flex gap-1 flex-row">
		<label>Mit Versand</label>
		<input  bind:value={rentObject.shipping} type="checkbox" aria-label="Mit Versand" />
	</div>
	<div class="flex gap-1 flex-col">
		<label>Notiz</label>
		<input  bind:value={rentObject.note} type="text" aria-label="Notiz" />
	</div>
	<div class="mt-5 flex justify-center gap-x-8 text-center">
		<button class="p-2 pl-5 pr-5 bg-blue-500 text-gray-100 text-lg rounded-lg focus:border-4 border-blue-300" on:click={saveItem}>
			Speichern
		</button>
	</div>
</div>
{/if}

<style>
  input, select {
    @apply bg-white border-2 border-gray-400 px-2 py-1 rounded
  }
</style>
