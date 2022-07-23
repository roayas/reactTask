<?php
require "connection.php";


    $email    =  $_REQUEST['email'];
    $username    =  $_REQUEST['email'];
    $password = md5($_REQUEST['password']);


    try {
        $sql = "SELECT * FROM users WHERE (email='$email' OR username='$username ') AND password='$password'";
    
        $q = $conn->query($sql);
        $q->setFetchMode(PDO::FETCH_ASSOC);
    } catch (PDOException $e) {
        die("Could not connect to the database $dbname :" . $e->getMessage());
    }
     while ($row = $q->fetch()): 
            echo htmlspecialchars($row['email'].' '.$row['username']);
     endwhile; 
     ?>