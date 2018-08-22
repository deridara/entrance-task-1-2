import { createChart } from './chart';

export function getDetailsContentLayout(ymaps) {
  var BalloonContentLayout = ymaps.templateLayoutFactory.createClass(
    `<div class="details-info">
        {% if (properties.details) %}
            <div class="details-info">
                <div class="details-label">base station</div>
                <div class="details-title">{{properties.details.serialNumber}}</div>
                {% if (properties.details.isActive) %}
                <div class="details-state details-state_active">active</div>
                {% else %}
                <div class="details-state details-state_defective">defective</div>
                {% endif %}
                <div class="details-state details-state_connections">
                    connections: {{properties.details.connections}}
                </div>
            </div>
            <div class="details-info">
                <div class="details-label">connections</div>
                <canvas class="details-chart" width="270" height="100" ></canvas>
            </div>
        {% else %}
            <div class="details-info">
                Идет загрузка данных...
            </div>
        {% endif %}
     </div>
    `
   ,
    {
//        build: function {

         
//           console.log(BalloonContentLayout); 
//          console.log(BalloonContentLayout.superclass.build);
// //          console.log(super.build);

//          ymaps.layout.templateBased.Base.build.call(this);
//        }


//       build: () => {

//         console.log("Building layout");

//         this.constructor.superclass.build.call(this);

//         console.log("Built layout");

//         console.log(this);

//         const { details } = this.getData().object.properties;
//         console.log("Got details");
//         console.log(details);
//         if (details) {
//           const container = this.getElement().querySelector('.details-chart');

//           this.connectionChart = createChart(
//             container,
//             details.chart,
//             details.isActive
//           );
//         }



//       },

//       clear: () => {
//         if (this.connectionChart) {
//           this.connectionChart.destroy();
//         }

//         BalloonContentLayout.superclass.clear.call(this);
//       }
   }
  );


  console.info(BalloonContentLayout.superclass.build);
  return BalloonContentLayout;
}
