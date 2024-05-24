document.getElementById('btnTampil').addEventListener('click', function() {
    var nim = document.getElementById('nim').value;
    var nama = document.getElementById('nama').value;
    var matkul = document.getElementById('matkul').value;
    var nilai = document.getElementById('nilai').value;

    // Validasi apakah nilai berupa angka dan berada dalam rentang 0-100
    if (!isNaN(nilai) && nilai >= 0 && nilai <= 100) {
        var nilaiHuruf = '';
        var indeksNilai = 0;
        var keterangan = '';

        if (nilai >= 85 && nilai <= 100) {
            nilaiHuruf = 'A';
            indeksNilai = 4.00;
            keterangan = 'Pujian';
        } else if (nilai >= 79 && nilai <= 84) {
            nilaiHuruf = 'A-';
            indeksNilai = 3.67;
            keterangan = 'Sangat Memuaskan';
        } else if (nilai >= 74 && nilai <= 78) {
            nilaiHuruf = 'B+';
            indeksNilai = 3.33;
            keterangan = 'Sangat Memuaskan';
        } else if (nilai >= 69 && nilai <= 73) {
            nilaiHuruf = 'B';
            indeksNilai = 3.00;
            keterangan = 'Memuaskan';
        } else if (nilai >= 64 && nilai <= 68) {
            nilaiHuruf = 'B-';
            indeksNilai = 2.67;
            keterangan = 'Memuaskan';
        } else if (nilai >= 59 && nilai <= 63) {
            nilaiHuruf = 'C+';
            indeksNilai = 2.33;
        } else if (nilai >= 54 && nilai <= 58) {
            nilaiHuruf = 'C';
            indeksNilai = 2.00;
        } else if (nilai >= 41 && nilai <= 53) {
            nilaiHuruf = 'D';
            indeksNilai = 1.00;
        } else {
            nilaiHuruf = 'E';
            indeksNilai = 0.00;
        }

        var result = '<table><tr><th>NIM</th><th>Nama</th><th>Mata Kuliah</th><th>Nilai</th><th>Nilai Huruf</th><th>Indeks Nilai</th><th>Keterangan</th></tr>';
        result += '<tr><td>' + nim + '</td><td>' + nama + '</td><td>' + matkul + '</td><td>' + nilai + '</td><td>' + nilaiHuruf + '</td><td>' + indeksNilai + '</td><td>' + keterangan + '</td></tr></table>';
        document.getElementById('result').innerHTML = result;
    } else {
        alert("Masukkan nilai dalam bentuk angka dan rentang 0-100.");
    }
});

document.getElementById('btnReset').addEventListener('click', function() {
    document.getElementById('formNilai').reset();
    document.getElementById('result').innerHTML = '';
});
