import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import Navbar from '../componets/Navbar';
import Footer from '../componets/Footer';
import DetailsCard from '../componets/DetailsCard';

const Details = () => {
    const data = useLoaderData();
    const {id} = useParams();
    const [details,setDetails] = useState({});

    
    useEffect(()=>{
        const cardDetails = data.find((singleCard) => singleCard.id == id);
        setDetails(cardDetails);
    },[data,id])
    return (
        <div>
            <Navbar></Navbar>
            <main>
                <DetailsCard details={details}></DetailsCard>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default Details;