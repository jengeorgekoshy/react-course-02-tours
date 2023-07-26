import { useEffect, useState } from 'react'
import Loading from './Loading'
import Tours from './Tours'

const url = 'https://course-api.com/react-tours-project'

const App = () => {
  const [tours, setTours] = useState([])
  const [error, setIsError] = useState(false)
  const [loading, setIsLoading] = useState(true)

  const removeTour = (id) => {
    const newTour = tours.filter((tour) => {
      return tour.id !== id
    })
    setTours(newTour)
  }

  const fetchData = async () => {
    setIsLoading(true)
    try {
      const response = await fetch(url)
      if (!response.ok) {
        setIsError(true)
        setIsLoading(false)
        return
      }
      const tours = await response.json()
      setTours(tours)
      setIsLoading(false)
    } catch (err) {
      setIsError(true)
      console.log(err)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }

  if (error) {
    return <h1>Something went wrong..</h1>
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button
            className="btn"
            style={{ marginTop: '2rem' }}
            onClick={fetchData}
          >
            refresh
          </button>
        </div>
      </main>
    )
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  )
}
export default App
