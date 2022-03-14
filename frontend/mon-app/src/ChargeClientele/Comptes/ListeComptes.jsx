import React from 'react';

const ListeComptes = () => {
    return (   <div className="row">
    <div className="col-12">
      <div className="card mb-4">
        <div className="card-header pb-0">
          <h6>Authors table</h6>
        </div>
        <div className="card-body px-0 pt-0 pb-2">
          <div className="table-responsive p-0">
            <table className="table align-items-center mb-0">
              <thead>
                <tr>
                  <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Author</th>
                  <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Function</th>
                  <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Status</th>
                  <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Employed</th>
                  <th className="text-secondary opacity-7" />
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="d-flex px-2 py-1">

                      <div className="d-flex flex-column justify-content-center">
                        <h6 className="mb-0 text-sm">John Michael</h6>
                        <p className="text-xs text-secondary mb-0">john@creative-tim.com</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p className="text-xs font-weight-bold mb-0">Manager</p>
                    <p className="text-xs text-secondary mb-0">Organization</p>
                  </td>
                  <td className="align-middle text-center text-sm">
                    <span className="badge badge-sm bg-gradient-success">Online</span>
                  </td>
                  <td className="align-middle text-center">
                    <span className="text-secondary text-xs font-weight-bold">23/04/18</span>
                  </td>
                  <td className="align-middle">
                    <a href="javascript:;" className="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                      Edit
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex px-2 py-1">

                      <div className="d-flex flex-column justify-content-center">
                        <h6 className="mb-0 text-sm">John Michael</h6>
                        <p className="text-xs text-secondary mb-0">john@creative-tim.com</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p className="text-xs font-weight-bold mb-0">Manager</p>
                    <p className="text-xs text-secondary mb-0">Organization</p>
                  </td>
                  <td className="align-middle text-center text-sm">
                    <span className="badge badge-sm bg-gradient-success">Online</span>
                  </td>
                  <td className="align-middle text-center">
                    <span className="text-secondary text-xs font-weight-bold">23/04/18</span>
                  </td>
                  <td className="align-middle">
                    <a href="javascript:;" className="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                      Edit
                    </a>
                  </td>
                </tr>
              
                
               
                 
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div> );
}
 
export default ListeComptes;