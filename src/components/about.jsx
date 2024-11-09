export const About = (props) => {
  return (
    <div id="about">
      <div id="container">
        <center>
          <div className='section-title'>
            <h2>About Me</h2>
          </div></center>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6">
              {" "}
              <img src="img/about.jpg" className="about-img" alt="" />{" "}
            </div>
            <div className="col-xs-12 col-md-6">
              <div className="about-text">
                <p>{props.data ? props.data.paragraphOne : "loading..."}</p>
                <p>{props.data ? props.data.paragraphTwo : "loading..."}</p>
                <p><b>{props.data ? props.data.paragraphThree : "loading..."}</b></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
