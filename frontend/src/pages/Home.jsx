import React, { useContext, useEffect } from 'react'
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from '../components/WorkoutForm'
import { WorkoutsContext } from '../context/WorkoutContext'

const Home = () => {
    // const [workouts, setWorkouts] = useState(null)
    const { workouts, dispatch } = useContext(WorkoutsContext)

    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch("http://localhost:4000/api/workouts/");
            const json = await response.json();

            if (response.ok) {
                dispatch({ type: "SET_WORKOUTS", payload: json })
            }
            // console.log('context workouts', workouts);
        }

        fetchWorkouts()
    }, [dispatch])

    return (
        <div className='home'>
            <div className='workouts'>
                {workouts?.map((workout) => (
                    <WorkoutDetails key={workout._id} workout={workout} />
                ))}
            </div>
            <WorkoutForm />
        </div>
    )
}

export default Home

