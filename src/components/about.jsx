export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>About Me</h2>
              <p>{props.data ? props.data.paragraphOne : "loading..."}</p>
              <p>{props.data ? props.data.paragraphTwo : "loading..."}</p>
              <p><b>{props.data ? props.data.paragraphThree : "loading..."}</b></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
