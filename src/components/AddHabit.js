import React, { useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
export default function AddHabit() {
    const initialHabits = JSON.parse(localStorage.getItem('habitList')) || [];

    const [habit, setHabit] = useState('');
    const [habitList, setHabitList] = useState(initialHabits);
    const [desc, setDesc] = useState('');
    const [isText, setIsText] = useState(false);
    const [editIndex, setEditIndex] = useState(null);

    useEffect(() => {
        localStorage.setItem('habitList', JSON.stringify(habitList));
    }, [habitList]);

    function handleBtn() {
        setIsText(!isText);
    }
    const handleAdd = (e) => {
        e.preventDefault();
        if (!habit.trim()) {
          alert('Enter The Habit');
          return;
        }
        if (editIndex !== null) {
          const updatedHabits = [...habitList];
          updatedHabits[editIndex].name = habit;
          updatedHabits[editIndex].desc = desc;
          setHabitList(updatedHabits);
          setEditIndex(null);
        } else {
          setHabitList([...habitList, { name: habit, desc, status: { Monday: false, Tuesday: false, Wednesday: false, Thursday: false, Friday: false, Saturday: false, Sunday: false } }]);
        }
        setHabit('');
        setDesc('');
    }
    const removeHabit = (index) => {
        const updatedHabits = habitList.filter((_, i) => i !== index);
        setHabitList(updatedHabits);
    };

    const editHabit = (index) => {
        setHabit(habitList[index].name);
        setDesc(habitList[index].description || '');
        setEditIndex(index);
    };
    // const handleButtonClick = () => {
    //     if (isText) {
    //         alert('Enter Habit First')
    //     }
    // };



    return (
        <div>
            <h2 className='md:mx-20 mt-5 text-3xl mx-5'>Add Habit</h2>
            <form onSubmit={handleAdd} className='md:mx-20 mx-5 text-lg'>
                <p className='mt-3 mb-2'>Habit</p>
                <input
                    className='md:w-96 w-80 h-10 border border-blue-200 text-sm p-2'
                    placeholder='Enter Habit'
                    type="text"
                    value={habit}
                    onChange={(e) => setHabit(e.target.value)}
                    onClick={handleBtn}
                />
                <p className='mt-4 mb-2'>Description</p>
                <input
                    className='md:w-96 w-80 h-10 border border-blue-200 text-sm p-2'
                    placeholder='Enter Description'
                    type="text"
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                />
                <p className='mt-2'>
                    <Button variant='contained' color='success' type='submit'>
                        {isText ? 'Save' : 'Add'}
                    </Button>
                </p>
            </form>
            <hr className='border-blue-200 mt-10 mb-1 mx-20' />
            <table className="table-auto w-96 md:w-screen mt-6 px-1 ">
                <thead className='border border-lime-400 shadow-md  '>
                    <tr className=''>
                        <th className="md:px-4 py-2">Index</th>
                        <th className="md:px-4 py-2">Habit</th>
                        <th className="md:px-4 py-2">Description</th>
                        <th className="md:px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody className='border border-lime-400 shadow-md'>
                    {habitList.map((task, index) => (
                        <tr key={index} className='border border-lime-400 shadow-md'>
                            <td className="md:px-5 md:py-2 text-center">{index + 1}</td>
                            <td className="md:px-4 md:py-2 text-center">{task.name}</td>
                            <td className="md:px-4 md:py-2 text-center">{task.desc}</td>
                            <td className="md:px-4 md:py-2 flex space-x-2 justify-center">
                                <button
                                    className="bg-yellow-500 h-10 w-10 text-white py-1 px-3 rounded"
                                onClick={() => editHabit(index)}
                                >
                                    <AiOutlineEdit />
                                </button>
                                <button
                                    className="bg-red-500 h-10 w-10 text-white py-1 px-3 rounded"
                                    onClick={() => removeHabit(index)}
                                >
                                    <AiOutlineDelete />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            

            




        </div>
    )
}
