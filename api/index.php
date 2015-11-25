<?php

error_reporting(E_ALL);
ini_set('display_errors', '1');

define("WWW_ROOT", dirname(dirname(__FILE__)).DIRECTORY_SEPARATOR);

require_once WWW_ROOT. "dao" .DIRECTORY_SEPARATOR. 'AstralDAO.php';


require_once WWW_ROOT. "api" .DIRECTORY_SEPARATOR. 'Slim' .DIRECTORY_SEPARATOR. 'Slim.php';

\Slim\Slim::registerAutoloader();

$app = new \Slim\Slim();


require_once WWW_ROOT. "api" .DIRECTORY_SEPARATOR. 'routes' .DIRECTORY_SEPARATOR. 'astral.php';


$app->run();

