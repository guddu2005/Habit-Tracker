// import React, { useState, useEffect } from 'react'
// // import Button from '@mui/material/Button';
// import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
// import { Button, Fade, Grow } from '@mui/material'; // Import MUI components
// export default function AddHabit() {
//     const initialHabits = JSON.parse(localStorage.getItem('habitList')) || [];

//     const [habit, setHabit] = useState('');
//     const [habitList, setHabitList] = useState(initialHabits);
//     const [desc, setDesc] = useState('');
//     const [isText, setIsText] = useState(false);
//     const [editIndex, setEditIndex] = useState(null);

//     useEffect(() => {
//         localStorage.setItem('habitList', JSON.stringify(habitList));
//     }, [habitList]);

//     function handleBtn() {
//         setIsText(!isText);
//     }
//     const handleAdd = (e) => {
//         e.preventDefault();
//         if (!habit.trim()) {
//           alert('Enter The Habit');
//           return;
//         }
//         if (editIndex !== null) {
//           const updatedHabits = [...habitList];
//           updatedHabits[editIndex].name = habit;
//           updatedHabits[editIndex].desc = desc;
//           setHabitList(updatedHabits);
//           setEditIndex(null);
//         } else {
//           setHabitList([...habitList, { name: habit, desc, status: { Monday: false, Tuesday: false, Wednesday: false, Thursday: false, Friday: false, Saturday: false, Sunday: false } }]);
//         }
//         setHabit('');
//         setDesc('');
//     }
//     const removeHabit = (index) => {
//         const updatedHabits = habitList.filter((_, i) => i !== index);
//         setHabitList(updatedHabits);
//     };

//     const editHabit = (index) => {
//         setHabit(habitList[index].name);
//         setDesc(habitList[index].description || '');
//         setEditIndex(index);
//     };
//     // const handleButtonClick = () => {
//     //     if (isText) {
//     //         alert('Enter Habit First')
//     //     }
//     // };



