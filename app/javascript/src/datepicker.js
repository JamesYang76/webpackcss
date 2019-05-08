import Pikaday from "pikaday";
import 'pikaday/css/pikaday.css'

import Moment from "moment";


$(document).ready(function () {
  var picker = new Pikaday({
    field: document.getElementById('datepicker'),
    format: 'D MMM YYYY',
    onSelect: function() {
      console.log(this.getMoment().format('Do MMMM YYYY'));
    }
  });
})