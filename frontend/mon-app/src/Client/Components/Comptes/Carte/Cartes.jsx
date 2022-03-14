import React from 'react'
const Carte = () => {
    return (       <div className="col-xl-6 mb-xl-0 mb-4">
    <div className="card bg-transparent shadow-xl">
      <div className="overflow-hidden position-relative border-radius-xl" style={{backgroundImage: 'url("/img/curved-images/curved14.jpg")'}}>
        <span className="mask bg-gradient-dark" />
        <div className="card-body position-relative z-index-1 p-3">
          <div style={{display: 'flex', alignItems: 'center', margin: '10px'}}>
            <h2 className="text-white">28 981,500 </h2>
            <h3 className="text-white" style={{marginleft: '1px'}} >DT</h3>
          </div>
          <h5 className="text-white mt-4 mb-5 pb-2">4562&nbsp;&nbsp;&nbsp;1122&nbsp;&nbsp;&nbsp;4594&nbsp;&nbsp;&nbsp;7852</h5>
        </div>
      </div>
    </div>
  </div> );
}
 
export default Carte;