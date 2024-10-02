import Content from "../../../components/generic-content";
import Navkeys from "../../../components/navigation";

function About(){
    return(
        <div>
<Navkeys/>
            
            <br/>
  <Content style={{color:"blue" , textAlign:"center", fontSize:"40px", paddingTop:"100px", fontWeight:"bolder"}} text="Welcome To About Page"/>
           
        </div>
    )
}

export default About