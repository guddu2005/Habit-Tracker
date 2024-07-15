import React ,{useState} from 'react'
import { FaCheck, FaTimes } from 'react-icons/fa';

export default function Weekly() {
    const [habits, setHabits] = useState(() => {
        const storedHabits = localStorage.getItem('habitList');
        return storedHabits ? JSON.parse(storedHabits) : [];
      });
    
      const toggleStatus = (habitIndex, day) => {
        const updatedHabits = [...habits];
        updatedHabits[habitIndex].status[day] = !updatedHabits[habitIndex].status[day];
        setHabits(updatedHabits);
        localStorage.setItem('habits', JSON.stringify(updatedHabits));
      };
    
      const getPreviousDates = () => {
        const currentDate = new Date();
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const previousDates = [];
        for (let i = 6; i >= 0; i--) {
          const prevDate = new Date(currentDate);
          prevDate.setDate(currentDate.getDate() - i);
          const dayOfWeek = days[prevDate.getDay()];
          const date = prevDate.getDate();
          const month = prevDate.getMonth() + 1;
          previousDates.push({ dayOfWeek, date, month });
        }
        return previousDates;
      };
    
      const previousDates = getPreviousDates();
  return (
    
    <div className="p-4">
    <h4 className="text-lg font-bold mb-4">Weekly Habits Progress:</h4>
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead>
          <tr>
            <th className="bg-blue-600 text-white px-4 py-2">Habit</th>
            {previousDates.map((date, index) => (
              <th className="bg-blue-600 text-white px-4 py-2" key={index}>
                {date.dayOfWeek} - {date.date}/{date.month}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {habits.map((habit, habitIndex) => (
            <tr key={habitIndex}>
              <td className="border px-4 py-2">
                <h4 className="font-semibold">{habit.name}</h4>
                <small>{habit.description}</small>
              </td>
              {Object.keys(habit.status).map((day) => (
                <td
                  key={day}
                  className="border text-center px-4 py-2 cursor-pointer"
                  onClick={() => toggleStatus(habitIndex, day)}
                >
                  {habit.status[day] ? (
                    <FaCheck className="text-green-500" title="Mark undone" size={20} />
                  ) : (
                    <FaTimes className="text-red-500" title="Mark Done" size={20} />
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  )
}

