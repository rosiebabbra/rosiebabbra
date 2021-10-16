// export const Gallery = (props) => {
//   return (
//     <div id='portfolio' className='text-center'>
//       <div className='container'>
//         <div className='row'>
//           <div className='portfolio-items'>
//             <div className='col-sm-4 col-sm-4 col-sm-4'>
//               <div className='portfolio-item'>
//                 <div className='hover-bg'>
//                   {' '}
//                   <a
//                     title='Project Title'
//                     data-lightbox-gallery='gallery1'
//                   >
//                     <div className='hover-text'>
//                       <h4></h4>
//                     </div>
//                     <img
//                       src='img/portfolio/narjis.jpg'
//                       className='img-responsive'
//                       alt='Project Title'
//                     />{' '}
//                   </a>{' '}
//                 </div>
//               </div>
//             </div>
//             <div className='col-sm-4 col-sm-4 col-sm-4'>
//               <div className='portfolio-item'>
//                 <div className='hover-bg'>
//                   {' '}
//                   <a
//                     title='Project Title'
//                     data-lightbox-gallery='gallery1'
//                   >
//                     <div className='hover-text'>
//                       <h4></h4>
//                     </div>
//                     <img
//                       src='img/portfolio/anita-01.jpg'
//                       className='img-responsive'
//                       alt='Project Title'
//                     />{' '}
//                   </a>{' '}
//                 </div>
//               </div>
//             </div>
//             <div className='col-sm-4 col-sm-4 col-sm-4'>
//               <div className='portfolio-item'>
//                 <div className='hover-bg'>
//                   {' '}
//                   <a
//                     title='Project Title'
//                     data-lightbox-gallery='gallery1'
//                   >
//                     <div className='hover-text'>
//                       <h4></h4>
//                     </div>
//                     <img
//                       src='img/portfolio/alex.jpeg'
//                       className='img-responsive'
//                       alt='Project Title'
//                     />{' '}
//                   </a>{' '}
//                 </div>
//               </div>
//             </div>
//             <div className='col-sm-4 col-sm-4 col-sm-4'>
//               <div className='portfolio-item'>
//                 <div className='hover-bg'>
//                   {' '}
//                   <a
//                     title='Project Title'
//                     data-lightbox-gallery='gallery1'
//                   >
//                     <div className='hover-text'>
//                       <h4></h4>
//                     </div>
//                     <img
//                       src='img/portfolio/alex-03.jpg'
//                       className='img-responsive'
//                       alt='Project Title'
//                     />{' '}
//                   </a>{' '}
//                 </div>
//               </div>
//             </div>
//             <div className='col-sm-4 col-sm-4 col-sm-4'>
//               <div className='portfolio-item'>
//                 <div className='hover-bg'>
//                   {' '}
//                   <a
//                     title='Project Title'
//                     data-lightbox-gallery='gallery1'
//                   >
//                     <div className='hover-text'>
//                       <h4></h4>
//                     </div>
//                     <img
//                       src='img/portfolio/alex-02.jpg'
//                       className='img-responsive'
//                       alt='Project Title'
//                     />{' '}
//                   </a>{' '}
//                 </div>
//               </div>
//             </div>
//             <div className='col-sm-4 col-sm-4 col-sm-4'>
//               <div className='portfolio-item'>
//                 <div className='hover-bg'>
//                   {' '}
//                   <a
//                     title='Project Title'
//                     data-lightbox-gallery='gallery1'
//                   >
//                     <div className='hover-text'>
//                       <h4></h4>
//                     </div>
//                     <img
//                       src='img/portfolio/anita-02.jpg'
//                       className='img-responsive'
//                       alt='Project Title'
//                     />{' '}
//                   </a>{' '}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class Gallery extends React.Component {
    render() {
        return (
            <div>
                <h2>My Image Gallery</h2>
                <Carousel autoPlay interval="5000" transitionTime="5000">
                    <div>
                        <img src="https://picsum.photos/700/400?img=1" />
                        <p className="legend">My Classic Still 1</p>
                    </div>
                    <div>
                        <img src="https://picsum.photos/700/400?img=2" />
                        <p className="legend">My Classic Still 2</p>
                    </div>
                    <div>
                        <img src="https://picsum.photos/700/400?img=3" />
                        <p className="legend">My Classic Still 3</p>
                    </div>
                </Carousel>
            </div>
        )
    };
}

export default Gallery;