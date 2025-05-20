const chats = [
  {
    id: 1,
    name: "Kak Dita",
    lastMessage:
      "Bisa banget Kak, nanti kita buatkan konsep yang cocok ya 🙌 Kami akan sesuaikan dengan venue dan budget Kakak.",
    timestamp: "Hari ini",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    messages: [
      {
        id: 1,
        text: "Selamat pagi, Kak! Saya mau tanya tentang paket wedding di The Manor. Apakah ada pilihan konsep yang bisa disesuaikan dengan budget?",
        timestamp: "08:45",
        sender: "me",
        day: "Hari ini",
      },
      {
        id: 2,
        text: "Baik Kak, noted ya 🙏 Untuk venue di The Manor, kami sudah cukup familiar karena beberapa klien sebelumnya juga di sana. Nanti kita bisa bantu buatkan konsep sesuai dengan gaya yang Kakak suka, misalnya rustic, modern, atau outdoor garden.",
        timestamp: "08:47",
        sender: "them",
        day: "Hari ini",
      },
      {
        id: 3,
        text: "Oke, budget saya sekitar 20 juta. Bisa disesuaikan? Soalnya saya nggak mau terlalu mewah tapi tetap terlihat elegan.",
        timestamp: "08:50",
        sender: "me",
        day: "Hari ini",
      },
      {
        id: 4,
        text: "Bisa banget Kak, nanti kita buatkan konsep yang cocok ya 🙌 Kami akan sesuaikan dengan venue dan budget Kakak. Kami juga bisa bantu prioritaskan pengeluaran supaya tetap maksimal hasilnya.",
        timestamp: "08:52",
        sender: "them",
        day: "Hari ini",
      },
    ],
  },
  {
    id: 2,
    name: "Mas Raka",
    lastMessage:
      "Siap Kak, ditunggu ya 🙏 Kalau sudah fix tema-nya, kita bisa mulai produksi desain awal.",
    timestamp: "19/04",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    messages: [
      {
        id: 1,
        text: "Mas, fotobooth-nya bisa custom tema nggak? Aku pengen yang agak unik dan sesuai warna dekorasi.",
        timestamp: "10:15",
        sender: "me",
        day: "19/04",
      },
      {
        id: 2,
        text: "Bisa Kak, kami punya beberapa contoh dari klien sebelumnya, tapi kalau Kakak punya konsep sendiri juga boleh banget. Nanti tim desain kami bantu buatkan mockup-nya dulu sebelum dicetak.",
        timestamp: "10:17",
        sender: "them",
        day: "19/04",
      },
      {
        id: 3,
        text: "Makasih Mas, aku diskusi dulu ya sama pasangan. Mau cari inspirasi dulu juga biar lebih yakin konsepnya.",
        timestamp: "10:20",
        sender: "me",
        day: "19/04",
      },
      {
        id: 4,
        text: "Siap Kak, ditunggu ya 🙏 Kalau sudah fix tema-nya, kita bisa mulai produksi desain awal. Biasanya butuh 3–5 hari kerja dari proses approval sampai produksi.",
        timestamp: "10:21",
        sender: "them",
        day: "19/04",
      },
    ],
  },
  {
    id: 3,
    name: "Mbak Lala",
    lastMessage:
      "Sip Kak! Semoga lancar yaa 💐 Nanti jangan lupa kabari kalau ada perubahan warna atau detail tambahan.",
    timestamp: "18/04",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    messages: [
      {
        id: 1,
        text: "Halo Mbak, mau nanya soal dekorasi rustic. Apakah bisa disesuaikan dengan area semi outdoor?",
        timestamp: "09:00",
        sender: "me",
        day: "18/04",
      },
      {
        id: 2,
        text: "Hai Kak! Rustic bisa banget, apalagi kalau semi outdoor. Kami ada vendor langganan yang biasa bikin dekorasi dengan elemen kayu, kain linen, dan pencahayaan hangat.",
        timestamp: "09:02",
        sender: "them",
        day: "18/04",
      },
      {
        id: 3,
        text: "Warna dominan kayu & putih ya Mbak. Kami pengen kesannya hangat tapi tetap elegan, nggak terlalu rame.",
        timestamp: "09:05",
        sender: "me",
        day: "18/04",
      },
      {
        id: 4,
        text: "Noted! Kami siapin moodboard-nya dulu ya. Setelah itu nanti kita bisa revisi bareng kalau ada yang perlu ditambah atau dikurangi.",
        timestamp: "09:06",
        sender: "them",
        day: "18/04",
      },
      {
        id: 5,
        text: "Sip Kak! Semoga lancar yaa 💐 Nanti jangan lupa kabari kalau ada perubahan warna atau detail tambahan.",
        timestamp: "09:07",
        sender: "them",
        day: "18/04",
      },
    ],
  },
  {
    id: 4,
    name: "Kak Farhan",
    lastMessage:
      "Oke Kak, minggu depan ya 😊 Nanti kita cek cuaca juga biar nggak hujan pas sesi pemotretan.",
    timestamp: "17/04",
    avatar: "https://randomuser.me/api/portraits/men/4.jpg",
    messages: [
      {
        id: 1,
        text: "Halo Kak, saya mau jadwalkan foto prewedding. Rencana lokasinya outdoor, semoga bisa dapet pencahayaan bagus.",
        timestamp: "14:20",
        sender: "me",
        day: "17/04",
      },
      {
        id: 2,
        text: "Halo juga Kak! Lokasi dan tanggalnya sudah ada? Kalau outdoor, kami biasanya shooting pagi atau sore untuk dapat lighting natural terbaik.",
        timestamp: "14:21",
        sender: "them",
        day: "17/04",
      },
      {
        id: 3,
        text: "Rencananya di Batu, minggu depan. Pagi hari sekitar jam 7 biar adem dan sepi.",
        timestamp: "14:23",
        sender: "me",
        day: "17/04",
      },
      {
        id: 4,
        text: "Oke Kak, minggu depan ya 😊 Nanti kita cek cuaca juga biar nggak hujan pas sesi pemotretan. Jangan lupa bawa baju ganti dan properti kecil biar hasilnya lebih bervariasi.",
        timestamp: "14:24",
        sender: "them",
        day: "17/04",
      },
    ],
  },
  {
    id: 5,
    name: "Mbak Nia",
    lastMessage:
      "Tenang Kak, nanti kita bantu semua rundown-nya 🙌 Termasuk koordinasi antar vendor biar semua berjalan lancar.",
    timestamp: "16/04",
    avatar: "https://randomuser.me/api/portraits/women/5.jpg",
    messages: [
      {
        id: 1,
        text: "Mbak, saya bingung urutan acaranya gimana 😅 Takutnya nanti pas hari H malah keteteran.",
        timestamp: "18:00",
        sender: "me",
        day: "16/04",
      },
      {
        id: 2,
        text: "Hehe santai Kak, kita bisa bantu buatin rundown ya. Biasanya kami mulai dari akad, lalu resepsi, lalu sesi foto keluarga, dll sesuai flow venue.",
        timestamp: "18:02",
        sender: "them",
        day: "16/04",
      },
      {
        id: 3,
        text: "Yang penting akad-nya jam 9 ya? Sisanya fleksibel aja asal nggak terlalu mepet waktunya.",
        timestamp: "18:03",
        sender: "me",
        day: "16/04",
      },
      {
        id: 4,
        text: "Iya betul Kak, dari situ kita susun mundur acaranya. Nanti kami buat draft-nya dulu, lalu Kakak bisa review atau request perubahan.",
        timestamp: "18:05",
        sender: "them",
        day: "16/04",
      },
      {
        id: 5,
        text: "Tenang Kak, nanti kita bantu semua rundown-nya 🙌 Termasuk koordinasi antar vendor biar semua berjalan lancar. Kami akan pastikan semuanya on track di hari H.",
        timestamp: "18:06",
        sender: "them",
        day: "16/04",
      },
    ],
  },
];

export default chats;
