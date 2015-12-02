<?php


$AstralDAO = new AstralDAO();


$app->get('/astral/?',function() use ($AstralDAO){
    header("Content-Type: application/json");
    echo json_encode($AstralDAO->selectAll(), JSON_NUMERIC_CHECK);
    exit();
});

$app->get('/astraltop10/?',function() use ($AstralDAO){
    header("Content-Type: application/json");
    echo json_encode($AstralDAO->selectTop10(), JSON_NUMERIC_CHECK);
    exit();
});


$app->post('/astral/?', function() use ($app, $AstralDAO){
    header("Content-Type: application/json");
     $post = $app->request->post();
    if(empty($post)){
        $post = (array) json_decode($app->request()->getBody());
    }

    echo json_encode($AstralDAO->insert($post), JSON_NUMERIC_CHECK);
    exit();
});


