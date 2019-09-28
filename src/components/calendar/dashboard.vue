<template>
  <div class="calendar-dashboard">
    <div class="container">

      <div class="columns col-gapless h-full">
        <div class="column col-6">
          <div>
            <div class="calendar-label">TODAY</div>
            <div class="calendar-items">
              <div class="calendar-item">
                2:20pm Owen's Early Release
              </div>
              <div class="calendar-item">
                3:00pm Little Ninja's Class
              </div>
            </div>
          </div>
        </div>
        <div class="column col-6">
          <div>
            <div class="calendar-label">UPCOMING</div>
            <div class="calendar-items">
              <div class="calendar-item">
               No upcoming events
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  </div>
</template>
<style scoped>
  .calendar-dashboard {
    padding-left: 20px;
    padding-right: 20px;
    text-align: center;
  }
  .calendar-label {
    font-weight: bold;
  }
  .calendar-item {
    margin-top: 5px;
    padding: 5px;

  }
</style>
