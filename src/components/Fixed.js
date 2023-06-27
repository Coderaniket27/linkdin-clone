import React from 'react'
import ReactPaginate from 'react-paginate';
import { useEffect,useState } from 'react';
function Fixed() {
    const [smallData, setSmallData] = useState({})

  async function getAPI(){
    await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false
    `)
    .then(response => response.json())
    .then(data => setSmallData({data})); 
  }
  useEffect( () => {
    getAPI();
    console.log(smallData)
  }, []);


    const handleClick=(data) =>{
        window.alert(data.selected)
    }
    return (
        <div style={{height:350, width:250, backgroundColor: 'white', borderRadius: 10, margin: 10, position: 'sticky', top: 90}}>
            Fixed component

            <ReactPaginate
        breakLabel="..."
        nextLabel={"next "}
        pageCount={25}
        previousLabel="< previous"
marginPagesDisplayed={4}
pageRangeDisplayed={4}
onPageChange={handleClick}
/>
        </div>
    )
}

export default Fixed
