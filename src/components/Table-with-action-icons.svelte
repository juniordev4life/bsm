<script lang='ts'>
  import { createEventDispatcher } from 'svelte';

  export let columns: Array<string>
  export let data: any
  export let properties: Array<string>

	const dispatch = createEventDispatcher();

	function editItem(item: any) {
		dispatch('editItem', {
			item
		});
	}

  function deleteItem(item: any) {
		dispatch('deleteItem', {
			item
		});
	}

  function sortColumn(column: any) {
    const property = properties[columns.indexOf(column)]
		dispatch('sortColumn', {
			property
		});
	}

  function newItem() {
    dispatch('newItem');
  }
</script>

<div class="overflow-x-auto">
  <table class="min-w-full bg-white font-[sans-serif] mt-4">
    <thead class="bg-[#e93997] whitespace-nowrap">
      <tr>
      {#each columns as column}
        <th class="px-6 py-3 text-left text-sm font-semibold text-white">
          <button on:click={sortColumn(column)}>{column}</button>
        </th>
      {/each}
        <th class="px-6 py-3 text-left text-sm font-semibold text-white">
          <button class="mr-4 mt-2" title="New" on:click={newItem}>
          <svg viewBox="0 0 24 24" class="w-6 fill-blue-500 hover:fill-blue-700" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z" stroke="#ffffff" stroke-width="1.5"/>
          <path d="M15 12L12 12M12 12L9 12M12 12L12 9M12 12L12 15" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
          </button>
        </th>
      </tr>
    </thead>
    <tbody class="whitespace-nowrap">
      {#each data as item}
      <tr class="even:bg-blue-50">
        {#each properties as property}
          <td class="px-6 py-4 text-sm">
            {item[property]}
          </td>
        {/each}
        <td class="px-6 py-4">
          <button class="mr-4" title="Edit" on:click={editItem(item)}>
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 fill-blue-500 hover:fill-blue-700"
              viewBox="0 0 348.882 348.882">
              <path
                d="m333.988 11.758-.42-.383A43.363 43.363 0 0 0 304.258 0a43.579 43.579 0 0 0-32.104 14.153L116.803 184.231a14.993 14.993 0 0 0-3.154 5.37l-18.267 54.762c-2.112 6.331-1.052 13.333 2.835 18.729 3.918 5.438 10.23 8.685 16.886 8.685h.001c2.879 0 5.693-.592 8.362-1.76l52.89-23.138a14.985 14.985 0 0 0 5.063-3.626L336.771 73.176c16.166-17.697 14.919-45.247-2.783-61.418zM130.381 234.247l10.719-32.134.904-.99 20.316 18.556-.904.99-31.035 13.578zm184.24-181.304L182.553 197.53l-20.316-18.556L294.305 34.386c2.583-2.828 6.118-4.386 9.954-4.386 3.365 0 6.588 1.252 9.082 3.53l.419.383c5.484 5.009 5.87 13.546.861 19.03z"
                data-original="#000000" />
              <path
                d="M303.85 138.388c-8.284 0-15 6.716-15 15v127.347c0 21.034-17.113 38.147-38.147 38.147H68.904c-21.035 0-38.147-17.113-38.147-38.147V100.413c0-21.034 17.113-38.147 38.147-38.147h131.587c8.284 0 15-6.716 15-15s-6.716-15-15-15H68.904C31.327 32.266.757 62.837.757 100.413v180.321c0 37.576 30.571 68.147 68.147 68.147h181.798c37.576 0 68.147-30.571 68.147-68.147V153.388c.001-8.284-6.715-15-14.999-15z"
                data-original="#000000" />
            </svg>
          </button>
          <button class="mr-4" title="Delete" on:click={deleteItem(item)}>
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 fill-red-500 hover:fill-red-700" viewBox="0 0 24 24">
              <path
                d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                data-original="#000000" />
              <path d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
                data-original="#000000" />
            </svg>
          </button>
        </td>
      </tr>
      {/each}
    </tbody>
  </table>
</div>