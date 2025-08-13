import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'
import { Button } from './ui/button'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setSearchedQuery } from '@/redux/jobSlice'

const category = [
    "Frontend developer",
    "Backend developer",
    "UI designer",
    "Fullstack developer",
    "Data Analyst"
]

const CategoryCarousel = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const searchJobHandler = (query) => {
            dispatch(setSearchedQuery(query));
            navigate("/browse");
        }

    return (
        <div>
            <Carousel className="w-full max-w-xl mx-auto my-20">
                <CarouselContent>
                    {
                        category.map((cat, index) => (
                            <CarouselItem className="md:basis-1/2 ld:basis-1/3 ">
                                <Button onClick={()=>searchJobHandler(cat)} variant="outline" className="rounded-full cursor-pointer">{cat}</Button>
                            </CarouselItem>
                        ))
                    }

                </CarouselContent>
                <CarouselPrevious className="cursor-pointer"/>
                <CarouselNext className="cursor-pointer"/>
            </Carousel>
        </div>
    )
}

export default CategoryCarousel