import './tack.css'
import {Container} from 'react-bootstrap'
function Tack(){
    
  return (
   <Container>
            <h2>My Image</h2>
            <div className="row">
            <a href="https://google.com" target="_blank">
            <img src="../public/banner-right-image.png" width="150" />
            </a>
            </div>
         </Container>
  )
}


export default Tack;