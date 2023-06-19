'use client';
import { useEffect } from 'react';
import jQuery from "jquery";

const Frauen = ({ ergebnisse } : any ) => {

useEffect(() => {
 
 var data_arr : any = [];

 ergebnisse.map((ergebnis:any) =>{
        data_arr.push([
          ergebnis.rn,
          ergebnis.vorname,
          ergebnis.name,
          ergebnis.verein,
          ergebnis.ak,
          ergebnis.orderdate_1,
          ergebnis.orderdate_2,
          ergebnis.gesamtzeit,
          ergebnis.wettbewerbdate_1,
          ergebnis.wettbewerbdate_2
        ]             
        );
    });

 $('#runner_data').DataTable({
  responsive: true,
  language: {
    "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/German.json"
    },
  ordering: false,
  lengthChange: false,
  info: false,
  data: data_arr,
  columnDefs: [
    { targets: [5, 6], visible: false },
    {
    targets: [8, 9],
    createdCell: function (td, cellData, rowData, row, col) {
      
      if ( cellData == rowData[6] ) {
        $(td).css('color', 'orange')
     
      }
      if ( cellData == rowData[5] ) {
        $(td).css('color', 'green')
      
      }
      if ( rowData[4] == 'W30'){
        var color_to_set = '#f1f9f6'
        $(td).css('background-color', color_to_set)
      }
      if ( rowData[4] == 'W35'){
        var color_to_set = '#d1eee1'
        $(td).css('background-color', color_to_set)
      }
      if ( rowData[4] == 'W40'){
        var color_to_set = '#f1f9f6'
        $(td).css('background-color', color_to_set)
      }
      if ( rowData[4] == 'W45'){
        var color_to_set = '#d1eee1'
        $(td).css('background-color', color_to_set)
      }
      /*if ( rowData[4] == 'W50'){
        var color_to_set = '#f1f9f6'
        $(td).css('background-color', color_to_set)
      }*/
      if ( rowData[4] == 'W55'){
        var color_to_set = '#f1f9f6'
        $(td).css('background-color', color_to_set)
      }
      if ( rowData[4] == 'W60'){
        var color_to_set = '#d1eee1'
        $(td).css('background-color', color_to_set)
      }
      if ( rowData[4] == 'W65'){
        var color_to_set = '#f1f9f6'
        $(td).css('background-color', color_to_set)
      }
      if ( rowData[4] == 'W70'){
        var color_to_set = '#d1eee1'
        $(td).css('background-color', color_to_set)
      }
      if ( rowData[4] == 'W75'){
        var color_to_set = '#f1f9f6'
        $(td).css('background-color', color_to_set)
      }
      if ( rowData[4] == 'W80'){
        var color_to_set = '#d1eee1'
        $(td).css('background-color', color_to_set)
      }
    }
  },
  {
    targets: [0,1,2,3,4,5,6,7],
    createdCell: function(td, cellData, rowData, row, col){
      if ( rowData[4] == 'W30'){
        var color_to_set = '#f1f9f6'
        $(td).css('background-color', color_to_set)
      }
      if ( rowData[4] == 'W35'){
        var color_to_set = '#d1eee1'
        $(td).css('background-color', color_to_set)
      }
      if ( rowData[4] == 'W40'){
        var color_to_set = '#f1f9f6'
        $(td).css('background-color', color_to_set)
      }
      if ( rowData[4] == 'W45'){
        var color_to_set = '#d1eee1'
        $(td).css('background-color', color_to_set)
      }
      /*if ( rowData[4] == 'W50'){
        var color_to_set = '#f1f9f6'
        $(td).css('background-color', color_to_set)
      }*/
      if ( rowData[4] == 'W55'){
        var color_to_set = '#f1f9f6'
        $(td).css('background-color', color_to_set)
      }
      if ( rowData[4] == 'W60'){
        var color_to_set = '#d1eee1'
        $(td).css('background-color', color_to_set)
      }
      if ( rowData[4] == 'W65'){
        var color_to_set = '#f1f9f6'
        $(td).css('background-color', color_to_set)
      }
      if ( rowData[4] == 'W70'){
        var color_to_set = '#d1eee1'
        $(td).css('background-color', color_to_set)
      }
      if ( rowData[4] == 'W75'){
        var color_to_set = '#f1f9f6'
        $(td).css('background-color', color_to_set)
      }
      if ( rowData[4] == 'W80'){
        var color_to_set = '#d1eee1'
        $(td).css('background-color', color_to_set)
      }
    }
  }
]

  });

  }, []);

  
  return (
    <div className="card">
        <script src="https://code.jquery.com/jquery-3.5.1.js"/>
        <script src="https://cdn.datatables.net/1.13.4/js/jquery.dataTables.min.js"/>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossOrigin="anonymous"></script>
        <script src="https://cdn.datatables.net/responsive/2.4.1/js/dataTables.responsive.min.js" />
        
    <div className="card-header" style={{color: "#228B22", background:"#F0FFF0", fontWeight: "bold"}}>Ergebnisse</div>
    <div className="card-body">
      
      <div className="table-responsive">                   
        <table id="runner_data" className="responsive nowrap compact hover row-border" width={"100%"} cellSpacing={"0"} >
        <thead style={{ color: "#228B22", background:"#F0FFF0", border:"hidden"}}>
              <tr>
                <th data-orderable="false">Platz</th>
                <th data-orderable="false">Name</th>
                <th data-orderable="false">Vorname</th>
                <th data-orderable="false">Verein</th>
                <th id="AK" data-orderable="false">AK</th>
                <th data-orderable="false">Beste Zeit</th>
                <th data-orderable="false">Zweite Zeit</th>
                <th data-orderable="false">Gesamtzeit</th>
                <th data-orderable="false">Großweier</th>
                <th data-orderable="false">Biberach</th>
              </tr>
          </thead>         
          
        </table>
         
      </div>
    </div>
</div>
  )
}

export default Frauen