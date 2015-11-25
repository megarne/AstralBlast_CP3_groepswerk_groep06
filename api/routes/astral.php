<?php


$astralDAO = new astralDAO();


$app->get('/astral/?',function() use ($astralDAO){
    header("Content-Type: application/json");
    echo json_encode($astralDAO->selectAll(), JSON_NUMERIC_CHECK);
    exit();
});

$app->get('/astraltop10/?',function() use ($astralDAO){
    header("Content-Type: application/json");
    echo json_encode($astralDAO->selectTop10(), JSON_NUMERIC_CHECK);
    exit();
});


$app->post('/astral/?', function() use ($app, $astralDAO){
    header("Content-Type: application/json");
     $post = $app->request->post();
    if(empty($post)){
        $post = (array) json_decode($app->request()->getBody());
    }

    echo json_encode($astralDAO->insert($post), JSON_NUMERIC_CHECK);
    exit();
});


