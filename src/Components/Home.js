import React from 'react'

export default function Home() {
  return (
    <div>
      
      {/*------------------- sec-1--------------------- */}
      
      <div class="sec-1">
        <div class="container">
          <div class="row justify-content-evenly">
            <div class="col-12 col-md-6">
                <div class="buttons">
                    <button class="btn btn-light ms-0 mt-4">
                        <img src="./Images/btn-img-1.webp" style={{marginTop:`8px`}} width="60px" alt=""/>
                        <span className="text-black-50 ms-2" style={{fontSize:`15px`}}>Total Arrived<br/>
                        <h5 class="ms-5" style={{color:`#0A1172`, fontWeight:`bold`, marginTop:`-10px`}}>231</h5>
                        </span>
                    </button>

                    <button class="btn btn-sm btn-light ms-2 mt-4">
                        <img src="./Images/btn-img-2.png" style={{marginTop:`8px`}} width="45px" alt=""/>
                        <span className="text-black-50 ms-2" style={{fontSize:`15px`}}>Total Booked<br/>
                        <h5 class="ms-5" style={{color:`#0A1172`, fontWeight:`bold`, marginTop:`-10px`}}>891</h5>
                        </span>
                    </button>

                    <button class="btn btn-lg btn-light ms-2 mt-4">
                        <img src="https://img.freepik.com/free-vector/right-3d-gradient-share-arrow_78370-1273.jpg?size=626&ext=jpg&ga=GA1.1.555161482.1698136723&semt=ais" style={{marginTop:`8px`}} width="50px" alt=""/>
                        <span className="text-black-50 ms-2" style={{fontSize:`15px`}}>Total Check in<br/>
                        <h5 class="ms-5" style={{color:`#0A1172`, fontWeight:`bold`, marginTop:`-6px`}}>129</h5>
                        </span>
                    </button>
              {/* ------------------Map-------------------- */}
              <div class="row my-md-5 py-md-4 p-3">
                <h4 class="ms-0 ms-md-5 map-heading" style={{color:`#0A1172`, fontWeight:`bold`}}>Compaign Overview Map</h4>
        <div class="col-md-11 mt-3 mb-mt-0 mx-auto"style={{backgroundColor:`#F5FEFD`}}>

           
          <div id="map-within-card" class="map-container" style={{height:`300px`}}>
            <iframe src="https://maps.google.com/maps?q=chicago&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0"
              style={{border:`0`}} allowFullScreen></iframe>
          </div>
       </div>


     



         {/* ------------------------booking--------------- */}
         <div class="row justify-content-evenly align-items-center mt-5">
            <h4 style={{color:`#0A1172`, fontWeight:`bold`}}>Booking List</h4>
            <div class="d-flex mt-4"style={{backgroundColor:`#F5FEFD`}}>
             <p className="text-black-50 me-4">1</p>   
            <img src="./Images/Jack.png" width="40px" className="rounded-circle" alt="upload-img"></img>
            <h6 class="ms-4 mt-2" style={{color:`#0A1172`, fontWeight:`bold`}}>Jordy Astaw</h6>
            <p className="text-black-50 ms-3 mt-2">082378740</p>
            {/* <p className="text-black-50 ms-4 mt-2 d-block d-md-none">Double</p> */}
            {/* <p className="text-black-50 ms-3">2/2/2023</p> */}
            <button class="btn btn-sm mt-2 btn-success d-none d-lg-block rounded-4 ps-3 pe-4 ms-3 mb-3">Paid</button>

            </div>

            {/* ------------------Another---------------- */}
            <div class="d-flex mt-3" style={{backgroundColor:`#F5FEFD`}}>
             <p className="text-black-50 me-4">2</p>   
            <img src="./Images/simon.png" width="40px" className="rounded-circle" alt="upload-img"></img>
            <h6 class="ms-4 mt-2" style={{color:`#0A1172`, fontWeight:`bold`}}>Jocob Bosen</h6>
            <p className="text-black-50 ms-3 mt-2">098765431</p>
            {/* <p className="text-black-50 ms-4 mt-2 d-block d-md-none">Double</p> */}
            {/* <p className="text-black-50 ms-3">2/2/2023</p> */}
            <button class="btn btn-sm mt-2 btn-success d-none d-lg-block rounded-4 ps-3 pe-4 ms-3 mb-3">Paid</button>

            </div>

            {/* ------------------Another---------------- */}
            <div class="d-flex mt-3" style={{backgroundColor:`#F5FEFD`}}>
             <p className="text-black-50 me-4">3</p>   
            <img src="./Images/team-img-3.webp" width="40px" className="rounded-circle" alt="upload-img"></img>
            <h6 class="ms-4 mt-2" style={{color:`#0A1172`, fontWeight:`bold`}}>Suraj Royall</h6>
            <p className="text-black-50 ms-3 mt-2">012345678</p>
            {/* <p className="text-black-50 ms-4 mt-2 d-block d-md-none">Double</p> */}
            {/* <p className="text-black-50 ms-3">2/2/2023</p> */}
            <button class="btn btn-sm mt-2 btn-success d-none d-lg-block rounded-4 ps-3 pe-4 ms-3 mb-3">Paid</button>

            </div>

            {/* ------------------Another---------------- */}
            <div class="d-flex mt-3" style={{backgroundColor:`#F5FEFD`}}>
             <p className="text-black-50 me-4">4</p>   
            <img src="./Images/megha_royy.png" width="40px" className="rounded-circle" alt="upload-img"></img>
            <h6 class="ms-4 mt-2" style={{color:`#0A1172`, fontWeight:`bold`}}>Megha Rott</h6>
            <p className="text-black-50 ms-3 mt-2">082976532</p>
            {/* <p className="text-black-50 ms-4 mt-2 d-block d-md-none">Double</p> */}
            {/* <p className="text-black-50 ms-3">2/2/2023</p> */}
            <button class="btn btn-sm mt-2 btn-success d-none d-lg-block rounded-4 ps-3 pe-4 ms-3 mb-3">Paid</button>

            </div>

          </div>

                
        </div>
            </div>

            

          </div>

           {/* another right-hand-side part of sec-1 */}

           <div class="col-12 col-md-6 mt-4" style={{backgroundColor:`#FAFAFA`}}>
             <div class="d-flex justify-content-space-between">
             <h5 class="ms-4 mt-1" style={{color:`#0A1172`, fontWeight:`bold`}}>Staff schedule</h5>
            {/* <p className="text-black-50 ms-auto mt-2 fs-5">See</p> */}
             </div>

          <div class="d-flex mt-1">
           <span class="ms-4" style={{color:`#0A1172`}}>Sun</span>   
           <span class=" ms-1 ms-lg-5" style={{color:`#0A1172`}}>Mon</span> 
           <span class="ms-1 ms-lg-5" style={{color:`#0A1172`}}>Tues</span>
           <span class="ms-1 ms-lg-5" style={{color:`#0A1172`}}>Wed</span>  
           <span class="ms-1 ms-lg-5" style={{color:`#0A1172`}}>Thurs</span> 
           <span class="ms-1 ms-lg-5" style={{color:`#0A1172`}}>Fri</span> 
           <span class="ms-1 ms-lg-5" style={{color:`#0A1172`}}>Sat</span> <br/><br></br>

           </div>

           <span class="ms-4 me-4">1</span>   
           <span class=" ms-0 ms-lg-5 me-3 me-lg-4">2</span> 
           <span class="ms-0 ms-lg-5 me-3 me-lg-4">3</span>
           <span class="ms-0 ms-lg-5 me-3 me-lg-4 ps-3 pe-3 pt-2 pb-2 rounded-circle bg-primary text-white">4</span>  
           <span class="ms-0 ms-lg-4 me-3 me-lg-1">5</span> 
           <span class="ms-0 ms-lg-5 me-3 me-lg-4">6</span> 
           <span class="ms-0 ms-lg-5 me-3 me-lg-1">7</span>
            <hr></hr> 

{/* -------------------Our Team------------------------------- */}
<div class="col-12">

<h4 class="text-center mt-4 team" style={{color:`#0A1172`, fontWeight:`bold`,textDecoration:`underline`}}>OUR AMAZING TEAM</h4>

<img src="./Images/team-img-1.webp"  class=" w-50 mt-5 img-fluid" style={{borderRadius:`50%`}} alt=""></img>
<span style={{color:`#0A1172`, fontWeight:`bold`}} class="fs-5 ms-2">Shiny(Office)</span> 

<img src="./Images/team-img-2.webp" class="w-50 me-3 rounded-circle mt-5 img-fluid" alt=""></img>
<span style={{color:`#0A1172`, fontWeight:`bold`}} class="fs-5 ms-2">Lucy(Repair)</span> 

<img src="./Images/team-img-3.webp"  class="rounded-circle w-50 mt-5 me-4" alt=""></img>
<span style={{color:`#0A1172`, fontWeight:`bold`}} class="fs-5 ms-2">Surya(Cook)</span> 

{/* <img src="https://img.freepik.com/free-photo/portrait-young-indian-top-manager-t-shirt-tie-crossed-arms-smiling-white-isolated-wall_496169-1513.jpg?size=626&ext=jpg&ga=GA1.1.555161482.1698136723&semt=sph" class="w-50 rounded-circle mt-5" alt=""></img>
<span style={{color:`#0A1172`, fontWeight:`bold`}} class="fs-5 ms-2">Aris(Cleaning)</span>  */}

{/* <img src="https://img.freepik.com/free-photo/handsome-bearded-businessman-rubbing-hands-having-deal_176420-18778.jpg?size=626&ext=jpg&ga=GA1.1.555161482.1698136723&semt=sph" width="250px" class="rounded-circle mt-5" alt=""></img>
<img src="https://img.freepik.com/free-photo/handsome-young-cheerful-man-with-arms-crossed_171337-1073.jpg?size=626&ext=jpg&ga=GA1.1.555161482.1698136723&semt=sph" width="250px" class="rounded-circle me-4 ms-3 mt-5" alt=""></img> */}
        
</div>          
{/* -------------last div------------------------------------ */}
           </div>
           {/* -------------------------------------------------------------- */}
        </div>
      </div>

          
</div>
</div>
  )
}
