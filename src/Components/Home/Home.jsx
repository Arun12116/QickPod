
import React, { useEffect, useState } from 'react'
import "./Home.css"
import axios from "axios"
import { Button, ButtonGroup } from '@chakra-ui/react';
const Home = () => {

    const [change, setChange] = useState("")
    const [data, setData] = useState([])
    const [convert, setConvert] = useState(true)
    console.log(data);
    // console.log(change);

    const API_KEY = '59871c751645408db4c33403230808';

    useEffect(() => {

        axios.get(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${change}`).then((data) => {

            setData(data.data)
        }).catch((error) => {
            console.log(error);
        })

    }, [change])

    const changeHandle = _ => {
        setConvert(false)
    }
    const changeReverse = _ => {
        // alert("hi")

        setConvert(true)
    }




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
                            <ButtonGroup gap='1'>
                                <Button colorScheme='red' size={'lg'} onClick={changeReverse} >F</Button>
                                <Button colorScheme='gray' size={'lg'} onClick={changeHandle}>C</Button>

                            </ButtonGroup>

                        </div>
                    </div>

                    {
                        data.length === 0 ? "" : <div className="card">

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
                                        {
                                            convert ? <p className='fara'>{data.current.temp_f
                                            } F</p> : <p className='fara'>{data.current.temp_c

                                            } C</p>


                                        }

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

                                            {
                                                convert ? <p className='fara'>{data.current.temp_f
                                                } F</p> : <p className='fara'>{data.current.temp_c
    
                                                } C</p>
    
    
                                            }

                                        </div>
                                        <div>
                                            <img src={data.current.condition.icon} alt="" srcset="" />


                                            {
                                                convert ? <p className='fara'>{data.current.temp_f
                                                } F</p> : <p className='fara'>{data.current.temp_c
    
                                                } C</p>
    
    
                                            }

                                        </div>
                                        <div>
                                            <img src={data.current.condition.icon} alt="" srcset="" />


                                            {
                                                convert ? <p className='fara'>{data.current.temp_f
                                                } F</p> : <p className='fara'>{data.current.temp_c
    
                                                } C</p>
    
    
                                            }

                                        </div>
                                        <div>
                                            <img src={data.current.condition.icon} alt="" srcset="" />


                                            {
                                                convert ? <p className='fara'>{data.current.temp_f
                                                } F</p> : <p className='fara'>{data.current.temp_c
    
                                                } C</p>
    
    
                                            }

                                        </div>
                                        <div>
                                            <img src={data.current.condition.icon} alt="" srcset="" />

                                            {
                                                convert ? <p className='fara'>{data.current.temp_f
                                                } F</p> : <p className='fara'>{data.current.temp_c
    
                                                } C</p>
    
    
                                            }
                                        </div>

                                    </div>

                                </div>



                            </div>



                        </div>

                    }
                    {
                        data.length === 0 ? " " : <div className="next">
                            <Button my={2} colorScheme='red' size={'sm'}>prev</Button>
                            <Button ml={3} colorScheme='gray' size={'sm'}>Next</Button>



                        </div>
                    }

                </div>


            </div>
        </>
    )
}

export default Home