<script>
  import { onMount } from "svelte";
  import generateCalendar, {
    listOfDishes,
    month,
    weekdays,
    year,
  } from "../DummyData";
  import { loggedData, todayMeal } from "../store";
  import { get } from "svelte/store";
  // generate today
  const currentDate = new Date();
  // generate all days for that month calendar
  $: days = generateCalendar(year, month);
  $: monthName = new Date(year, month).toLocaleString("default", {
    month: "long",
  });
  // get the logged day
  let logged;
  loggedData.subscribe((meals) => (logged = meals));
  // show the data logged in that day
  let showData = (date) => {
    console.log("changed", date);
    if (Object.hasOwn(logged, date)) {
      let allMeals = [];

      logged[date].forEach((element) => {
        allMeals.push(element);
      });

      for (let i in allMeals) {
        allMeals[i] = listOfDishes[allMeals[i]];
      }

      todayMeal.set(allMeals);
    }
  };

  let loggedDays;
  loggedData.subscribe((days) => (loggedDays = days));
</script>

<div class="calendar">
  <h2>{monthName} {year}</h2>
  <div class="weekdays">
    {#each weekdays as day}
      <div class="weekday">{day}</div>
    {/each}
  </div>
  <div class="days">
    {#each days as day}
      {#if day}
        <div
          class={day.getDate() === currentDate.getDate()
            ? "current-day"
            : Object.hasOwn(
                  loggedDays,
                  `${day.getDate()}/${day.getMonth() + 1}/${day.getFullYear()}`
                )
              ? "logged-day"
              : "day"}
          on:click={showData(
            `${day.getDate()}/${day.getMonth() + 1}/${day.getFullYear()}`
          )}
        >
          {day.getDate()}
        </div>
      {:else}
        <div class="day empty"></div>
      {/if}
    {/each}
  </div>
</div>

<style>
  .calendar {
    max-width: 400px;
    margin: 0 auto;
  }

  .weekdays {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    text-align: center;
    font-weight: bold;
  }

  .days {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
  }

  .day {
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #ddd;
  }

  .logged-day {
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #ddd;
    background-color: #c7f9cc;
    cursor: pointer;
  }

  .current-day {
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ffbfca;
    border: 1px solid #ddd;
  }

  .empty {
    background-color: #f0f0f0;
  }
</style>