//     return (
//         <div className='min-h-screen py-10' style={{ background: 'linear-gradient(to right, #f0f2f5, #cfd9df)' }}>
//         <Grow in={true} timeout={1000}>
//             <h2 className='md:mx-20 mt-5 text-3xl mx-5 text-indigo-800 font-bold tracking-wide'>
//                 Add Habit
//             </h2>
//         </Grow>
//         <Fade in={true} timeout={1000}>
//             <form onSubmit={handleAdd} className='md:mx-20 mx-5 text-lg bg-white p-8 rounded-lg shadow-xl border border-gray-200'>
//                 <p className='mt-3 mb-2 font-semibold text-gray-800'>Habit</p>
//                 <input
//                     className='md:w-96 w-80 h-10 border border-gray-300 text-sm p-2 rounded-md focus:ring-2 focus:ring-indigo-400 focus:outline-none transition duration-200'
//                     placeholder='Enter Habit'
//                     type="text"
//                     value={habit}
//                     onChange={(e) => setHabit(e.target.value)}
//                     onClick={handleBtn}
//                 />
//                 <p className='mt-4 mb-2 font-semibold text-gray-800'>Description</p>
//                 <input
//                     className='md:w-96 w-80 h-10 border border-gray-300 text-sm p-2 rounded-md focus:ring-2 focus:ring-indigo-400 focus:outline-none transition duration-200'
//                     placeholder='Enter Description'
//                     type="text"
//                     value={desc}
//                     onChange={(e) => setDesc(e.target.value)}
//                 />
//                 <p className='mt-6'>
//                     <Button
//                         variant='contained'
//                         className='bg-indigo-600 text-white py-2 px-6 rounded-md hover:bg-indigo-700 transform hover:scale-105 transition duration-300 shadow-md'
//                         type='submit'
//                     >
//                         {isText ? 'Save' : 'Add'}
//                     </Button>
//                 </p>
//             </form>
//         </Fade>
//         <Fade in={true} timeout={1500}>
//             <hr className='border-gray-300 mt-10 mb-1 mx-20' />
//         </Fade>
//         <Fade in={true} timeout={2000}>
//             <table className="table-auto w-full md:w-full mt-6 bg-white shadow-xl rounded-lg overflow-hidden">
//                 <thead className='bg-indigo-600 text-white'>
//                     <tr>
//                         <th className="md:px-4 py-2">Index</th>
//                         <th className="md:px-4 py-2">Habit</th>
//                         <th className="md:px-4 py-2">Description</th>
//                         <th className="md:px-4 py-2">Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody className='divide-y divide-gray-200'>
//                     {habitList.map((task, index) => (
//                         <Grow in={true} timeout={500 * (index + 1)} key={index}>
//                             <tr className='hover:bg-indigo-50 transition duration-200'>
//                                 <td className="md:px-5 md:py-2 text-center text-gray-700">{index + 1}</td>
//                                 <td className="md:px-4 md:py-2 text-center text-gray-700">{task.name}</td>
//                                 <td className="md:px-4 md:py-2 text-center text-gray-700">{task.desc}</td>
//                                 <td className="md:px-4 md:py-2 flex space-x-2 justify-center">
//                                     <Button
//                                         className="bg-yellow-400 h-10 w-10 text-white py-1 px-3 rounded-full hover:bg-yellow-500 transform hover:scale-110 transition duration-300 shadow-sm"
//                                         onClick={() => editHabit(index)}
//                                     >
//                                         <AiOutlineEdit />
//                                     </Button>
//                                     <Button
//                                         className="bg-red-500 h-10 w-10 text-white py-1 px-3 rounded-full hover:bg-red-600 transform hover:scale-110 transition duration-300 shadow-sm"
//                                         onClick={() => removeHabit(index)}
//                                     >
//                                         <AiOutlineDelete />
//                                     </Button>
//                                 </td>
//                             </tr>
//                         </Grow>
//                     ))}
//                 </tbody>
//             </table>
//         </Fade>
//     </div>
//     )
// }
import React, { useState, useEffect } from 'react';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import { Button, Fade, Grow } from '@mui/material'; // Import MUI components

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
        setDesc(habitList[index].desc || '');
        setEditIndex(index);
    };

    return (
        <div className='min-h-screen py-10' style={{ background: '#E9ECEF' }}>
            <Grow in={true} timeout={1000}>
                <h2 className='md:mx-20 mt-5 text-3xl mx-5 text-gray-700 font-bold tracking-wide'>
                    Add Habit
                </h2>
            </Grow>
            <Fade in={true} timeout={1000}>
                <form onSubmit={handleAdd} className='md:mx-20 mx-5 text-lg bg-white p-8 rounded-lg shadow-lg border border-gray-300'>
                    <p className='mt-3 mb-2 font-semibold text-gray-800'>Habit</p>
                    <input
                        className='md:w-96 w-80 h-10 border border-gray-400 text-sm p-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-200'
                        placeholder='Enter Habit'
                        type="text"
                        value={habit}
                        onChange={(e) => setHabit(e.target.value)}
                        onClick={handleBtn}
                    />
                    <p className='mt-4 mb-2 font-semibold text-gray-800'>Description</p>
                    <input
                        className='md:w-96 w-80 h-10 border border-gray-400 text-sm p-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-200'
                        placeholder='Enter Description'
                        type="text"
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                    />
                    <p className='mt-6'>
                        <Button
                            // variant='contained'
                            className='bg-gray-800 text-white py-2 px-6 rounded-md hover:bg-gray-600 transform hover:scale-105 transition duration-300 shadow-md'
                            type='submit'
                        >
                            {isText ? 'Save' : 'Add'}
                        </Button>
                    </p>
                </form>
            </Fade>
            <Fade in={true} timeout={1500}>
                <hr className='border-gray-300 mt-10 mb-1 mx-20' />
            </Fade>
            <Fade in={true} timeout={2000}>
                <table className="table-auto w-full md:w-full mt-6 bg-white shadow-lg rounded-lg overflow-hidden">
                    <thead className='bg-gray-500 text-white'>
                        <tr>
                            <th className="md:px-4 py-2">Index</th>
                            <th className="md:px-4 py-2">Habit</th>
                            <th className="md:px-4 py-2">Description</th>
                            <th className="md:px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody className='divide-y divide-gray-300'>
                        {habitList.map((task, index) => (
                            <Grow in={true} timeout={500 * (index + 1)} key={index}>
                                <tr className='hover:bg-blue-100 transition duration-200'>
                                    <td className="md:px-5 md:py-2 text-center text-gray-700">{index + 1}</td>
                                    <td className="md:px-4 md:py-2 text-center text-gray-700">{task.name}</td>
                                    <td className="md:px-4 md:py-2 text-center text-gray-700">{task.desc}</td>
                                    <td className="md:px-4 md:py-2 flex space-x-2 justify-center">
                                        <Button
                                            className="bg-yellow-500 h-10 w-10 text-white py-1 px-3 rounded-full hover:bg-yellow-600 transform hover:scale-110 transition duration-300 shadow-sm"
                                            onClick={() => editHabit(index)}
                                        >
                                            <AiOutlineEdit />
                                        </Button>
                                        <Button
                                            className="bg-red-500 h-10 w-10 text-white py-1 px-3 rounded-full hover:bg-red-600 transform hover:scale-110 transition duration-300 shadow-sm"
                                            onClick={() => removeHabit(index)}
                                        >
                                            <AiOutlineDelete />
                                        </Button>
                                    </td>
                                </tr>
                            </Grow>
                        ))}
                    </tbody>
                </table>
            </Fade>
        </div>
    );
}
