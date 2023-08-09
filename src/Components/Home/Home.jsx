
import React, { useEffect, useState } from 'react'
import "./Home.css"
import axios from "axios"
import { Button } from '@chakra-ui/react';
const Home = () => {

    const [change, setChange] = useState("")
    const [data, setData] = useState([])
    // console.log(data);
    // console.log(change);

    const API_KEY = '59871c751645408db4c33403230808';

    useEffect(() => {

        axios.get(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${change}`).then((data) => {

            setData(data.data)
        }).catch((error) => {
            console.log(error);
        })

    }, [change])

    
    return (
        <>
            <div className="main_Conatiner">

                <div className="container-Body">
                    <div className="inpute-Area">
                        <div>
                            <input type="text" placeholder='Enter a City Name' value={change} onChange={(e) => {
                                setChange(e.target.value)
                            }} />
                        </div>

                        <div className='twin-btn'>
                            <Button colorScheme='red' size={'lg'} >F</Button>
                            <Button ml={"1em"} colorScheme='gray' size={'lg'}>C</Button>

                        </div>
                    </div>

                    {
                        data.length === 0 ? <h1>No Data Found</h1> : <div className="card">

                            <div className="hello">
                                <div className="upside">
                                    <div className='left-Side'>
                                        <div className='heading'>
                                            <div>
                                                <img src={data.current.condition.icon} alt="" srcset="" />
                                            </div>
                                            <div>
                                                <p>{data.current.condition.text}</p>

                                            </div>

                                        </div>

                                    </div>
                                    <div className='right-Side'>
                                        <p>Wind:{data.current.wind_mph}mph</p>
                                        <p>Precip:{data.current.precip_in}in</p>
                                        <p>Pressure:{data.current.pressure_in}</p>
                                        <p className='fara'>{data.current.temp_f
                                        } F</p>

                                    </div>

                                </div>
                                <div className="down-Side">
                                    <div className="temp">
                                        <p>Fri</p>
                                        <p>Sat</p>
                                        <p>Sun</p>
                                        <p>Mun</p>
                                        <p>Tue</p>

                                    </div>

                                    <div className="temp-wth-imge">
                                        <div>
                                            <img src={data.current.condition.icon} alt="" srcset="" />

                                            <p>36.f</p>

                                        </div>
                                        <div>
                                            <img src={data.current.condition.icon} alt="" srcset="" />


                                            <p>36.f</p>

                                        </div>
                                        <div>
                                            <img src={data.current.condition.icon} alt="" srcset="" />


                                            <p>36.f</p>

                                        </div>
                                        <div>
                                            <img src={data.current.condition.icon} alt="" srcset="" />


                                            <p>36.f</p>

                                        </div>
                                        <div>
                                            <img src={data.current.condition.icon} alt="" srcset="" />

                                            <p>36.f</p>
                                        </div>

                                    </div>

                                </div>



                            </div>



                        </div>

                    }
                    <div className="next">
                        <Button my={2} colorScheme='red' size={'sm'}>prev</Button>
                        <Button ml={3} colorScheme='gray' size={'sm'}>Next</Button>



                    </div>
                </div>


            </div>
        </>
    )
}

export default Home