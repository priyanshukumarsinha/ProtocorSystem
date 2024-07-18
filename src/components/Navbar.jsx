import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { makeActive } from '../store/NavbarSlice';

const Navbar = () => {
    const [menu, setMenu] = useState([])
    const StudentNavbar = useSelector((state) => state.NavbarData.StudentNavbarData);
    const TeacherNavbar = useSelector((state) => state.NavbarData.TeacherNavbarData);
    const dispatch = useDispatch();
    const isStudent = useSelector((state) => state.NavbarData.isStudent);

    useEffect(() => {
        const initialMenu = isStudent ? StudentNavbar : TeacherNavbar;
        setMenu(initialMenu);
    }, [isStudent]) 

    const handleClick = (id) => {
        const updatedMenu = menu.map((item) => {
            if(item.id === id){
                return ({...item, status: true})
            }else{
                return ({...item, status: false})
            }
        })
        setMenu(updatedMenu);
        dispatch(makeActive({id}));
    }

  return (
    <nav className='w-full bg-black px-16 text-white sticky top-0'>
        <ul className='flex gap-5'>
            
            {
                menu.map((item) => {
                    return (
                        <li 
                        onClick={() => {handleClick(item.id)}}
                        key={item.id} 
                        className={`py-5 px-4 cursor-pointer ${item.status ? 'bg-gray-600/60' : ''}`}>
                            {/* icon  */}
                            {item.title}
                        </li>
                    )
                })
            }
        </ul>
    </nav>
  )
}

export default Navbar