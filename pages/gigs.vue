<template lang="pug">
v-layout(row wrap align-content-center fill-height)
  v-flex(xs12)
    p.display-1.text-xs-center.white--text Live Shows
  v-layout(xs12 justify-center)
    v-card.elevation-0.transparent.text-xs-center.white--text(v-for="event in upcoming.items" :key="event.id")
      v-card-text
        p.subheading {{ event.summary }}
        p.my-0 {{ event.start.dateTime | formatDateTime }}
        p.my-0 {{ event.location }}
        p.my-2
          span(v-html="event.description")
</template>
<script>
import moment from 'moment-timezone'
export default {
  filters: {
    formatDateTime: function(value) {
      if (!value) return ''
      return moment(value)
        .tz('Australia/Melbourne')
        .format('dddd, MMMM D YYYY, h:mma')
    }
  },
  async asyncData({ $axios }) {
    const timeSplit = encodeURIComponent(
      moment()
        .tz('Australia/Melbourne')
        .startOf('day')
        .toISOString()
    )
    const key = 'AIzaSyAm_dRekgQvAVII_FB-iWOIbGQzu8HaD0Y'
    const calId = 'sga9hmeql11l4ued2uk1p91h4o@group.calendar.google.com'
    const upcomingPath = `https://www.googleapis.com/calendar/v3/calendars/${calId}/events?orderBy=startTime&singleEvents=true&timeMin=${timeSplit}&key=${key}`
    const pastPath = `https://www.googleapis.com/calendar/v3/calendars/${calId}/events?orderBy=startTime&singleEvents=true&timeMax=${timeSplit}&key=${key}`
    let upcoming = await $axios.$get(upcomingPath)
    if (upcoming.items.length === 0) {
      upcoming = {
        items: [
          {
            summary: 'No Upcoming Events',
            location: '',
            start: { dateTime: '' },
            id: 0
          }
        ]
      }
    }
    const past = await $axios.$get(pastPath)
    return { upcoming, past }
  }
}
</script>
<style scoped>
.links-default a {
  text-decoration: underline;
  color: blue;
}
</style>
