import React from 'react'
const TypeCheques = () => {
    return (   <main className="main-content position-relative max-height-vh-100 h-100 mt-1 border-radius-lg ">
    {/* Navbar */}
    <nav className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl" id="navbarBlur" navbar-scroll="true">
      <div className="container-fluid py-1 px-3">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
            <li className="breadcrumb-item text-sm"><a href={() => false} 
 className="opacity-5 text-dark">Pages</a></li>
            <li className="breadcrumb-item text-sm text-dark active" aria-current="page">Types de chèques
            </li>
          </ol>
        </nav>
       
      </div>
    </nav>
    {/* End Navbar */}
    <div className="container-fluid py-7" style={{marginTop:'-60px'}}>
      <div className="row" style={{marginLeft: '3em'}}>
        <div className="col-lg-11">
          <div className="row_type_cheque">
            <div className="col_cheque">
              <div className="card card-background " id="sidenavCard" >
                <div className="full-background" />
                <div className="card-body text-start p-4 w-100">
                  <div style={{display: 'flex', flexDirection:'column'}}>
                    <div className="text-center mb-3 d-flex align-items-center justify-content-center border-radius-md" >
                      <img src="https://img.icons8.com/clouds/100/000000/check-book.png" alt="erreur_1" style={{width: '8em'}} />
                      </div>
                   
                  </div>
                      <h5>CHÈQUES PAYÈS</h5>
                      <p>Le chèque fait partie des effets de commerce. Il est tiré sur une banque ou un établissement financier constituant pour la personne à laquelle il est remis</p>
                  <div className="docs-info" style={{marginTop: '5em'}}>
                    <a  href="https://www.creative-tim.com/learning-lab/bootstrap/license/soft-ui-dashboard" rel="noreferrer" className="btn btn-white btn-sm w-100 mb-0">Voir</a>
                  </div>
                </div>
              </div>
            </div>
           
            <div className="col_cheque">
              <div className="card card-background " id="sidenavCard" >
                <div className="full-background" />
                <div className="card-body text-start p-4 w-100">
                  <div style={{display: 'flex', flexDirection:'column'}}>
                    <div className="text-center mb-3 d-flex align-items-center justify-content-center border-radius-md" >
 <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={50} height={50} viewBox="0 0 172 172" style={{fill: '#000000' , marginBottom:'3em'}}><g fill="none" fillRule="nonzero" stroke="none" strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit={10} strokeDasharray strokeDashoffset={0} fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: 'normal'}}><path d="M0,172v-172h172v172z" fill="none" /><g><path d="M5.375,39.775h161.25v92.45h-161.25z" fill="#bae0bd" /><path d="M165.55,40.85v90.3h-159.1v-90.3h159.1M167.7,38.7h-163.4v94.6h163.4v-94.6z" fill="#5e9c76" /><path d="M86,51.6c-18.9986,0 -34.4,15.4014 -34.4,34.4c0,18.9986 15.4014,34.4 34.4,34.4c18.9986,0 34.4,-15.4014 34.4,-34.4c0,-18.9986 -15.4014,-34.4 -34.4,-34.4zM141.9,73.1c-7.12447,0 -12.9,5.77553 -12.9,12.9c0,7.12447 5.77553,12.9 12.9,12.9c7.12447,0 12.9,-5.77553 12.9,-12.9c0,-7.12447 -5.77553,-12.9 -12.9,-12.9z" fill="#5e9c76" /><path d="M30.1,74.175c-6.53077,0 -11.825,5.29423 -11.825,11.825c0,6.53077 5.29423,11.825 11.825,11.825c6.53077,0 11.825,-5.29423 11.825,-11.825c0,-6.53077 -5.29423,-11.825 -11.825,-11.825z" fill="#ffffff" /><path d="M30.1,75.25c5.92755,0 10.75,4.82245 10.75,10.75c0,5.92755 -4.82245,10.75 -10.75,10.75c-5.92755,0 -10.75,-4.82245 -10.75,-10.75c0,-5.92755 4.82245,-10.75 10.75,-10.75M30.1,73.1c-7.1251,0 -12.9,5.7749 -12.9,12.9c0,7.1251 5.7749,12.9 12.9,12.9c7.1251,0 12.9,-5.7749 12.9,-12.9c0,-7.1251 -5.7749,-12.9 -12.9,-12.9z" fill="#5e9c76" /><path d="M117.175,170.925v-16.125c0,-2.3564 1.12445,-4.60745 3.01,-6.02l14.19,-10.6425v-5.375l-14.19,-10.6425c-1.8834,-1.4147 -3.01,-3.6636 -3.01,-6.02v-16.125h49.45v16.125c0,2.3564 -1.12445,4.60745 -3.01,6.02l-14.19,10.6425v5.375l14.19,10.6425c1.8834,1.4147 3.01,3.6636 3.01,6.02v16.125z" fill="#ffeea3" /><path d="M165.55,101.05v15.05c0,2.01885 -0.96535,3.9474 -2.58,5.16l-13.76,10.32l-0.86,0.645v1.075v4.3v1.075l0.86,0.645l13.76,10.32c1.61465,1.2126 2.58,3.14115 2.58,5.16v15.05h-47.3v-15.05c0,-2.01885 0.96535,-3.9474 2.58,-5.16l13.76,-10.32l0.86,-0.645v-1.075v-4.3v-1.075l-0.86,-0.645l-13.76,-10.32c-1.61465,-1.2126 -2.58,-3.14115 -2.58,-5.16v-15.05h47.3M167.7,98.9h-51.6v17.2c0,2.70685 1.27495,5.25675 3.44,6.88l13.76,10.32v4.3l-13.76,10.32c-2.16505,1.62325 -3.44,4.17315 -3.44,6.88v17.2h51.6v-17.2c0,-2.70685 -1.27495,-5.25675 -3.44,-6.88l-13.76,-10.32v-4.3l13.76,-10.32c2.16505,-1.62325 3.44,-4.17315 3.44,-6.88v-17.2z" fill="#ba9b48" /><path d="M135.3081,117.175h13.1838l-6.5919,9.88785z" fill="#f5ce85" /><path d="M146.48165,118.25l-4.58165,6.87355l-4.58165,-6.87355h9.1633M150.5,116.1h-17.2l8.6,12.9l8.6,-12.9z" fill="#967a44" /><path d="M126.7081,170.925l15.1919,-22.78785l15.1919,22.78785z" fill="#f5ce85" /><path d="M141.9,150.07645l13.18165,19.77355h-26.3633l13.18165,-19.77355M141.9,146.2l-17.2,25.8h34.4l-17.2,-25.8z" fill="#967a44" /><path d="M107.5,116.1c0,5.38575 2.5714,10.52855 6.88,13.76l4.58595,3.44h14.33405l-13.76,-10.32c-2.16505,-1.62325 -3.44,-4.17315 -3.44,-6.88v-12.9h-4.3v-4.3h4.3h51.6v-8.6h-51.6h-4.3h-8.6v8.6v4.3v8.6v4.3z" fill="#bae0bd" /><g fill="#ffffff"><path d="M86,53.75c-17.81118,0 -32.25,14.43882 -32.25,32.25c0,17.81118 14.43882,32.25 32.25,32.25c17.81118,0 32.25,-14.43882 32.25,-32.25c0,-17.81118 -14.43882,-32.25 -32.25,-32.25z" /></g><path d="M111.8,167.7h60.2v4.3h-60.2zM111.8,98.9h60.2v4.3h-60.2z" fill="#967a44" /><g fill="#ffffff"><path d="M141.9,75.25c-5.93706,0 -10.75,4.81294 -10.75,10.75c0,5.93706 4.81294,10.75 10.75,10.75c5.93706,0 10.75,-4.81294 10.75,-10.75c0,-5.93706 -4.81294,-10.75 -10.75,-10.75z" /></g><g fill="#bae0bd"><path d="M167.7,116.1c0,2.70685 -1.27495,5.25675 -3.44,6.88l-13.76,10.32h17.2z"  /></g></g></g></svg>                         </div>
                   
                  </div>
                  <h5>CHÈQUES À RÈGULARISER</h5>
                  <p>Le chèque fait partie des effets de commerce. Il est tiré sur une banque ou un établissement financier constituant pour la personne à laquelle il est remis</p>
                  <div className="docs-info" style={{marginTop: '5em'}}>
                  <a href="https://www.creative-tim.com/learning-lab/bootstrap/license/soft-ui-dashboard" rel="noreferrer" className="btn btn-white btn-sm w-100 mb-0">Voir</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col_cheque">
              <div className="card card-background " id="sidenavCard" >
                <div className="full-background" />
                <div className="card-body text-start p-4 w-100">
                  <div style={{display: 'flex', flexDirection:'column'}}>
                    <div className="text-center mb-3 d-flex align-items-center justify-content-center border-radius-md" >
                    <img src="https://img.icons8.com/color/48/000000/delete-property.png" alt="erreur_1" style={{width: '7em'}} />                    </div>
                   
                  </div>
                      <h5>CHÈQUES IMPAYÈS</h5>
                      <p>Le chèque fait partie des effets de commerce. Il est tiré sur une banque ou un établissement financier constituant pour la personne à laquelle il est remis</p>
                  <div className="docs-info" style={{marginTop: '5em'}}>
                    <a href="https://www.creative-tim.com/learning-lab/bootstrap/license/soft-ui-dashboard" rel="noreferrer" className="btn btn-white btn-sm w-100 mb-0">Voir</a>
                  </div>
                </div>
              </div>
            </div>

         

          </div>
        </div>
      </div>
    </div>
  </main>  );
}
 
export default TypeCheques;