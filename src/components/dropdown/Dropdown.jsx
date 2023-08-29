import React, { useEffect, useState } from 'react'
import './dropdown.css'
import axios from 'axios';

function Dropdown() {
    const [open, setOpen] = useState(false);

    const toggleIcon = () => {
      setOpen(!open);
    };
    const [getData, setData] = useState([]);
  
    const getApiData = async () => {
        // console.log(`${process.env.REACT_APP_FRONT}/user-comman-api/get-faq`);
        await axios.get(`${process.env.REACT_APP_FRONT}/user-comman-api/get-faq`).then((res) => {
            console.log(res.data.data);
            setData(res.data.data)

        }).catch(err=>console.log(err))
    }
    useEffect(() => {
        getApiData();
    }, [])

    return (
        <>
            <div className="container">

                {
                    getData.map((element,index)=>{
                        return(
                            <>
                            <div className="row">
                    <div className="col-12">
                        <div className="dropdown ">
                            <a className="btn text-left py-2 dropdown_btn w-100 "
                            onClick={toggleIcon} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                {element.question}
                                <i id="icon" className={`fa ${open ? 'fa-arrow-down open' : 'fa-arrow-down'}`}></i>
                            </a>
                            <ul className="dropdown-menu  w-100">
                                <li><a className="dropdown-item" href="#">{element.answer}</a></li>
                            </ul>
                        </div>
                    </div>
                </div></>
                        )
                    })
                }
            </div>
        </>

    )
}

export default Dropdown