<template>
  <div class='demo-app'>
    <div class='demo-app-top'>
      <button @click="toggleWeekends">toggle weekends</button>
      <button @click="gotoPast">go to a date in the past</button>
      (also, click a date/time to add an event)
    </div>
    <FullCalendar
      class='demo-app-calendar'
      ref="fullCalendar"
      defaultView="dayGridMonth"
      :header="{
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
      }"
      :plugins="calendarPlugins"
      :weekends="calendarWeekends"
      :events="calendarEvents"
      :editable="true"
      :selectable="true"
      @select="handleSelect"
      @eventClick="handleClick"
    />
  </div>
</template>

<script>
import FullCalendar from '@fullcalendar/vue';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

export default {
  components: {
    FullCalendar, // make the <FullCalendar> tag available
  },
  data() {
    return {
      calendarPlugins: [ // plugins must be defined in the JS
        dayGridPlugin,
        timeGridPlugin,
        interactionPlugin, // needed for dateClick
      ],
      calendarWeekends: true,
      calendarEvents: [ // initial event data
        {
          title: 'Event Now',
          start: new Date(),
          allDay: true,
        },
      ],
    };
  },
  methods: {
    toggleWeekends() {
      this.calendarWeekends = !this.calendarWeekends; // update a property
    },
    gotoPast() {
      const calendarApi = this.$refs.fullCalendar.getApi(); // from the ref="..."
      calendarApi.gotoDate('2000-01-01'); // call a method on the Calendar object
    },
    handleClick(arg) {
      const { title } = arg.event;
      alert(`You clicked on "${title}"`);
    },
    handleSelect(arg) {
      const title = prompt(`Would you like to add an event to ${arg.startStr} - ${arg.endStr} ?`);
      if (title) {
        this.calendarEvents.push({ // add new event data
          title,
          start: arg.start,
          end: arg.end,
          allDay: arg.allDay,
        });
      }
    },
  },
};

</script>

<style lang='scss'>

  // you must include each plugins' css
  // paths prefixed with ~ signify node_modules
  @import '~@fullcalendar/core/main.css';
  @import '~@fullcalendar/daygrid/main.css';
  @import '~@fullcalendar/timegrid/main.css';

  .demo-app {
    font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
    font-size: 14px;
  }

  .demo-app-top {
    margin: 0 0 3em;
  }

  .demo-app-calendar {
    margin: 0 auto;
    max-width: 900px;
  }

</style>
