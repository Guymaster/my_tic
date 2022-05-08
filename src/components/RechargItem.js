import React from 'react'

import '../styles/styleRechargItem.css';
import Delete from '../assets/delete.svg'
import update from '../assets/update.svg'
import axios from 'axios';
export default function RechargItem({ idRecharg,dateRecharg, conducteur, moyen, montant}){
   
    function deleteRecharg(id){
        const url =  encodeURI("http://tryconnectadmin/deleteProprio.php?id="+id);
        
         axios.get(url)
            .then(function (response) {
                // handle success
                console.log(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            })  
        }
    function handledelete (){
        deleteRecharg(idRecharg)
        console.log("ok")
    }

    return (
        <div id="recharg">
            <div> {dateRecharg} </div>
            <div> {conducteur} </div>
            <div> {moyen} </div>
            <div> {montant} </div>
            <div className='modSuppr'>
            <img src={Delete} height="17px" onClick={handledelete}   />
                
                
                <img src={update} height="17px" className='upadt' />
            </div>
        </div>
    );
}
