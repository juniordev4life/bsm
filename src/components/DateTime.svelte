<script lang="ts">
    export let value: Date | null;
    $: {
        parseDate(value);
    }

    let dateStr = '';
    let timeStr = '';
    $: {
        emitDate(dateStr, timeStr);
    }

    function parseDate(dateObj: Date | null) {
        if(dateObj) {
            const [date, time] = new Date(dateObj).toLocaleString("sv-SE").split(' ');
            dateStr = date;
            timeStr = time;
        }
    }

    function emitDate(date: string, time: string) {
        if(date && time) {
            value = new Date(`${date} ${time}`);
        } else {
            value = null;
        }
    }
</script>

<style>
    .date-time {
        display: flex;
    }

    input {
        border: 0;
        border-bottom: 1px solid #cc595e;
        background: #cc595e36;
    }
</style>

<div class="date-time">
    <input type="date" bind:value={dateStr}>
    <input type="time" bind:value={timeStr}>
</div>