<template>
  <div class='demo-app'>
    <FullCalendar
      class='demo-app-calendar'
      ref="fullCalendar"
      defaultView="dayGridMonth"
      :plugins="calendarPlugins"
      :events="calendarEvents"
    />
  </div>
</template>

<script>
import FullCalendar from '@fullcalendar/vue';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

export default {
  components: {
    FullCalendar, // make the <FullCalendar> tag available
  },
  data() {
    return {
      calendarPlugins: [ // plugins must be defined in the JS
        dayGridPlugin,
        interactionPlugin, // needed for dateClick
      ],
      calendarEvents: [ // initial event data
        {
          title: 'Event Now',
          start: new Date(),
          allDay: true,
        },
      ],
    };
  },
};

</script>

<style lang='scss'>

  // you must include each plugins' css
  // paths prefixed with ~ signify node_modules
  @import '~@fullcalendar/core/main.css';
  @import '~@fullcalendar/daygrid/main.css';

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
