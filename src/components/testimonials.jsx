export const Testimonials = (props) => {
  return (
    <div id='testimonials'>
      <div className='container'>
        <div className='section-title text-center'>
          <h2>What my clients say</h2>
        </div>
        <div>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
              <div key={`${d.name}-${i}`} className='col-md-4'>
                <div className='testimonial'>
                  <div className='testimonial-image'>
                    {' '}
                    <img src={d.img} alt='' />{' '}
                  </div>
                  <div className='testimonial-content'>
                    <p>"{d.text}"</p>
                    <div className='testimonial-meta'> - {d.name} </div>
                  </div>
                </div>
              </div>
            ))
            : 'loading'}
        </div>
        {/* Yelp Review Widget */}
        {/* <div className="row">
          <span class="yelp-review" 
                data-review-id="ldqVpC2ro0SmeNnUpiO3_w" 
                data-hostname="www.yelp.com">Read 
              <a href="https://www.yelp.com/user_details?userid=Jd9HBwlgiZPALgQ5UtALSA" rel="nofollow noopener">Atlantis B.</a>'s 
              <a href="https://www.yelp.com/biz/rosie-babbra-santa-monica?hrid=ldqVpC2ro0SmeNnUpiO3_w" rel="nofollow noopener">review</a> of 
              <a href="https://www.yelp.com/biz/De3QT2TtVyqN1cbmouTA8g" rel="nofollow noopener">Rosie Babbra</a> on 
              <a href="https://www.yelp.com" rel="nofollow noopener">Yelp</a>
              <ScriptTag src="https://www.yelp.com/embed/widgets.js" type="text/javascript" async></ScriptTag>
              </span>
        </div> */}
      </div>
    </div>
  )
}
