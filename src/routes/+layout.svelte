<script lang="ts">
 import { onMount } from 'svelte';
 import { session } from '$lib/session';
 import { goto } from '$app/navigation';
 import { signOut } from 'firebase/auth';
 import { auth } from '$lib/firebase.client';
 import Sidebar from '../components/Sidebar.svelte'
 import "../app.css";

 import type { LayoutData } from './$types';
 export let data: LayoutData;

 let loading: boolean = true;
 let loggedIn: boolean = false;

 session.subscribe((cur: any) => {
  loading = cur?.loading;
  loggedIn = cur?.loggedIn;
 });

 onMount(async () => {
  const user: any = await data.getAuthUser();

  const loggedIn = !!user;
  session.update((cur: any) => {
   loading = false;
   return {
    ...cur,
    user,
    loggedIn,
    loading: false
   };
  });

  if (!loggedIn) {
   goto('/');
  }
 });

</script>

{#if loading}
 <div>Loading...</div>
{:else}
<div class="flex">
  {#if loggedIn}
    <Sidebar />
  {/if}
  <div class="container mx-auto">
   <slot />
  </div>
</div>
  
{/if}