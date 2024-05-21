<script lang="ts">
  import TableList from '../../components/Table-with-action-icons.svelte';
  import { db } from '../../lib/firebase.client';
  import { ref, onValue, push, set, remove } from "firebase/database";
  import { rents, type Rent } from '$lib/rents';
  import { onMount } from 'svelte';
  import Modal from '../../components/Modal.svelte';
  import FormRent from '../../components/FormRent.svelte'
  import { v4 as uuidv4 } from 'uuid';
  import dayjs from 'dayjs'
  import Swal from 'sweetalert2'

	let showModal = false;
  let modalTitle = '';

  let sortProperty = 'endDate';
  let pickedRent: Rent = {
  created: '',
  email: '',
  endDate: '',
  index: '',
  name: '',
  note: '',
  phone: '',
  shipping: false,
  startDate: '',
  updated: '',
  seatName: '',
  part: {
    color: '',
    created: '',
    index: '',
    name: '',
    note: '',
    productionDate: '',
    rentstart: '',
    serialNumber: '',
    type: '',
    updated: '',
  }
}

  let hasRents: boolean = false;
  let coloumns: string[] = ['Sitz', 'Mieter', 'Email', 'Startdatum', 'Enddatum']
  let properties: string[] = ['seatName', 'name', 'email', 'startDate', 'endDate']

  function getDatabaseRentData() {
    const rentRef = ref(db, 'rent-baby-seat');
    onValue(rentRef, (snapshot) => {
      const rentData = snapshot.val();
      $rents = Object.values(rentData);
      $rents = $rents.map(rent => { rent.seatName = rent.part.name; return rent});
      $rents.sort(sortByColumn).reverse();
    });
  }

  function clearRentObject() {
    pickedRent = {
      created: '',
      email: '',
      endDate: '',
      index: '',
      name: '',
      note: '',
      phone: '',
      shipping: false,
      startDate: '',
      updated: '',
      seatName: '',
      part: {
        color: '',
        created: '',
        index: '',
        name: '',
        note: '',
        productionDate: '',
        rentstart: '',
        serialNumber: '',
        type: '',
        updated: '',
      }
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
    pickedRent = event.detail.item;
    modalTitle = 'Miete bearbeiten'
    showModal = true;
  }

  function handleDeleteItem(event: any) {
    pickedRent = event.detail.item;
    Swal.fire({
      title: 'Vermietung löschen?',
      text: 'Möchtest Du die Vermietung wirklich löschen?',
      icon: 'error',
      allowOutsideClick: false,
      showDenyButton: true,
      confirmButtonText: 'Löschen',
      denyButtonText: 'Nein',
    }).then(async(result: any) => {
      if (result.isConfirmed) {
        await remove(ref(db, `rent-baby-seat/${event.detail.item.index}`))
        Swal.fire({
          text: 'Vermietung wurde gelöscht',
          icon: 'success',
          allowOutsideClick: false,
          showConfirmButton: false,
          timer: 2000,
        })
      }
      else if (result.isDenied) {
        Swal.fire({
          text: 'Vermietung wurde nicht gelöscht',
          icon: 'info',
          allowOutsideClick: false,
          showConfirmButton: false,
          timer: 2000,
        })
      }
    })
  }

  function handleNewItem(event: any) {
    clearRentObject();
    modalTitle = 'Neue Miete'
    showModal = true;
  }

  function handleSaveItem(event: any) {
    showModal = false;
    if (event.detail.item.index === '') {
      event.detail.item.index = uuidv4()
      event.detail.item.created = dayjs().format('DD.MM.YYYY HH:mm:ss')
    }
    event.detail.item.updated = dayjs().format('DD.MM.YYYY HH:mm:ss')
    set(ref(db, `rent-baby-seat/${event.detail.item.index}`), event.detail.item)
    .then(() => {
      Swal.fire({
        title: 'Miete gespeichert',
        text: `Miete wurde angelegt`,
        icon: 'success',
        allowOutsideClick: false,
        showConfirmButton: false,
        timer: 2000,
      })
    })
    .catch((error) => {
      Swal.fire({
        title: 'Miete wurde nicht gespeichert',
        text: ``,
        icon: 'error',
        allowOutsideClick: false,
        showConfirmButton: false,
        timer: 2000,
      })
      console.log('Save error: ' + error)
    });
  }

  function handleSortByCloumn(event: any) {
    sortProperty = event.detail.property;
    $rents = $rents.sort(sortByColumn).reverse();
  }

  $: hasRents = !!$rents ? true : false;

  onMount(() => {
		getDatabaseRentData();
	});
</script>

<svelte:head>
    <title>Bear Seat Manager - Mieten</title> 
</svelte:head>

<Modal bind:showModal>
	<h2 slot="header">
		{modalTitle}
	</h2>

	<FormRent on:saveRent={handleSaveItem} rentObject={pickedRent} />
</Modal>
{#if hasRents}
   <TableList on:editItem={handleEditItem} on:deleteItem={handleDeleteItem} on:newItem={handleNewItem} on:sortColumn={handleSortByCloumn} columns={coloumns} data={$rents} properties={properties}/>
{/if}
