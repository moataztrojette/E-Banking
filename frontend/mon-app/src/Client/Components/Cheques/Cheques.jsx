import React from 'react'
import NavPage from '../../Interface/NavPage/NavPage';
const Cheques = () => {
    return (
      <>
      <NavPage name="Chéques"/>
        <div className="container-fluid py-4">
        <div className="row">
          <div className="col-lg-12">
            <div className="row">
              <div className="col-md-12 mb-lg-0 mb-4">
                <div className="row mt-4">
                  <div>
                    <div className="card z-index-2">
                      <div className="card-header pb-0">
                        <div className="chart">
                          <canvas id="chart-bars" className="chart-canvas" style={{height: '10px'}} />
                        </div>
                        <h6>CHÉQUES </h6>
                        <p className="text-sm">
                          <span className="font-weight-bold">Veuillez trouver ici  les demandes des chéques
                          </span>
                        </p>
                      </div>
                      <div className="card-body p-3">
                        <div>
                          <div className="card-body pt-4 p-3">
                            <ul className="list-group">
                              <a href="../pages/TypeCheques.html"><li className="bloc4 border-0  p-4 mb-2 bg-gray-100 border-radius-lg"  >
                              <div className='bloc1'>
                                <div className='bloc2'>
                                      <img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-cheque-banking-flaticons-lineal-color-flat-icons-4.png" className='bloc3' />
                                      <span>Chéques émis</span>
                                    </div>
                                    <img src="https://img.icons8.com/dusk/80/4a90e2/circled-right.png" style={{width: '40px'}} />                                
                                  </div></li></a>
                              <li className="bloc4 border-0  p-4 mb-2 bg-gray-100 border-radius-lg" >
                              <div className='bloc1'>
                                <div className='bloc2'>
                                    <img src="https://img.icons8.com/external-soft-fill-juicy-fish/60/000000/external-cheque-economy-soft-fill-soft-fill-juicy-fish.png"className='bloc3' />
                                    <span>Consultation remise de chéques</span>
                                  </div>
                                  <img src="https://img.icons8.com/dusk/80/4a90e2/circled-right.png" style={{width: '40px'}} />                                
                                </div></li>
                              <li className="bloc4 border-0  p-4 mb-2 bg-gray-100 border-radius-lg" >
                              <div className='bloc1'>
                                <div className='bloc2'>
                                    <img src="https://img.icons8.com/ultraviolet/40/000000/check.png"  className='bloc3' />
                                    <span>Génération de bordereau de remise chéque</span>
                                  </div>
                                  <img src="https://img.icons8.com/dusk/80/4a90e2/circled-right.png" style={{width: '40px'}} />                                
                                </div></li>
                              <li className="bloc4 border-0  p-4 mb-2 bg-gray-100 border-radius-lg" >
                              <div className='bloc1'>
                                <div className='bloc2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={50} height={50} viewBox="0 0 172 172" style={{fill: '#000000'}}><g fill="none" fillRule="nonzero" stroke="none" strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit={10} strokeDasharray strokeDashoffset={0} fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: 'normal'}}><path d="M0,172v-172h172v172z" fill="none" /><g fill="#3498db"><path d="M151.91094,51.58656c-0.6265,0.00952 -1.25104,0.06709 -1.87453,0.16797c-1.66263,0.26901 -3.29797,0.86442 -4.8039,1.81406l-38.18265,23.52906c-0.88137,-0.48191 -1.96201,-1.01405 -3.38625,-1.69984c-1.63659,-0.78804 -3.34803,-1.59207 -4.31344,-2.02906c-5.19662,-2.35009 -21.76491,-9.18861 -34.33953,-14.70735c-5.37928,-2.36068 -11.12871,-3.56719 -16.88422,-3.6214c-5.75551,-0.05421 -11.52208,1.04574 -16.94469,3.30563l-22.17859,9.23828c-1.16183,0.4542 -1.98676,1.50172 -2.15594,2.73764c-0.16917,1.23593 0.34393,2.4666 1.34097,3.21629c0.99704,0.7497 2.32178,0.90095 3.46215,0.39529l22.17859,-9.23828c9.11368,-3.79815 19.37152,-3.69935 28.41359,0.26875c12.69562,5.57183 29.53441,12.53118 34.27235,14.67375c0.85091,0.38516 2.56947,1.19331 4.16562,1.96187c1.59616,0.76856 3.27383,1.61886 3.41313,1.69985c1.53487,0.89275 2.55312,2.49081 2.55312,4.41422c0,2.89239 -2.26761,5.16 -5.16,5.16c-0.40993,0 -0.79883,-0.04587 -1.16906,-0.13438c-0.00224,0 -0.00448,0 -0.00672,0c-0.08679,-0.02064 -2.80835,-0.785 -6.10734,-1.75359c-3.29899,-0.96859 -7.48993,-2.21254 -11.61672,-3.44c-8.25358,-2.45493 -16.2325,-4.84422 -16.2325,-4.84422c-1.17749,-0.35321 -2.45398,-0.05129 -3.34847,0.79199c-0.89449,0.84328 -1.27106,2.09977 -0.9878,3.29602c0.28326,1.19625 1.18329,2.15046 2.36096,2.50307c0,0 7.98408,2.39355 16.24594,4.85094c4.13093,1.22869 8.33004,2.47386 11.6436,3.44672c3.31036,0.97192 5.4177,1.59611 6.45,1.84094c0.89569,0.21417 1.82269,0.3225 2.76812,0.3225c6.60889,0 12.04,-5.43111 12.04,-12.04c0,-2.0369 -0.53198,-3.95125 -1.43781,-5.63703l36.78516,-22.66906c0.01124,-0.00665 0.02243,-0.01337 0.03359,-0.02015c2.879,-1.8155 6.58361,-0.97652 8.39844,1.9014c1.76283,2.79429 1.02594,6.38762 -1.69313,8.26406c-0.0432,0.02815 -0.08576,0.05728 -0.12765,0.08735l-54.26063,41.11203c-3.70388,2.80823 -8.55793,3.56342 -12.94031,2.00891l-40.07062,-14.20344c-9.26503,-3.82397 -19.86866,-2.53622 -27.95,3.39297l-11.98625,8.79484c-1.0318,0.71174 -1.59485,1.92834 -1.46966,3.17554c0.12519,1.24721 0.91881,2.32762 2.07149,2.82009c1.15268,0.49247 2.48198,0.31905 3.46974,-0.45266l11.98625,-8.78813c6.15338,-4.51466 14.19708,-5.49155 21.25141,-2.58c0.05546,0.02161 0.11147,0.04177 0.16797,0.06047l40.23188,14.2639c6.55681,2.32581 13.85419,1.1925 19.39703,-3.01v0.00672l54.26062,-41.11203l-0.12765,0.08734c5.69517,-3.93044 7.30098,-11.74254 3.60797,-17.5964c-2.49326,-3.95377 -6.8281,-6.10004 -11.2136,-6.03344z" /></g></g></svg> 
                                    <span>Demande de Carnet de Chéques</span>
                                  </div>
                                  <img src="https://img.icons8.com/dusk/80/4a90e2/circled-right.png" style={{width: '40px'}} />                                
                                </div></li>
                              <li className="bloc4 border-0  p-4 mb-2 bg-gray-100 border-radius-lg" >
                              <div className='bloc1'>
                                <div className='bloc2'>
                                    <img src="https://img.icons8.com/ultraviolet/50/000000/literature.png" className='bloc3' />
                                    <span>Suivi des demandes</span>
                                  </div>
                                  <img src="https://img.icons8.com/dusk/80/4a90e2/circled-right.png" style={{width: '40px'}} />                                
                                </div></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> </>);
}
 
export default Cheques;