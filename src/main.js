import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import { AgeCalculator } from './../src/agecalculator.js';


$().ready(function(){
  $("form#").submit(function(event){
    event.preventDefault();

  })

});
