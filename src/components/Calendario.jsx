import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import '../Calendar.css'
import eventsData from '../events.json'

// Recibimos los eventos
export const getAllEvents = () => {
    return eventsData.map(event => ({
        id: event.id,
        title: event.title,
        date: event.date,
        type: event.type,
        location: event.location,
        time: event.time,
        backgroundColor: event.backgroundColor,
        textColor: event.textColor,
        color: event.color
    }))
}

// Separamos los eventos por tipo
export const getEventsByType = (type) => {
    return eventsData
        .filter(event => event.type === type)
        .map(event => ({
            id: event.id,
            title: event.title,
            date: event.date,
            type: event.type,
            location: event.location,
            time: event.time,
            backgroundColor: event.backgroundColor,
            textColor: event.textColor,
            color: event.color
        }))
}

export const allEvents = getAllEvents()

export default function Calendar({ onMonthChange }) {

  const handleDatesSet = (dateInfo) => {
    const month = dateInfo.view.currentStart.getMonth() + 1
    const year = dateInfo.view.currentStart.getFullYear()
    if (onMonthChange) {
      onMonthChange({ month, year })
    }
  }

  return (
    <div className="calendar-container">
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        weekends={true}
        locale="es"
        headerToolbar={{
          left: 'prev',
          center: 'title',
          right: 'next'
        }}
        datesSet={handleDatesSet}
        events={allEvents}
        moreLinkClick="popover"
        height="auto"
      />
    </div>
  )
}