new Vue({
    el: '#app',
    data: {
        kendaraanList: [],
        newKendaraan: {
            nama_mobil: '',
            merk: '',
            warna: '',
            nopol: '',
            harga: ''
        }
    },
    mounted() {
        this.fetchKendaraan();
    },
    methods: {
        fetchKendaraan() {
            axios.get('api.php?action=read')
                .then(response => {
                    this.kendaraanList = response.data;
                })
                .catch(error => {
                    console.error(error);
                });
        },
        addKendaraan() {
            axios.post('api.php?action=create', this.newKendaraan)
                .then(() => {
                    this.fetchKendaraan();
                    this.newKendaraan = {
                        nama_mobil: '',
                        merk: '',
                        warna: '',
                        nopol: '',
                        harga: ''
                    };
                })
                .catch(error => {
                    console.error(error);
                });
        },
        deleteKendaraan(id) {
            axios.post('api.php?action=delete', { id: id })
                .then(() => {
                    this.fetchKendaraan();
                })
                .catch(error => {
                    console.error(error);
                });
        }
    }
});
