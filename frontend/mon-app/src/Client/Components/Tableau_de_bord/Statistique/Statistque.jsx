import React from 'react';

const Statistique = () => {
    return (     <div className="col-md-12 mb-lg-0 mb-4">
    <div className="row mt-4">
      <div>
        <div className="card z-index-2">
          <div className="card-header pb-0">
            <div className="chart">
              <canvas id="chart-bars" className="chart-canvas" style={{height: '10px'}} />
            </div>
            <h6>Sales overview</h6>
            <p className="text-sm">
              <i className="fa fa-arrow-up text-success" />
              <span className="font-weight-bold">4% more</span> in 2021
            </p>
          </div>
          <div className="card-body p-3">
            <div className="chart">
              <canvas id="chart-line" className="chart-canvas" height={300} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>  );
}
 
export default Statistique;