'use client';
import Script from "next/script";


const fetchErgebnisse = async () =>  {
  const ergebnisseResponse = await fetch("http://localhost:3000/api/single", {
    cache:"no-store"
  });   
return ergebnisseResponse.json();
}

const fetchMenErgebnisse = async () =>  {
  const ergebnisseResponse = await fetch("http://localhost:3000/api/singlemen", {
    cache:"no-store"
  });  
   return ergebnisseResponse.json();
}

const fetchTeamPostswomen = async () =>  {
  const ergebnisseResponse = await fetch("http://localhost:3000/api/teamwoman", {
    cache:"no-store"
  });  
   return ergebnisseResponse.json(); 
  }

  const fetchTeamPosts = async () =>  {
    const ergebnisseResponse = await fetch("http://localhost:3000/api/team", {
      cache:"no-store"
    });
     return ergebnisseResponse.json();
    }

export default async function Page() {

const ergebnisse = await fetchErgebnisse();
const menergebnisse = await fetchMenErgebnisse();
const teamergebnissewomen = await fetchTeamPostswomen();
const teamergebnisse = await fetchTeamPosts();

/*
const mc = () => {
  console.log("Men adjust")
  $(document).ready(function(){

    const mytable = $('#runnermen_data').DataTable();
    mytable.columns.adjust();
    

});
}
*/
const fc = () =>{
  $(document).ready(function(){

   $('button[data-bs-toggle="tab"]').on('shown.bs.tab', function (e) {
  
    const mytable = $('#runner_data').DataTable();
    mytable.columns.adjust();
      });
    

}); 
}

const mc = () =>{
  $(document).ready(function(){

   $('button[data-bs-toggle="tab"]').on('shown.bs.tab', function (e) {
  //console.log("Men adjust")

   //     $.fn.DataTable().columns.adjust();
    const mytable = $('#runnermen_data').DataTable();
    mytable.columns.adjust();
      });
    

}); 
}

const tw = () =>{
  $(document).ready(function(){

   $('button[data-bs-toggle="tab"]').on('shown.bs.tab', function (e) {
  //console.log("Men adjust")

   //     $.fn.DataTable().columns.adjust();
    const mytable = $('#teamwomen_data').DataTable();
    mytable.columns.adjust();
      });
    

}); 
}

const tm = () =>{
  $(document).ready(function(){

   $('button[data-bs-toggle="tab"]').on('shown.bs.tab', function (e) {
  //console.log("Men adjust")

   //     $.fn.DataTable().columns.adjust();
    const mytable = $('#team_data').DataTable();
    mytable.columns.adjust();
      });
    

}); 
}


  return (
    

    <div id="bodyDiv">
        <script src="https://code.jquery.com/jquery-3.5.1.js"/>
        <script src="https://cdn.datatables.net/1.13.4/js/jquery.dataTables.min.js"/>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossOrigin="anonymous"></script>
        
      <Script 
        src="https://cdn.datatables.net/responsive/2.4.1/js/dataTables.responsive.min.js" 
      
        onReady={() => {   
        //  console.log("SET FRAUEN RESPONSIVE")

        $('#runner_data').DataTable({
            responsive: true,
            language: {
              "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/German.json"
          },
          ordering: false,
          lengthChange: false,
          info: false
          
          });
         
          //---
          $("#runner_data").children("tbody").children("tr").each(function (i) {

            var $this = $(this);
            var my_th = $this.children("th");
            var my_td = $this.children("td");
            var fuenfte_col = my_td.eq(2);
            var color_to_set_hell = '#f1f9f6'
            var color_to_set_dunkel = '#d1eee1'   
              
            if (fuenfte_col.html() === 'W30' ){
           
            $(my_th).css('background-color', color_to_set_hell)
            $(my_td).css('background-color', color_to_set_hell)
                                    
            } else if (fuenfte_col.html() === 'W35') {
            $(my_th).css('background-color', color_to_set_dunkel)
            $(my_td).css('background-color', color_to_set_dunkel)
                                                         
            } else if (fuenfte_col.html() === 'W40') {
            $(my_th).css('background-color', color_to_set_hell)
            $(my_td).css('background-color', color_to_set_hell)
                                    
            }  else if (fuenfte_col.html() === 'W45') {
            $(my_th).css('background-color', color_to_set_dunkel)
            $(my_td).css('background-color', color_to_set_dunkel)
                                    
            } /* else if (fuenfte_col.html() === 'W50') {
            $(my_th).css('background-color', color_to_set_hell)
            $(my_td).css('background-color', color_to_set_hell)
                                    
            }*/ else if (fuenfte_col.html() === 'W55') {
            $(my_th).css('background-color', color_to_set_hell)
            $(my_td).css('background-color', color_to_set_hell)
                                    
            } else if (fuenfte_col.html() === 'W60') {
            $(my_th).css('background-color', color_to_set_dunkel)
            $(my_td).css('background-color', color_to_set_dunkel)
                                    
            } else if (fuenfte_col.html() === 'W65') {
            $(my_th).css('background-color', color_to_set_hell)
            $(my_td).css('background-color', color_to_set_hell)
                                    
            }  else if (fuenfte_col.html() === 'W70') {
            $(my_th).css('background-color', color_to_set_dunkel)
            $(my_td).css('background-color', color_to_set_dunkel)
                                    
            }  else if (fuenfte_col.html() === 'W75') {
            $(my_th).css('background-color', color_to_set_hell)
            $(my_td).css('background-color', color_to_set_hell)
                                    
            }  else if (fuenfte_col.html() === 'W80') {
            $(my_th).css('background-color', color_to_set_dunkel)
            $(my_td).css('background-color', color_to_set_dunkel)
                                    
            }  else if (fuenfte_col.html() === 'W85') {
            $(my_th).css('background-color', color_to_set_hell)
            $(my_td).css('background-color', color_to_set_hell)
                                    
            }
                                                                               
          });
          
          $("#runner_data").children("thead").css('visibility', 'visible')
          $("#runner_data").children("tbody").css('visibility', 'visible')

          //---
          $('#runnermen_data').DataTable({
            responsive: true,
            language: {
              "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/German.json"
          },
          ordering: false,
          lengthChange: false,
          info: false
          
          
          });

          //---
          $("#runnermen_data").children("tbody").children("tr").each(function (i) {

            var $this = $(this);
            var my_th = $this.children("th");
            var my_td = $this.children("td");
            var fuenfte_col = my_td.eq(2);
            var color_to_set_hell = '#f1f9f6'
            var color_to_set_dunkel = '#d1eee1'   
            
            
            
            if (fuenfte_col.html() === 'M30' ){
           
            $(my_th).css('background-color', color_to_set_hell)
            $(my_td).css('background-color', color_to_set_hell)
                                    
            } else if (fuenfte_col.html() === 'M35') {
            $(my_th).css('background-color', color_to_set_dunkel)
            $(my_td).css('background-color', color_to_set_dunkel)
                                                         
            } else if (fuenfte_col.html() === 'M40') {
            $(my_th).css('background-color', color_to_set_hell)
            $(my_td).css('background-color', color_to_set_hell)
                                    
            }  else if (fuenfte_col.html() === 'M45') {
            $(my_th).css('background-color', color_to_set_dunkel)
            $(my_td).css('background-color', color_to_set_dunkel)
                                    
            }  else if (fuenfte_col.html() === 'M50') {
            $(my_th).css('background-color', color_to_set_hell)
            $(my_td).css('background-color', color_to_set_hell)
                                    
            } else if (fuenfte_col.html() === 'M55') {
            $(my_th).css('background-color', color_to_set_dunkel)
            $(my_td).css('background-color', color_to_set_dunkel)
                                    
            } else if (fuenfte_col.html() === 'M60') {
            $(my_th).css('background-color', color_to_set_hell)
            $(my_td).css('background-color', color_to_set_hell)
                                    
            } else if (fuenfte_col.html() === 'M65') {
            $(my_th).css('background-color', color_to_set_dunkel)
            $(my_td).css('background-color', color_to_set_dunkel)
                                    
            }  else if (fuenfte_col.html() === 'W70') {
            $(my_th).css('background-color', color_to_set_hell)
            $(my_td).css('background-color', color_to_set_hell)
                                    
            }  else if (fuenfte_col.html() === 'W75') {
            $(my_th).css('background-color', color_to_set_dunkel)
            $(my_td).css('background-color', color_to_set_dunkel)
                                    
            }  else if (fuenfte_col.html() === 'W80') {
            $(my_th).css('background-color', color_to_set_hell)
            $(my_td).css('background-color', color_to_set_hell)
                                    
            }  else if (fuenfte_col.html() === 'W85') {
            $(my_th).css('background-color', color_to_set_dunkel)
            $(my_td).css('background-color', color_to_set_dunkel)
                                    
            }
                                                                               
          });
          
          //---

          $('#teamwomen_data').DataTable({
            responsive:true,
            language: {
            "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/German.json"
            },
            ordering: false,
            searching: false,
            paging:false,
            lengthChange: false,
          info: false,
          
          });

          //----
          $("#teamwomen_data").children("tbody").children("tr").each(function (i) {

            var $this = $(this);
            var my_th = $this.children("th");
            var my_td = $this.children("td");
            
                  var color_to_set_hell = '#f1f9f6'
                 
            $(my_th).css('background-color', color_to_set_hell)
            $(my_td).css('background-color', color_to_set_hell)
                                    
                                                          
          });
          //----

          $('#team_data').DataTable({
            responsive:true,
            language: {
            "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/German.json"
            },
            ordering: false,
            searching: false,
            paging:false,
            lengthChange: false,
          info: false,
          
          });

           //----
           $("#team_data").children("tbody").children("tr").each(function (i) {

            var $this = $(this);
            var my_th = $this.children("th");
            var my_td = $this.children("td");
            
                  var color_to_set_hell = '#f1f9f6'
                 
            $(my_th).css('background-color', color_to_set_hell)
            $(my_td).css('background-color', color_to_set_hell)
                                    
                                                          
          });
          //----

        }}
      />

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
          <button className="nav-link active" id="einzel-tab" data-bs-toggle="tab" data-bs-target="#einzel" type="button" role="tab" aria-controls="einzel" aria-selected="true" onClick={fc}>Frauen</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="einzel-m-tab" data-bs-toggle="tab" data-bs-target="#einzel-m" type="button" role="tab" aria-controls="einzel-m" aria-selected="true" onClick={mc}>Männer</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="mannschaften-f-tab" data-bs-toggle="tab" data-bs-target="#mannschaften-f" type="button" role="tab" aria-controls="mannschaften-f" aria-selected="false" onClick={tw}>Teams (F)</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="mannschaften-m-tab" data-bs-toggle="tab" data-bs-target="#mannschaften-m" type="button" role="tab" aria-controls="mannschaften-m" aria-selected="false" onClick={tm}>Teams (M)</button>
        </li>
      </ul>
      </div>

      
      <div className="tab-content" id="myTabContent">
          
          <div className="tab-pane fade show active" id="einzel" role="tabpanel" aria-labelledby="einzel-tab">
            { ergebnisse &&  
            
            <div className="card">
          
            <div className="card-header" style={{color: "#228B22", background:"#F0FFF0", fontWeight: "bold"}}>Ergebnisse</div>
            <div className="card-body">
        
            <div className="table-responsive">                   
            <table id="runner_data" className="responsive nowrap compact hover row-border" width={"100%"} cellSpacing={"0"} >
            <thead style={{ color: "#228B22", background:"#F0FFF0", border:"hidden", visibility:"hidden"}}>
                <tr>
                  <th data-orderable="false">Platz</th>
                  <th data-orderable="false">Name</th>
                  <th data-orderable="false">Vorname</th>
                  <th data-orderable="false">AK</th>
                  <th data-orderable="false">Verein</th>              
                  <th data-orderable="false">Gesamtzeit</th>
                  <th data-orderable="false">Großweier</th>
                  <th data-orderable="false">Biberach</th>
                </tr>
            </thead>         
            <tbody style={{visibility:"hidden"}}>
                {ergebnisse && ergebnisse.map((ergebnis:any) => (
                <tr key={ergebnis.laeuferid} >
                  <th scope="row">{ergebnis.rn}</th>
                  <td>{ergebnis.name}</td>
                  <td>{ergebnis.vorname}</td>
                  <td>{ergebnis.ak}</td>
                  <td>{ergebnis.verein}</td>               
                  <td>{ergebnis.gesamtzeit}</td>
                  <td>{ ergebnis.wettbewerbdate_1 == ergebnis.orderdate_1 ? (<span style={{background: "LimeGreen"}}>{ergebnis.wettbewerbdate_1}</span>) : 
                        (ergebnis.wettbewerbdate_1 == ergebnis.orderdate_2 ? (<span style={{background: "yellow"}}>{ergebnis.wettbewerbdate_1}</span>) :
                        (<span>{ergebnis.wettbewerbdate_2}</span>)) }</td>
                  <td>{ ergebnis.wettbewerbdate_2 == ergebnis.orderdate_1 ? (<span style={{background: "LimeGreen"}}>{ergebnis.wettbewerbdate_2}</span>) : 
                        (ergebnis.wettbewerbdate_2 == ergebnis.orderdate_2 ? (<span style={{background: "yellow"}}>{ergebnis.wettbewerbdate_2}</span>) :
                        (<span>{ergebnis.wettbewerbdate_2}</span>)) }</td>
                </tr>
                        ))}
                                             
            </tbody>
          </table>
           
        </div>
      </div>
  </div>
            
            }
          </div>
            
            <div className="tab-pane fade" id="einzel-m" role="tabpanel" aria-labelledby="einzel-m-tab">
            { menergebnisse  &&
            <div className="card">
          
            <div className="card-header" style={{color: "#228B22", background:"#F0FFF0", fontWeight: "bold"}}>Ergebnisse</div>
            <div className="card-body">
              
              <div className="table-responsive">                   
                <table id="runnermen_data" className="responsive nowrap compact hover row-border" width={"100%"} cellSpacing={"0"} >
                <thead style={{ color: "#228B22", background:"#F0FFF0", border:"hidden"}}>
                      <tr>
                        <th data-orderable="false">Platz</th>
                        <th data-orderable="false">Name</th>
                        <th data-orderable="false">Vorname</th>
                        <th data-orderable="false">AK</th>
                        <th data-orderable="false">Verein</th>                     
                        <th data-orderable="false">Gesamtzeit</th>
                        <th data-orderable="false">Großweier</th>
                        <th data-orderable="false">Biberach</th>
                      </tr>
                  </thead>         
                  <tbody>
                      {menergebnisse && menergebnisse.map((ergebnis:any) => (
                      <tr key={ergebnis.laeuferid} >
                        <th scope="row">{ergebnis.rn}</th>
                        <td>{ergebnis.name}</td>
                        <td>{ergebnis.vorname}</td>
                        <td>{ergebnis.ak}</td>
                        <td>{ergebnis.verein}</td>           
                        <td>{ergebnis.gesamtzeit}</td>
                        <td>{ ergebnis.wettbewerbdate_1 == ergebnis.orderdate_1 ? (<span style={{background: "LimeGreen"}}>{ergebnis.wettbewerbdate_1}</span>) : 
                              (ergebnis.wettbewerbdate_1 == ergebnis.orderdate_2 ? (<span style={{background: "yellow"}}>{ergebnis.wettbewerbdate_1}</span>) :
                              (<span>{ergebnis.wettbewerbdate_2}</span>)) }</td>
                        <td>{ ergebnis.wettbewerbdate_2 == ergebnis.orderdate_1 ? (<span style={{background: "LimeGreen"}}>{ergebnis.wettbewerbdate_2}</span>) : 
                              (ergebnis.wettbewerbdate_2 == ergebnis.orderdate_2 ? (<span style={{background: "yellow"}}>{ergebnis.wettbewerbdate_2}</span>) :
                              (<span>{ergebnis.wettbewerbdate_2}</span>)) }</td>
                      </tr>
                              ))}
                                                   
                  </tbody>
                </table>
                 
              </div>
            </div>
        </div>
            
            }  
            </div>
  
            <div className="tab-pane fade" id="mannschaften-f" role="tabpanel" aria-labelledby="mannschaften-f-tab">
             { teamergebnissewomen  && 
             <div className="card">
         
          
        <div className="card-header" style={{color: "#228B22", background:"#F0FFF0", fontWeight: "bold"}}>Ergebnisse</div>
                
        <div className="card-body">
  
        <div className="table-responsive">                   
            <table id="teamwomen_data" className="responsive nowrap compact hover row-border" width={"100%"} cellSpacing={"0"} >
                        
              <thead style={{ color: "#228B22", background:"#F0FFF0", border:"hidden"}}>
                  <tr>
                    <th data-orderable="false">Platz</th>
                    <th data-orderable="false">Mannschaft</th>
                    <th data-orderable="false">Gesamtzeit</th>
                    <th data-orderable="false">Großweier</th>
                    <th data-orderable="false">Biberach</th>
                  </tr>
              </thead>
                    <tbody>
                  {teamergebnissewomen && teamergebnissewomen.map((ergebnis:any) => (
                  <tr key={ergebnis.teamname} >
                    <th scope="row">{ergebnis.row}</th>
                    <td>{ergebnis.teamname}</td>
                    <td>{ergebnis.gesamtzeit}</td>
                    <td>{ ergebnis.wettbewerbdate_1 == ergebnis.orderdate_1 ? (<span style={{background: "LimeGreen"}}>{ergebnis.wettbewerbdate_1}</span>) : 
                          (ergebnis.wettbewerbdate_1 == ergebnis.orderdate_2 ? (<span style={{background: "yellow"}}>{ergebnis.wettbewerbdate_1}</span>) :
                          (<span>{ergebnis.wettbewerbdate_2}</span>)) }</td>
                    <td>{ ergebnis.wettbewerbdate_2 == ergebnis.orderdate_1 ? (<span style={{background: "LimeGreen"}}>{ergebnis.wettbewerbdate_2}</span>) : 
                          (ergebnis.wettbewerbdate_2 == ergebnis.orderdate_2 ? (<span style={{background: "yellow"}}>{ergebnis.wettbewerbdate_2}</span>) :
                          (<span>{ergebnis.wettbewerbdate_2}</span>)) }</td>
                  </tr>
                          ))}
                                               
              </tbody>    
              
            </table>
             
          </div>
  
        </div>
              
      </div>
             }   
            </div>
  
            <div className="tab-pane fade" id="mannschaften-m" role="tabpanel" aria-labelledby="mannschaften-m-tab">
            { teamergebnisse && 
            <div className="card">
             <div className="card-header" style={{color: "#228B22", background:"#F0FFF0", fontWeight: "bold"}}>Ergebnisse</div>
                
        <div className="card-body">
  
        <div className="table-responsive">                   
            <table id="team_data" className="responsive nowrap compact hover row-border" width={"100%"} cellSpacing={"0"} >
                        
              <thead style={{ color: "#228B22", background:"#F0FFF0", border:"hidden"}}>
                  <tr>
                    <th data-orderable="false">Platz</th>
                    <th data-orderable="false">Mannschaft</th>
                    <th data-orderable="false">Beste Zeit</th>
                    <th data-orderable="false">Großweier</th>
                    <th data-orderable="false">Biberach</th>
                  </tr>
              </thead>
                   <tbody>
                  {teamergebnisse && teamergebnisse.map((ergebnis:any) => (
                  <tr key={ergebnis.teamname} >
                    <th scope="row">{ergebnis.row}</th>
                    <td>{ergebnis.teamname}</td>
                    <td>{ergebnis.gesamtzeit}</td>
                    <td>{ ergebnis.wettbewerbdate_1 == ergebnis.orderdate_1 ? (<span style={{background: "LimeGreen"}}>{ergebnis.wettbewerbdate_1}</span>) : 
                          (ergebnis.wettbewerbdate_1 == ergebnis.orderdate_2 ? (<span style={{background: "yellow"}}>{ergebnis.wettbewerbdate_1}</span>) :
                          (<span>{ergebnis.wettbewerbdate_2}</span>)) }</td>
                    <td>{ ergebnis.wettbewerbdate_2 == ergebnis.orderdate_1 ? (<span style={{background: "LimeGreen"}}>{ergebnis.wettbewerbdate_2}</span>) : 
                          (ergebnis.wettbewerbdate_2 == ergebnis.orderdate_2 ? (<span style={{background: "yellow"}}>{ergebnis.wettbewerbdate_2}</span>) :
                          (<span>{ergebnis.wettbewerbdate_2}</span>)) }</td>
                  </tr>
                          ))}
                                               
              </tbody>     
              
            </table>
             
          </div>
  
        </div>
  
          
              
      </div>
            
            }
            </div>
  
          </div>
  
     
     
              <div className="text-center p-2" style={{background:"#F0FFF0", marginTop: "10px"}}>
                  <span style={{background:"LimeGreen", color:"black", padding: "3px"}}>Beste Zeit</span>
                  <span style={{background:"yellow", color:"black", padding: "3px", marginLeft:"20px"}}>Zweite Zeit</span>
              </div>
      </div>
 
    </div>
    
  );

}

