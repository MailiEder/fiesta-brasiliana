import Frauen from "@/components/Frauen";
import Maenner from "@/components/Maenner";
import Frauenteam from "@/components/Frauenteam";
import Maennerteam from "@/components/Maennerteam";


const fetchErgebnisse = async () =>  {
  const ergebnisseResponse = await fetch("http://localhost:3000/api/single",{
  cache:"no-store"
  });   
return ergebnisseResponse.json();
}

const fetchMenErgebnisse = async () =>  {
  const ergebnisseResponse = await fetch("http://localhost:3000/api/singlemen",{
  cache:"no-store"
  });  
   return ergebnisseResponse.json();
}

const fetchTeamPostswomen = async () =>  {
  const ergebnisseResponse = await fetch("http://localhost:3000/api/teamwoman",{
  cache:"no-store"
  });  
   return ergebnisseResponse.json(); 
  }

  const fetchTeamPosts = async () =>  {
    const ergebnisseResponse = await fetch("http://localhost:3000/api/team",{
    cache:"no-store"
    });
     return ergebnisseResponse.json();
    }

export default async function Page() {

const ergebnisse = await fetchErgebnisse();
const menergebnisse = await fetchMenErgebnisse();
const teamergebnissewomen = await fetchTeamPostswomen();
const teamergebnisse = await fetchTeamPosts();



  return (
    

    <div id="bodyDiv">
      
      <div className="container" >

        <h1 className="text-center mt-3" style={{color: "#228B22",  background:"#F0FFF0", fontWeight: "bold"}}>Ortenaumeisterschaft 2023</h1>
        <h3 className="text-center mt-3" style={{color: "#228B22",  background:"#F0FFF0"}}>Ortenaumeisterschaft 2023</h3>
      {/* Desktop Navigation*/}
       <div className="sm:flex hidden ">
        
           
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button className="nav-link active" id="einzel-tab" data-bs-toggle="tab" data-bs-target="#einzel" type="button" role="tab" aria-controls="einzel" aria-selected="true">Frauen</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="einzel-m-tab" data-bs-toggle="tab" data-bs-target="#einzel-m" type="button" role="tab" aria-controls="einzel-m" aria-selected="true">Männer</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="mannschaften-f-tab" data-bs-toggle="tab" data-bs-target="#mannschaften-f" type="button" role="tab" aria-controls="mannschaften-f" aria-selected="false">Mannschaften Frauen</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="mannschaften-m-tab" data-bs-toggle="tab" data-bs-target="#mannschaften-m" type="button" role="tab" aria-controls="mannschaften-m" aria-selected="false">Mannschaften Männer</button>
        </li>
      </ul>

      </div>

      {/* Mobile Navigation */}
      
      <div className="sm:hidden flex relative">
      
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button className="nav-link active" id="einzel-tab" data-bs-toggle="tab" data-bs-target="#einzel" type="button" role="tab" aria-controls="einzel" aria-selected="true">Frauen</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="einzel-m-tab" data-bs-toggle="tab" data-bs-target="#einzel-m" type="button" role="tab" aria-controls="einzel-m" aria-selected="true">Männer</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="mannschaften-f-tab" data-bs-toggle="tab" data-bs-target="#mannschaften-f" type="button" role="tab" aria-controls="mannschaften-f" aria-selected="false">Teams Frauen</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="mannschaften-m-tab" data-bs-toggle="tab" data-bs-target="#mannschaften-m" type="button" role="tab" aria-controls="mannschaften-m" aria-selected="false">Teams Männer</button>
        </li>
      </ul>
      </div>

      <div className="tab-content" id="myTabContent">
          
        <div className="tab-pane fade show active" id="einzel" role="tabpanel" aria-labelledby="einzel-tab">
          { ergebnisse &&  <Frauen  ergebnisse={ergebnisse}/> }
        </div>
          
          <div className="tab-pane fade" id="einzel-m" role="tabpanel" aria-labelledby="einzel-m-tab">
          { menergebnisse  && <Maenner menergebnisse={menergebnisse}/>}  
          </div>

          <div className="tab-pane fade" id="mannschaften-f" role="tabpanel" aria-labelledby="mannschaften-f-tab">
           { teamergebnissewomen  && <Frauenteam teamergebnissewomen={teamergebnissewomen}/>}   
          </div>

          <div className="tab-pane fade" id="mannschaften-m" role="tabpanel" aria-labelledby="mannschaften-m-tab">
          { teamergebnisse && <Maennerteam teamergebnisse={teamergebnisse}/>}
          </div>

        </div>

              <div className="text-center p-2" style={{background:"#F0FFF0", marginTop: "10px"}}>
                  <span style={{color:"green", marginLeft:"20px"}}>Beste Zeit</span>
                  <span style={{color:"orange", marginLeft:"20px"}}>Zweite Zeit</span>
              </div>
      </div>    
    </div>

  );

}

