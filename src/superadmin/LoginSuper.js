import React , {Component }from 'react'
import '../styles/Login.css'
import { useNavigate } from "react-router-dom";
import Entete from "./../components/Entete";
import axios from 'axios';
import md5 from 'md5';
export default function LoginSuper() {
    const navigate = useNavigate()

    function versAdmin(){
        navigate('/');
    }
   function handleSbmit(){
    const matricul = document.getElementById('matricul').value
    const password = md5(document.getElementById('password').value)
       const url =  encodeURI("http://tryconnectadmin/tryConnectSuperAdmin.php?matricule="+matricul+"&mdp="+password)
    
     axios.get(url)
         .then(function (response) {
             // handle success
             console.log(response.data);
             if(response.data.succes){
                 sessionStorage.setItem("matricule", response.data.resultat.matricule);
                 sessionStorage.setItem("mdp", response.data.resultat.mdp);
                 sessionStorage.setItem("nomComplet", response.data.resultat.nomComplet);
                 navigate('/DashSuper');
             }else{
                 document.querySelector('.disactive').setAttribute('class',' .disactive active')
             }
            //  response.data.succes? navigate('/Menu'):
         })
         .catch(function (error) {
             // handle error
             console.log(error);
         })
         .then(function () {
             // always executed
         })  
   }
    return (
    <>
              
                <Entete lienProfil="#" showAjouter={false} />

    <div className="box-lo">

    <div className="box-login">
    <h1>SUPER ADMIN</h1>
    <div className='formLogin'>
        <label htmlFor="id" >ID</label>
        <input type="text" name='id' id='matricul' />
        <label htmlFor="motspass">MOT DE PASSE</label>
        <input type="password" name='motspass' id='password' />
        <p className="disactive">Identifiants erronés</p>
        <button className='but-login' onClick={handleSbmit}>VALIDER</button>
        <div className='supAdmin' onClick={versAdmin}>Admin</div>
    </div>
    
    </div>
    </div>
    </>
  )
}

