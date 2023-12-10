<?php
include 'koneksi.php';

$action = $_GET['action'];

switch ($action) {
    case 'read':
        $result = $conn->query("SELECT * FROM kendaraan");
        $data = array();

        while ($row = $result->fetch_assoc()) {
            $data[] = $row;
        }

        echo json_encode($data);
        break;

    case 'create':
        $data = json_decode(file_get_contents("php://input"));

        $nama_mobil = $data->nama_mobil;
        $merk = $data->merk;
        $warna = $data->warna;
        $nopol = $data->nopol;
        $harga = $data->harga;

        $conn->query("INSERT INTO kendaraan (nama_mobil, merk, warna, nopol, harga) VALUES ('$nama_mobil', '$merk', '$warna', '$nopol', '$harga')");
        break;

    case 'delete':
        $data = json_decode(file_get_contents("php://input"));
        $id = $data->id;

        $conn->query("DELETE FROM kendaraan WHERE id = $id");
        break;
}
?>
