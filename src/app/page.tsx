import Image from "next/image";
import Content from "../../components/generic-content";
import Navkeys from "../../components/navigation";

export default function Home() {
  return (
    <div >
<Navkeys/>
            
            <br/>
  <Content style={{color:"Green" , textAlign:"center", fontSize:"40px", paddingTop:"100px", fontWeight:"bolder"}} text="Welcome To Home Page"/>
        </div>
    
  );
}

echo "# class3-2-routes-navigation-through-ahref" >> README.md