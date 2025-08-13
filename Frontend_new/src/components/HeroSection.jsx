import React, { useState } from 'react'
import { Button } from './ui/button'
import { Search } from 'lucide-react'
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
    const [query,setQuery] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const searchJobHandler = () => {
        dispatch(setSearchedQuery(query));
        navigate("/browse");
    }
    return (
        <div className='text-center'>
            <div className='flex flex-col gap-5 my-10 '>
                <span className='text-[#F83002] px-4 py-2 rounded-full bg-gray-100 font-medium mx-auto'>No. 1 Job hunt website</span>
                <h1 className='text-5xl font-bold'>Search,Apply &<br />Get Your <span className='text-[#6A38C2]'>Dream Job</span></h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam harum, obcaecati unde quas dolorum nemo!</p>
                <div className='flex w-[40%] h-10 shadow-lg border border-gray-300 pl-3 rounded-full item-center gap-4 mx-auto'>
                    <input
                        type="text"
                        placeholder='find your dream jobs'
                        onChange={(e)=>setQuery(e.target.value)}
                        className='border-none outline-none w-full'
                    />
                    <Button onClick={searchJobHandler} className="rouded-r-full bg-[#6A38C2] cursor-pointer">
                        <Search className='h-5 w-5 ' />
                    </Button>

                </div>

            </div>
        </div>
    )
}

export default HeroSection