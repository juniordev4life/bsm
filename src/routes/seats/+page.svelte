<script lang="ts">
  import TableList from '../../components/Table-with-action-icons.svelte';
  import { db } from '../../lib/firebase.client';
  import { ref, onValue, push, update, remove } from "firebase/database";
  import { seats } from '$lib/seats';
  import { onMount } from 'svelte';
  import Modal from '../../components/Modal.svelte';

	let showModal = false;
  let modalTitle = '';

  let sortProperty = 'name';

  let hasSeats: boolean = false;
  let coloumns: string[] = ['Name', 'Seriennummer', 'Farbe', 'Flugzeugzulassung', 'Ender Vermietung']
  let properties: string[] = ['name', 'serialNumber', 'color', 'note', 'rentend']

  function getDatabaseData() {
    const starCountRef = ref(db, 'baby-seat');
    onValue(starCountRef, (snapshot) => {
      const seatData = snapshot.val();
      $seats = Object.values(seatData);
    });
  }

  function sortByColumn( a: any, b: any ) {
    if ( a[sortProperty] < b[sortProperty] ){
      return -1;
    }
    if ( a[sortProperty] > b[sortProperty] ){
      return 1;
    }
    return 0;
  }

  function handleEditItem(event: any) {
    modalTitle = 'Sitz bearbeiten'
    showModal = true;
  }

  function handleDeleteItem(event: any) {
    modalTitle = 'Sitz löschen'
    showModal = true;
  }

  function handleNewItem(event: any) {
    modalTitle = 'Neuer Sitz'
    showModal = true;
  }

  function handleSortByCloumn(event: any) {
    sortProperty = event.detail.property;
    $seats = $seats.sort(sortByColumn).reverse();
  }

  $: hasSeats = !!$seats ? true : false;

  onMount(() => {
		getDatabaseData();
	});
</script>

<svelte:head>
    <title>Bear Seat Manager - Babysitze</title> 
</svelte:head>

<Modal bind:showModal>
	<h2 slot="header">
		{modalTitle}
	</h2>

	<div>
    
  </div>

	<a href="https://www.merriam-webster.com/dictionary/modal">merriam-webster.com</a>
</Modal>
{#if hasSeats}
   <TableList on:editItem={handleEditItem} on:deleteItem={handleDeleteItem} on:newItem={handleNewItem} on:sortColumn={handleSortByCloumn} columns={coloumns} data={$seats} properties={properties}/>
{/if}
