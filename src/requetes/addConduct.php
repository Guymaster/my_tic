<?php
    include 'bdd.php';
    header("Access-Control-Allow-Origin: *");
    header('Access-Control-Allow-Headers: Content-Type');
    try {
        $bdd = getBDD();
        $stmt = $bdd->prepare("INSERT INTO conducteur (date, nom, prenom, commune, quartier, telephone) VALUES (:date, :nom, :prenom, :nombreCondu, :communeCondu, :quartierCondu, :telephone)");
        $stmt->bindParam(':date', $date);
        $stmt->bindParam(':nom', $nom);
        $stmt->bindParam(':prenom', $prenom);
        $stmt->bindParam(':commune', $commune);
        $stmt->bindParam(':quartier', $quartier);
        $stmt->bindParam(':telephone', $telephone);
      
        $date = date('Y-m-d');
        $nom = $_GET["nom"];
        $prenom = $_GET["prenom"];
        $commune = $_GET["commune"];
        $quartier = $_GET["quartier"];
        $telephone = $_GET["telephone"];
        $stmt->execute();

        $result = [
            "succes"=>true,
        ];
      
      } catch(PDOException $e) {
        echo($e->getMessage());
        $result = [
            "succes"=>false,
        ];
      }
    
    



    echo(json_encode($result, JSON_UNESCAPED_UNICODE));
?>
