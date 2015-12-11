<?php

require_once WWW_ROOT . 'dao' . DIRECTORY_SEPARATOR . 'DAO.php';

class AstralDAO extends DAO {

	public function selectAll() {
		$sql = "SELECT * FROM `astral_scores` ORDER BY `score` DESC";
		$stmt = $this->pdo->prepare($sql);
		$stmt->execute();
		return $stmt->fetchAll(PDO::FETCH_ASSOC);
	}  


	public function selectById($id) {
		$sql = "SELECT * 
		FROM `astral_scores` 
		WHERE `id` = :id";
		$stmt = $this->pdo->prepare($sql);
		$stmt->bindValue(':id', $id);
		$stmt->execute();
		$result = $stmt->fetch(PDO::FETCH_ASSOC);
		if($result){
			return $result;
		}
		return [];
	}	


	public function selectTop10() {
		$sql = "SELECT * FROM `astral_scores` ORDER BY `score` DESC LIMIT 5";
		$stmt = $this->pdo->prepare($sql);
		$stmt->execute();
		return $stmt->fetchAll(PDO::FETCH_ASSOC);

	}  


	public function insert($data) {
		$errors = $this->getValidationErrors($data);
		if(empty($errors)) {
			$sql = "INSERT INTO `astral_scores` (`score`,`name`) 
			VALUES (:score, :name)";
			$stmt = $this->pdo->prepare($sql);
			$stmt->bindValue(':score', $data["score"]);
			$stmt->bindValue(':name', $data["name"]);
			if($stmt->execute()) {
				$insertedId = $this->pdo->lastInsertId();
				return $this->selectById($insertedId);
			}
		}
		return false;
	}


	public function getValidationErrors($data) {
		$errors = array();

		return $errors;
	}

}