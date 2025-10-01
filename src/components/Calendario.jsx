import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import '../Calendar.css'

// Fechas para APS
const conApsDates = [
    '2025-09-01',
    '2025-09-08', 
    '2025-09-15',
    '2025-09-22',
]

const conApsEvents = conApsDates.map(date => ({
    title: 'Con APS',
    date: date,
    backgroundColor: '#10B981',
    textColor: '#ffffff',
    color: '#10B981'
}))

// Fechas para 365
const event365Dates = [
    '2025-09-12',
    '2025-09-26'
]

const event365Events = event365Dates.map(date => ({
    title: '365',
    date: date,
    backgroundColor: '#fca704',
    textColor: '#ffffff',
    color: '#fca704'
}))

// Fechas para Servicios
const serviciosDates = [
    '2025-10-06',
    '2025-10-13',
    '2025-10-20',
    '2025-10-27'
]

const serviciosEvents = serviciosDates.map(date => ({
    title: 'Servicios',
    date: date, 
    backgroundColor: '#05681e',
    textColor: '#ffffff',
    color: '#05681e'
}))

// Exportar todos los eventos para usar en otros componentes
export const allEvents = [
    ...conApsEvents,
    ...event365Events,
    ...serviciosEvents
]

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