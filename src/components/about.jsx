export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="aboutContainerShadowBox">

          <div className='section-title'>
            <center>
              <h2>About Me</h2></center>
          </div>
          <div className="row about-container">
            <div className="col-xs-12 col-md-4">
              <img src="img/about.jpg" alt="" />{" "}
            </div>
            <div className="col-xs-12 col-md-6">
              <div className="about-text">
                <p>{props.data ? props.data.paragraphOne : "loading..."}</p>
                <p>{props.data ? props.data.paragraphTwo : "loading..."}</p>
                <p>{props.data ? props.data.paragraphThree : "loading..."}</p>
                <p>{props.data ? props.data.paragraphFour : "loading..."}</p>
                <p>{props.data ? props.data.paragraphFive : "loading..."}</p>
                {/* <p>{props.data ? props.data.paragraphSix : "loading..."}  </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};
