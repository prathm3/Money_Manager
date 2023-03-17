export default function IdealBreakDown(){
    return (
        <>
<div className="row">

    <div className="col-sm-4">
    <div className="card" style={{top: "500px",right: "450px"}}>
        <i className="fa-regular fa-star fa-4x" style={{marginLeft:"65px"}}></i>
    <div className="card-body">
      <h5 className="card-title"  style={{marginLeft:"55px"}}>Needs</h5>
      <p className="card-text">Ideally, you should allocate upto 50% of your income towards your needs. </p>
    </div>
    <div className="card-footer">
      <small className="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
    </div>
    <div className="col-sm-4">
    <div className="card" style={{top: "500px",right: "300px"}}>
  <i className="fa-solid fa-hand-fist fa-4x " style={{marginLeft:"70px"}}> </i>
    <div className="card-body">
      <h5 className="card-title" style={{marginLeft:"52px"}}>Wants</h5>
      <p className="card-text">Ideally, you should limit your wants to 30% But a little fun won't hurt</p>
    </div>
    <div className="card-footer">
      <small className="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
    </div>

    <div className="col-sm-4">
    <div className="card" style={{top: "500px",right: "150px"}}>
  <i className="fa-solid fa-money-bill-trend-up fa-4x "  style={{marginLeft:"70px"}}></i>
    <div className="card-body">
      <h5 className="card-title" style={{marginLeft:"40px"}}>Investment</h5>
      <p className="card-text">Ideally, You should invest 20% of your income regularly.</p>
    </div>
    <div className="card-footer">
      <small className="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
    </div>

</div>


</>
    )
}