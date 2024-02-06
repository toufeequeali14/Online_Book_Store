import b1 from '../assets/images/b1.png';
import b2 from '../assets/images/b2.png';
import b3 from '../assets/images/b3.png';
import b4 from '../assets/images/b4.png';
import b5 from '../assets/images/b6.png';
import b6 from '../assets/images/b7.png';
import smbl from '../assets/images/symbol.png';

import crsl from '../assets/images/cros.png';

const BooksSection = () => {
  return (
    <>
      <div className="container hero-section-margin">


{/* Row1 */}
<div className='row'>

  {/* Row1 col1 */}
  <div className='col col-sm-12 col-md-6 col-lg-6 d-flex align-items-center justify-content-end'>

    <button
      className="btn btn-primary"
      style={{
        color: "#00008B",
        background: "transparent",
        border: "none",
      }}
      onClick={() => console.log("Button clicked")}
    >
      <b>
        Sort by&nbsp;&nbsp; :&nbsp;&nbsp;Alphabetically,&nbsp;&nbsp;A-Z
        &nbsp;
      </b>
      <span
        style={{ transform: "rotate(90deg)", display: "inline-block" }}
      >
        <b> &gt;</b>
      </span>
    </button>

  </div>

  {/* Row1 col2 */}
  <div className='col col-sm-12 col-md-6 col-lg-6 d-flex align-items-center justify-content-end text-end'>

    <button
      className="btn btn-primary"
      style={{
        color: "#00008B",
        background: "transparent",
        border: "none",
      }}
      onClick={() => console.log("Button clicked")}
    >
      <b>
        Show&nbsp; :&nbsp;22&nbsp;
      </b>
      <span
        style={{ transform: "rotate(90deg)", display: "inline-block" }}
      >
        <b> &gt; </b>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p>
      </span>
    </button>

    <img src={smbl} alt='Profile' style={{height: "20px", width:"20px" }} ></img>

  </div>
</div>












{/* ///////////////////////////////////////////////////////////////////////////////////////////////////////// */}



        {/* Row2 */}
        <div className="row" style={{marginTop:'3rem'}}>


            {/* column1 */}
          <div className="col col-sm-12 col-md-3 col-lg-3">
            <br/>
            <br/><br/><br/>
            
            <button
              className="btn btn-primary"
              style={{
                color: "#00008B",
                background: "transparent",
                border: "none",
              }}
              onClick={() => console.log("Button clicked")}
            >
              <span>
                
                  <b>Product type &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</b>
                  <h3
                    style={{
                      display: "inline-block",
                      width: "20px",
                      height: "20px",
                    //   margin: "0",
                    }}
                  >
                    +
                  </h3>
                _______________________________________
              </span>
            </button>



            <button
              className="btn btn-primary"
              style={{
                color: "#00008B",
                background: "transparent",
                border: "none",
              }}
              onClick={() => console.log("Button clicked")}
            >
              <span>
                
                  <b>Availability &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</b>
                  <h3
                    style={{
                      display: "inline-block",
                      width: "20px",
                      height: "20px",
                    //   margin: "0",
                    }}
                  >
                    +
                  </h3>
                _______________________________________
              </span>
            </button>



            <button
              className="btn btn-primary"
              style={{
                color: "#00008B",
                background: "transparent",
                border: "none",
              }}
              onClick={() => console.log("Button clicked")}
            >
              <span>
                
                  <b>Brand &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</b>
                  <h3
                    style={{
                      display: "inline-block",
                      width: "20px",
                      height: "20px",
                    //   margin: "0",
                    }}
                  >
                    +
                  </h3>
                _______________________________________
              </span>
            </button>



        <button
              className="btn btn-primary"
              style={{
                color: "#00008B",
                background: "transparent",
                border: "none",
              }}
              onClick={() => console.log("Button clicked")}
            >
              <span>
                
                  <b>Color &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</b>
                  <h3
                    style={{
                      display: "inline-block",
                      width: "20px",
                      height: "20px",
                    //   margin: "0",
                    }}
                  >
                    +
                  </h3>
                _______________________________________
              </span>
            </button>





            <button
              className="btn btn-primary"
              style={{
                color: "#00008B",
                background: "transparent",
                border: "none",
              }}
              onClick={() => console.log("Button clicked")}
            >
              <span>
                
              &nbsp;  <b>Material &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b>
                  <h3
                    style={{
                      display: "inline-block",
                      width: "20px",
                      height: "20px",
                    //   margin: "0",
                    }}
                  >
                    +
                  </h3>

              </span>
            </button>
                





          </div>


{/* column2 */}
          <div className="col col-sm-12 col-md-3 col-lg-3">
            
         

            <img src={b1} alt='Profile' style={{height: "450px", width:"280px"  }} ></img>
            <p style={{color:'red', fontSize: '25px'}}>&emsp;&emsp;&emsp;<b>$99</b></p>
            {/* <h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$67</h2> */}
            
            <img src={b4} alt='Profile' style={{height: "450px", width:"280px", marginTop:'3rem'}} ></img>
            <p style={{color:'red', fontSize: '25px'}}>&emsp;&emsp;&emsp;<b>$64</b></p>
         



            {/* <p style={{ color: '#00008B'}}><b> Sort Alphabetically </b> <button className="btn btn-primary" style={{ color: '#00008B', background: 'transparent', border: 'none' }} onClick={() => console.log('Button clicked')}>
  <span style={{ transform: 'rotate(90deg)', display: 'inline-block' }}> <b> &gt;</b></span>
</button></p> */}

            {/* <p style={{'color': '#00008B'}}><b> Sort by <button className="btn btn-primary" onClick={() => console.log('Button clicked')}>
    Sort Alphabetically
  </button></b></p> */}
          </div>




            {/* column3 */}
          <div className="col col-sm-12 col-md-3 col-lg-3">
        
            
            <img src={b2} alt='Profile' style={{height: "450px", width:"280px" }} ></img>
            <p style={{color:'red', fontSize: '25px'}}>&emsp;&emsp;&emsp;<b>$88</b></p>
         

            <img src={b5} alt='Profile' style={{height: "450px", width:"280px", marginTop:'3rem'}} ></img>
            <p style={{color:'red', fontSize: '25px'}}>&emsp;&emsp;&emsp;<b>$77</b></p>
          </div>




            {/* column4 */}
          <div className="col col-sm-12 col-md-3 col-lg-3">

          <img src={b3} alt='Profile' style={{height: "450px", width:"280px" }} ></img>
          <p style={{color:'red', fontSize: '25px'}}>&emsp;&emsp;&emsp;<b>$60</b></p>
          
          <img src={b6} alt='Profile' style={{height: "450px", width:"280px", marginTop:'3rem'}} ></img>
          <p style={{color:'red', fontSize: '25px'}}>&emsp;&emsp;&emsp;<b>$49</b></p>
          </div>
        </div>

        <div className='row'>
        <div className='col col-sm-6 col-md-4 col-lg-4 '>
            
            </div>


            <div className='col col-sm-6 col-md-4 col-lg-4 '>
            <img src={crsl} alt='Profile' style={{height: "200px", width:"250px" }} ></img>
            </div>


            <div className='col col-sm-6 col-md-4 col-lg-4 '>
            
            </div>
        </div>
        
      </div>
    </>
  );
};

export default BooksSection;
