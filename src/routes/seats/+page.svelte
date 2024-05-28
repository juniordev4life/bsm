<script lang="ts">
  import TableList from '../../components/Table-with-action-icons.svelte';
  import { db } from '../../lib/firebase.client';
  import { ref, onValue, set, remove } from "firebase/database";
  import { seats, type Seat } from '$lib/seats';
  import { onMount } from 'svelte';
  import Modal from '../../components/Modal.svelte';
  import FormSeat from '../../components/FormSeat.svelte'
  import { v4 as uuidv4 } from 'uuid';
  import dayjs from 'dayjs'
  import Swal from 'sweetalert2'

	let showModal = false;
  let modalTitle = '';

  let sortProperty = 'name';
  let pickedSeat: Seat = {
    color: '',
    created: '',
    index: '',
    name: '',
    note: '',
    productionDate: '',
    rentstart: '',
    rentend: '',
    serialNumber: '',
    type: '',
    updated: ''
  }

  let hasSeats: boolean = false;
  let coloumns: string[] = ['Name', 'Seriennummer', 'Farbe', 'Ender Vermietung']
  let properties: string[] = ['name', 'serialNumber', 'color', 'rentend']

  function getDatabaseData() {
    const starCountRef = ref(db, 'baby-seat');
    onValue(starCountRef, (snapshot) => {
      const seatData = snapshot.val();
      $seats = Object.values(seatData);
    });
  }

  function clearSeatObject() {
    pickedSeat = {
      color: '',
      created: '',
      index: '',
      name: '',
      note: '',
      productionDate: '',
      rentstart: '',
      rentend: '',
      serialNumber: '',
      type: '',
      updated: ''
    }
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
    pickedSeat = event.detail.item;
    console.log(pickedSeat)
    modalTitle = 'Sitz bearbeiten'
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

  function handleDeleteItem(event: any) {
    pickedSeat = event.detail.item;
    Swal.fire({
      title: 'Sitz löschen?',
      text: 'Möchtest Du den Sitz wirklich löschen?',
      icon: 'error',
      allowOutsideClick: false,
      showDenyButton: true,
      confirmButtonText: 'Löschen',
      denyButtonText: 'Nein',
    }).then(async(result: any) => {
      if (result.isConfirmed) {
        await remove(ref(db, `baby-seat/${event.detail.item.index}`))
        Swal.fire({
          text: 'Sitz wurde gelöscht',
          icon: 'success',
          allowOutsideClick: false,
          showConfirmButton: false,
          timer: 2000,
        })
        setInterval(() => {
          location.reload()
        }, 2000)
      }
      else if (result.isDenied) {
        Swal.fire({
          text: 'Sitz wurde nicht gelöscht',
          icon: 'info',
          allowOutsideClick: false,
          showConfirmButton: false,
          timer: 2000,
        })
      }
    })
  }

  function handleSaveItem(event: any) {
    showModal = false;
    if (event.detail.item.index === '') {
      event.detail.item.index = uuidv4()
      event.detail.item.created = dayjs().format('DD.MM.YYYY HH:mm:ss')
    }
    event.detail.item.updated = dayjs().format('DD.MM.YYYY HH:mm:ss')
    set(ref(db, `baby-seat/${event.detail.item.index}`), event.detail.item)
    .then(() => {
      Swal.fire({
        title: 'Sitz gespeichert',
        text: `Sitz wurde angelegt`,
        icon: 'success',
        allowOutsideClick: false,
        showConfirmButton: false,
        timer: 2000,
      })
      setInterval(() => {
        location.reload()
      }, 2000)
    })
    .catch((error) => {
      Swal.fire({
        title: 'Sitz wurde nicht gespeichert',
        text: ``,
        icon: 'error',
        allowOutsideClick: false,
        showConfirmButton: false,
        timer: 2000,
      })
      console.log('Save error: ' + error)
    });
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

  <FormSeat on:saveSeat={handleSaveItem} seatObject={pickedSeat} />
</Modal>
{#if hasSeats}
   <TableList on:editItem={handleEditItem} on:deleteItem={handleDeleteItem} on:newItem={handleNewItem} on:sortColumn={handleSortByCloumn} columns={coloumns} data={$seats} properties={properties}/>
{/if}
