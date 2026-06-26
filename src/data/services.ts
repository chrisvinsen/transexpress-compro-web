// ─────────────────────────────────────────────────────────────────────────────
// Trans Express — service catalogue. Single source of truth for every service
// detail page (rendered via src/pages/layanan/[slug].astro) and the homepage /
// layanan index. All copy is original Bahasa Indonesia.
// ─────────────────────────────────────────────────────────────────────────────

export type Category = 'pengiriman' | 'titip-beli' | 'pembayaran';

export interface Step {
  t: string;
  d: string;
}
export interface Pair {
  t: string;
  d: string;
}
export interface Spec {
  label: string;
  value: string;
}
export interface QA {
  q: string;
  a: string;
}

export interface Service {
  slug: string; // path under /layanan/<slug>
  category: Category;
  name: string; // card / nav label
  group: string; // sub-grouping label (e.g. "Kargo Laut")
  tagline: string; // one-line value prop
  image: string; // /public path (has .avif/.webp siblings)
  icon: string; // inner SVG markup (stroke, currentColor)
  imgIcon?: string; // Optional image to replace icon
  intro: string; // detail-page opening paragraph
  specs: Spec[];
  steps: Step[];
  benefits: Pair[];
  faqs: QA[];
  productCats?: string[];
  meta: { title: string; description: string; keywords: string };
}

const cat = {
  pengiriman: 'Pengiriman Kargo',
  'titip-beli': 'Titip Beli',
  pembayaran: 'Pembayaran',
} as const;

export const categoryLabel = cat;

export const services: Service[] = [
  // ── PENGIRIMAN ─────────────────────────────────────────────────────────────
  {
    slug: 'kargo-laut-lcl',
    category: 'pengiriman',
    group: 'Kargo Laut',
    name: 'Kargo Laut LCL',
    tagline: 'Bayar sesuai volume (CBM), tanpa sewa kontainer penuh.',
    image: '/images/service-sea-lcl.webp',
    icon: '<path d="M2 21c.6.5 1.2 1 2.5 1 1.3 0 1.9-.5 2.5-1 .6-.5 1.2-1 2.5-1 1.3 0 1.9.5 2.5 1 .6.5 1.2 1 2.5 1 1.3 0 1.9-.5 2.5-1 .6-.5 1.2-1 2.5-1 1.3 0 1.9.5 2.5 1"/><path d="M19.38 20A11.6 11.6 0 0 0 21 14l-9-4-9 4c0 2.9.94 5.34 2.81 7.76"/><path d="M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6"/><path d="M12 10v4"/><path d="M12 2v3"/>',
    intro:
      'Cara paling efisien kirim barang jumlah kecil-menengah. Kiriman akan digabung di gudang China, lalu diantar aman sampai alamat Anda di Indonesia.',
    specs: [
      { label: 'Estimasi', value: '3 – 4 minggu' },
      { label: 'Minimum', value: '0,1 CBM' },
      { label: 'Dokumen', value: 'Invoice, Packing List' },
    ],
    steps: [
      { t: 'Pengiriman ke Gudang China', d: 'Supplier mengirim pesanan ke fasilitas gudang konsolidasi kami yang berada di Yiwu maupun Guangzhou.' },
      { t: 'Pengukuran & Konsolidasi', d: 'Kami akan menghitung volume (CBM) secara aktual, melakukan pengecekan kondisi luar barang, dan memuatnya bersama ke dalam kontainer.' },
      { t: 'Perjalanan via Laut', d: 'Kontainer pesanan Anda akan segera diberangkatkan mengarungi lautan menuju Indonesia.' },
      { t: 'Pengurusan Clearance', d: 'Seluruh tahapan administrasi dan kepabeanan (clearance) kontainer akan kami tangani sepenuhnya hingga tuntas.' },
      { t: 'Distribusi Lokal', d: 'Barang Anda akan dikirimkan dengan aman secara langsung ke alamat tujuan di berbagai wilayah Indonesia.' },
    ],
    benefits: [
      { t: 'Lebih hemat', d: 'Hanya membayar ruang kontainer yang benar-benar terpakai.' },
      { t: 'Fleksibel', d: 'Bisa kirim sedikit tanpa beban sewa kontainer penuh.' },
      { t: 'All-in', d: 'Harga sudah termasuk ongkos kirim dan pengurusan kepabeanan.' },
    ],
    faqs: [
      { q: 'Apa itu CBM?', a: 'CBM (Cubic Meter) adalah satuan volume kiriman. 1 CBM setara ukuran 1m x 1m x 1m.' },
      { q: 'Berapa tarif per CBM?', a: 'Tarif menyesuaikan jenis barang. Hubungi tim kami untuk penawaran terbaik.' },
      { q: 'Bagaimana jika di bawah 0,1 CBM?', a: 'Tetap bisa dikirim, namun dihitung dengan tarif minimum 0,1 CBM.' },
    ],
    productCats: ['Fashion & Tas', 'Sepatu', 'Elektronik & Umum', 'Kosmetik', 'Makanan & Minuman', 'Tekstil & Kain', 'Mainan & Hobi', 'Suku Cadang'],
    meta: {
      title: 'Kargo Laut LCL China–Indonesia | Trans Express',
      description: 'Jasa import laut LCL dari China: bayar sesuai CBM, door-to-door, kepabeanan diurus. Solusi hemat untuk volume kecil hingga menengah.',
      keywords: 'kargo laut lcl china, jasa import lcl, import china per cbm, forwarder laut china indonesia',
    },
  },
  {
    slug: 'kargo-laut-fcl',
    category: 'pengiriman',
    group: 'Kargo Laut',
    name: 'Kargo Laut FCL',
    tagline: 'Satu kontainer penuh khusus barang Anda — aman & efisien.',
    image: '/images/service-sea-fcl.webp',
    icon: '<path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M17 18h1"/><path d="M12 18h1"/><path d="M7 18h1"/>',
    intro:
      'Sewa satu kontainer penuh khusus untuk Anda. Pilihan terbaik bagi importir partai besar dengan keamanan maksimal dan proses pengiriman lebih cepat.',
    specs: [
      { label: 'Estimasi', value: '3 – 4 minggu' },
      { label: 'Pilihan', value: '20ft / 40ft / 40HQ' },
      { label: 'Dokumen', value: 'BL, Invoice, Packing List' },
    ],
    steps: [
      { t: 'Pemesanan Kontainer', d: 'Kami akan memesan ruang kapal laut sekaligus mengatur penjemputan kontainer kosong (empty container).' },
      { t: 'Stuffing di Pabrik', d: 'Kontainer kosong akan diantarkan ke pabrik supplier Anda untuk melakukan proses pemuatan barang (stuffing).' },
      { t: 'Pengiriman via Laut', d: 'Kontainer yang sudah penuh akan segera diberangkatkan melalui kapal kargo langsung menuju pelabuhan Jakarta.' },
      { t: 'Pengurusan Clearance', d: 'Segala bentuk prosedur dan administrasi clearance kontainer akan ditangani sepenuhnya oleh tim kami.' },
      { t: 'Pengiriman ke Gudang', d: 'Sesampainya di pelabuhan, kontainer akan langsung ditarik dan diantarkan ke gudang Anda untuk proses bongkar.' },
    ],
    benefits: [
      { t: 'Keamanan penuh', d: 'Barang tidak tercampur dengan milik pihak lain.' },
      { t: 'Biaya satuan murah', d: 'Sangat efisien untuk volume sangat besar.' },
      { t: 'Lebih cepat', d: 'Tanpa waktu tunggu konsolidasi atau pemisahan barang.' },
    ],
    faqs: [
      { q: 'Beda 20ft dan 40ft?', a: '20ft memuat sekitar 28 CBM, 40ft sekitar 58 CBM.' },
      { q: 'Apakah bisa door to door?', a: 'Bisa, dari pabrik supplier langsung ke gudang Anda.' },
      { q: 'Berapa berat maksimal?', a: 'Umumnya 20–25 ton per kontainer, menyesuaikan regulasi jalan setempat.' },
    ],
    productCats: ['Furnitur', 'Material Bangunan', 'Mesin Industri', 'Otomotif', 'Elektronik Massal', 'Tekstil Massal', 'FMCG'],
    meta: {
      title: 'Kargo Laut FCL — 1 Kontainer Penuh | Trans Express',
      description: 'Jasa import FCL China: kontainer 20ft/40ft/40HQ khusus barang Anda, door-to-door, kepabeanan diurus tuntas.',
      keywords: 'kargo laut fcl china, import 1 kontainer penuh, jasa fcl china indonesia, forwarder fcl',
    },
  },
  {
    slug: 'kargo-laut-express',
    category: 'pengiriman',
    group: 'Kargo Laut',
    name: 'Laut Express',
    tagline: 'Jalur laut prioritas — lebih cepat dari LCL reguler.',
    image: '/images/service-sea-express.webp',
    icon: '<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>',
    intro:
      'Jalur laut prioritas dengan kapal direct tanpa transit. Solusi tepat untuk pengiriman lebih cepat dengan biaya yang tetap sehemat sea freight biasa.',
    specs: [
      { label: 'Estimasi', value: '10 – 15 hari' },
      { label: 'Minimum', value: '1 CBM' },
      { label: 'Dokumen', value: 'Invoice, Packing List' },
    ],
    steps: [
      { t: 'Booking Prioritas', d: 'Setiap pesanan akan diprioritaskan untuk mendapatkan slot utama (first-in) di fasilitas gudang China kami.' },
      { t: 'Fast Stuffing', d: 'Tanpa waktu tunggu yang lama, barang Anda akan segera dimuat ke dalam kontainer dengan jadwal keberangkatan paling awal.' },
      { t: 'Direct Vessel', d: 'Pengiriman dilakukan melalui rute kapal langsung (tanpa transit), sehingga waktu tempuh menuju Indonesia menjadi jauh lebih singkat.' },
      { t: 'Prioritas Bongkar', d: 'Setibanya di pelabuhan Jakarta, kontainer layanan Fastindo Express akan mendapatkan keistimewaan untuk ditarik dan dibongkar lebih dulu.' },
    ],
    benefits: [
      { t: 'Potong waktu tunggu', d: 'Transit lebih singkat dibanding LCL reguler.' },
      { t: 'Pendampingan khusus', d: 'Satu Account Manager memantau barang Anda.' },
      { t: 'Lebih pasti', d: 'Ideal untuk barang jualan event atau musiman.' },
    ],
    faqs: [
      { q: 'Bedanya dengan LCL biasa?', a: 'Memakai kapal direct + prioritas stuffing/unstuffing sehingga memangkas 3–5 hari.' },
      { q: 'Berapa selisih harganya?', a: 'Sedikit di atas reguler, tetap jauh lebih murah dari jalur udara.' },
      { q: 'Dijamin tepat waktu?', a: 'Kami menekan delay internal; cuaca laut tetap faktor di luar kendali (force majeure).' },
    ],
    productCats: ['Stok Musiman', 'Fast Fashion', 'Produk Flash Sale', 'Peluncuran Baru', 'Toko Online'],
    meta: {
      title: 'Laut Express — Sea Freight Cepat & Prioritas | Trans Express',
      description: 'Jalur laut prioritas China–Indonesia, estimasi 10–15 hari. Prioritas muat & kapal direct dengan biaya hemat sea freight.',
      keywords: 'sea freight express china, jalur laut cepat china, import laut prioritas, forwarder express',
    },
  },
  {
    slug: 'kargo-udara',
    category: 'pengiriman',
    group: 'Kargo Udara',
    name: 'Kargo Udara',
    tagline: 'Untuk barang mendesak — tiba dalam hitungan hari.',
    image: '/images/service-air-freight.webp',
    icon: '<path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.2-1.1.6L3 8l6 3.5L7 15l-3.5-1.5L2 15l4 4 4-1.5L13.5 15l3.5 6 1.2-.7c.4-.2.7-.6.6-1.1Z"/>',
    intro:
      'Solusi tercepat untuk barang mendesak. Sangat ideal untuk pengiriman sampel produk, elektronik bernilai tinggi, atau stok yang harus segera dijual.',
    specs: [
      { label: 'Estimasi', value: '7 – 8 hari' },
      { label: 'Minimum', value: '1 kg' },
      { label: 'Dokumen', value: 'Invoice, Packing List, AWB' },
    ],
    steps: [
      { t: 'Kirim ke Gudang Udara', d: 'Pihak supplier mengirimkan pesanan Anda ke fasilitas gudang udara kami yang terletak di China (Guangzhou atau Yiwu).' },
      { t: 'Penerbangan Kargo', d: 'Paket Anda akan segera diterbangkan menuju Indonesia menggunakan armada pesawat kargo.' },
      { t: 'Proses Clearance Udara', d: 'Seluruh tahapan dan administrasi clearance khusus jalur udara akan kami tangani sepenuhnya.' },
      { t: 'Pengiriman Express', d: 'Setelah tiba, barang akan langsung didistribusikan secara kilat ke alamat Anda menggunakan layanan kurir darat.' },
    ],
    benefits: [
      { t: 'Sangat cepat', d: 'Cocok mengejar tenggat produksi atau tren pasar.' },
      { t: 'Penanganan aman', d: 'Handling di bandara lebih ketat, risiko kerusakan menurun.' },
      { t: 'Kuota kecil pun bisa', d: 'Mulai dari berat 1 kg saja.' },
    ],
    faqs: [
      { q: 'Bagaimana hitung beratnya?', a: 'Diambil yang lebih besar antara berat aktual (kg) dan berat volume (p×l×t/6000).' },
      { q: 'Barang apa yang dilarang?', a: 'Barang mudah terbakar, baterai murni, senjata, dan barang ilegal tidak bisa via udara.' },
    ],
    productCats: ['Elektronik', 'Sampel Produk', 'Kosmetik Premium', 'Suku Cadang Mendesak', 'Dokumen'],
    meta: {
      title: 'Kargo Udara China–Indonesia (7–8 Hari) | Trans Express',
      description: 'Jasa import udara dari China, estimasi 7–8 hari, mulai 1 kg. Cocok untuk sampel, dokumen, dan barang mendesak.',
      keywords: 'kargo udara china, air freight china indonesia, jasa import udara cepat, forwarder udara',
    },
  },

  // ── TITIP BELI ───────────────────────────────────────────────────────────
  {
    slug: 'titip-beli-1688',
    category: 'titip-beli',
    group: 'Marketplace China',
    name: '1688',
    tagline: 'Grosir langsung dari pabrik, tanpa repot Alipay.',
    image: '/images/warehouse-1.webp',
    icon: '<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>',
    imgIcon: '/images/logo-1688.png',
    intro:
      'Dapatkan harga grosir termurah langsung dari pabrik di 1688. Kami bantu proses belanja, atasi kendala bahasa & pembayaran, hingga pengiriman aman sampai depan pintu Anda.',
    specs: [
      { label: 'Estimasi', value: 'Ikut layanan kirim' },
      { label: 'Minimum', value: 'Sesuai MOQ toko' },
      { label: 'Dokumen', value: 'Link produk / daftar Excel' },
    ],
    steps: [
      { t: 'Kirim link produk', d: 'Berikan link produk dari aplikasi atau web 1688 ke tim kami.' },
      { t: 'Estimasi & bayar', d: 'Kami hitung total harga dalam Rupiah untuk Anda bayar.' },
      { t: 'Beli & negosiasi', d: 'Tim kami memesan dan menegosiasikan harga grosir dengan supplier.' },
      { t: 'Cek di gudang China', d: 'Jumlah dan kondisi barang diperiksa secara visual.' },
      { t: 'Kirim ke Indonesia', d: 'Barang dikirim via laut atau udara sesuai pilihan.' },
    ],
    benefits: [
      { t: 'Harga pabrik', d: 'Harga modal termurah untuk dijual kembali.' },
      { t: 'Tanpa repot Alipay', d: 'Tak perlu khawatir blokir akun atau limit transfer.' },
      { t: 'Cek awal', d: 'Mencegah barang cacat dikirim sebelum berangkat.' },
    ],
    faqs: [
      { q: 'Berapa fee jasanya?', a: 'Dihitung dari total nilai belanja dan sangat bersaing. Hubungi kami untuk rinciannya.' },
      { q: 'Ada MOQ?', a: 'MOQ menyesuaikan kebijakan masing-masing toko/pabrik di 1688.' },
      { q: 'Jika barang tidak sesuai?', a: 'Kami cek visual di gudang China dan bantu retur sebelum dikirim.' },
    ],
    meta: {
      title: 'Titip Beli dari 1688 — Grosir Pabrik China | Trans Express',
      description: 'Jasa titip beli 1688: harga grosir pabrik, tanpa Alipay, dicek di gudang China, dikirim sampai Indonesia.',
      keywords: 'jasa titip beli 1688, jasa order 1688, import 1688 china, belanja grosir china',
    },
  },
  {
    slug: 'titip-beli-taobao',
    category: 'titip-beli',
    group: 'Marketplace China',
    name: 'Taobao',
    tagline: 'Belanja eceran & produk unik tanpa akun sendiri.',
    image: '/images/warehouse-2.webp',
    icon: '<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>',
    imgIcon: '/images/logo-taobao.png',
    intro:
      'Beli jutaan produk eceran unik dari Taobao dengan mudah. Bebas kendala bahasa Mandarin dan tanpa perlu rekening Tiongkok, semua kami yang urus hingga tiba di Indonesia.',
    specs: [
      { label: 'Estimasi', value: 'Ikut layanan kirim' },
      { label: 'Minimum', value: 'Mulai 1 pcs' },
      { label: 'Dokumen', value: 'Link produk Taobao' },
    ],
    steps: [
      { t: 'Kirim link / foto', d: 'Berikan link produk atau foto barang yang Anda incar.' },
      { t: 'Estimasi biaya', d: 'Kami hitung total harga dalam Rupiah.' },
      { t: 'Proses pembelian', d: 'Tim kami memesan dan membayar langsung ke penjual Taobao.' },
      { t: 'Cek di gudang', d: 'Kesesuaian warna dan ukuran diperiksa di gudang China.' },
      { t: 'Kirim cepat', d: 'Dikirim via jalur udara atau laut sesuai pilihan Anda.' },
    ],
    benefits: [
      { t: 'Bebas eceran', d: 'Cocok untuk pemakaian pribadi atau dropshipper modal kecil.' },
      { t: 'Akses tanpa batas', d: 'Temukan produk yang belum masuk pasar Indonesia.' },
      { t: 'Konsolidasi', d: 'Belanja dari banyak toko, kami satukan jadi satu paket.' },
    ],
    faqs: [
      { q: 'Bisa cari dari gambar?', a: 'Bisa, tim kami membantu mencarikan link produk berdasarkan foto.' },
      { q: 'Akun Taobao terblokir?', a: 'Gunakan jasa kami agar tidak perlu memakai akun pribadi.' },
      { q: 'Lama kirim lokal di China?', a: 'Biasanya penjual mengirim ke gudang kami dalam 2–4 hari.' },
    ],
    meta: {
      title: 'Titip Beli dari Taobao — Eceran & Produk Unik | Trans Express',
      description: 'Jasa titip beli Taobao: belanja eceran produk unik China tanpa akun & tanpa Alipay, dikirim sampai Indonesia.',
      keywords: 'jasa titip beli taobao, jasa order taobao, belanja taobao indonesia, import taobao',
    },
  },
  {
    slug: 'titip-beli-alibaba',
    category: 'titip-beli',
    group: 'Marketplace China',
    name: 'Alibaba',
    tagline: 'Sourcing B2B & custom branding (OEM/ODM).',
    image: '/images/warehouse-3.webp',
    icon: '<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>',
    imgIcon: '/images/logo-alibaba.png',
    intro:
      'Pusat supplier dan pabrik global terpercaya. Ingin bangun brand sendiri (OEM) atau impor skala besar? Kami bantu negosiasi, verifikasi, hingga proses import dan kepabeanan.',
    specs: [
      { label: 'Estimasi', value: '12 – 30 hari' },
      { label: 'Minimum', value: 'MOQ pabrik' },
      { label: 'Dokumen', value: 'Invoice, Packing List' },
    ],
    steps: [
      { t: 'Kirim spesifikasi', d: 'Berikan link Alibaba atau rincian spesifikasi/custom yang diinginkan.' },
      { t: 'Cari & negosiasi', d: 'Kami carikan pabrik terbaik dan negosiasikan harga serta MOQ.' },
      { t: 'Sampling (opsional)', d: 'Bisa kirim sampel sebelum produksi massal.' },
      { t: 'Produksi & cek', d: 'Setelah produksi, kami bantu atur inspeksi kualitas.' },
      { t: 'Kirim & kepabeanan', d: 'Dikirim via FCL/LCL dan kepabeanan kami urus tuntas.' },
    ],
    benefits: [
      { t: 'Transaksi aman', d: 'Terhindar dari supplier abal-abal di Alibaba.' },
      { t: 'Komunikasi pro', d: 'Negosiasi teknis produksi lebih efektif lewat tim kami.' },
      { t: 'Terintegrasi', d: 'Dari cari barang hingga kontainer tiba, semua kami urus.' },
    ],
    faqs: [
      { q: 'Bisa cetak logo sendiri?', a: 'Bisa. Layanan OEM/ODM umum di Alibaba dan kami bantu negosiasinya.' },
      { q: 'Cara bayar tagihan besar?', a: 'Anda bayar dalam Rupiah ke rekening kami, transfer ke supplier kami yang urus.' },
      { q: 'Bisa inspeksi pabrik?', a: 'Ya, dengan biaya tambahan kami dapat mengatur audit pabrik di China.' },
    ],
    meta: {
      title: 'Titip Beli dari Alibaba — Sourcing & OEM/ODM | Trans Express',
      description: 'Jasa sourcing Alibaba B2B: negosiasi pabrik, custom branding OEM/ODM, inspeksi kualitas, import sampai tuntas.',
      keywords: 'jasa sourcing alibaba, oem odm china, supplier alibaba terverifikasi, import b2b china',
    },
  },
  {
    slug: 'titip-beli-aliexpress',
    category: 'titip-beli',
    group: 'Marketplace China',
    name: 'AliExpress',
    tagline: 'Konsolidasi paket, hemat ongkir, bayar bank lokal.',
    image: '/images/warehouse-4.webp',
    icon: '<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>',
    imgIcon: '/images/logo-aliexpress.png',
    intro:
      'Hindari ongkir per paket yang mahal dari AliExpress. Belanja dari banyak toko, kami konsolidasikan di gudang China jadi satu paket hemat ke Indonesia. Cukup bayar via bank lokal.',
    specs: [
      { label: 'Estimasi', value: 'Ikut layanan kirim' },
      { label: 'Minimum', value: 'Mulai 1 pcs' },
      { label: 'Dokumen', value: 'Link produk AliExpress' },
    ],
    steps: [
      { t: 'Pilih produk', d: 'Cari produk yang Anda inginkan di aplikasi/web AliExpress.' },
      { t: 'Kirim link', d: 'Kirim link produk ke Customer Service kami.' },
      { t: 'Bayar lokal', d: 'Total dihitung dalam Rupiah, transfer ke bank lokal kami tanpa kartu kredit.' },
      { t: 'Konsolidasi', d: 'Barang dari banyak toko dikumpulkan jadi satu paket.' },
      { t: 'Terima beres', d: 'Paket dikirim ke Indonesia dan diantar ke rumah Anda.' },
    ],
    benefits: [
      { t: 'Tanpa kartu kredit', d: 'Cocok bagi yang tidak punya metode pembayaran internasional.' },
      { t: 'Ongkir jauh lebih murah', d: 'Gabungkan kiriman internasional untuk hemat besar.' },
      { t: 'Paket lebih aman', d: 'Dikumpulkan rapi di gudang sebelum dikirim.' },
    ],
    faqs: [
      { q: 'Kenapa pakai jasa?', a: 'Kirim langsung antar-toko sering mahal dan lambat berbulan-bulan via pos biasa.' },
      { q: 'Ada biaya konsolidasi?', a: 'Tidak ada biaya tersembunyi; fee kami transparan termasuk konsolidasi.' },
      { q: 'Cocok untuk barang apa?', a: 'Sparepart kecil, komponen elektronik, aksesori hobi, dan barang langka.' },
    ],
    meta: {
      title: 'Titip Beli dari AliExpress — Konsolidasi Hemat | Trans Express',
      description: 'Jasa titip beli AliExpress: konsolidasi paket hemat ongkir, bayar via bank lokal tanpa kartu kredit.',
      keywords: 'jasa titip beli aliexpress, konsolidasi paket china, import aliexpress indonesia',
    },
  },
  {
    slug: 'titip-beli-jdcom',
    category: 'titip-beli',
    group: 'Marketplace China',
    name: 'JD.com',
    tagline: 'Elektronik & gadget 100% original dari JD domestik.',
    image: '/images/warehouse-5.webp',
    icon: '<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>',
    imgIcon: '/images/logo-jdcom.png',
    intro:
      'Pilihan utama anti barang palsu untuk smartphone dan gadget rilis terbaru. Kami bantu belanja di JD.com domestik dengan jaminan keaslian dan pengiriman ekstra aman ke Indonesia.',
    specs: [
      { label: 'Estimasi', value: 'Disarankan udara (5–7 hari)' },
      { label: 'Minimum', value: 'Mulai 1 pcs' },
      { label: 'Dokumen', value: 'Link produk JD.com' },
    ],
    steps: [
      { t: 'Telusuri JD.com', d: 'Cari produk impian Anda di jd.com versi domestik China.' },
      { t: 'Konsultasi & estimasi', d: 'Kirim link; kami cek ketersediaan, promo, dan hitung total Rupiah.' },
      { t: 'Bayar aman', d: 'Pembayaran ke rekening perusahaan kami.' },
      { t: 'Cek ekstra', d: 'Pengecekan visual ekstra hati-hati di gudang.' },
      { t: 'Kirim prioritas', d: 'Disarankan via udara agar gadget cepat dan aman sampai.' },
    ],
    benefits: [
      { t: 'Jaminan original', d: 'Kontrol kualitas paling ketat di China, bebas KW.' },
      { t: 'Produk baru', d: 'Dapatkan gadget rilis terbaru sebelum masuk Indonesia.' },
      { t: 'Harga domestik', d: 'Sering lebih murah dibanding rilis global.' },
    ],
    faqs: [
      { q: 'Aman kirim elektronik mahal?', a: 'Sangat aman. Kami sarankan jalur udara dengan perlindungan ekstra.' },
      { q: 'Bagaimana garansinya?', a: 'Garansi berlaku di China; klaim bisa kami bantu kirim balik (biaya tambahan).' },
    ],
    meta: {
      title: 'Titip Beli dari JD.com — Elektronik Original | Trans Express',
      description: 'Jasa titip beli JD.com domestik China: elektronik & gadget 100% original, pengiriman ekstra aman ke Indonesia.',
      keywords: 'jasa titip beli jd.com, gadget original china, elektronik import china, jd domestik',
    },
  },

  // ── PEMBAYARAN ─────────────────────────────────────────────────────────────
  {
    slug: 'transfer-rmb',
    category: 'pembayaran',
    group: 'Transfer & Remittance',
    name: 'Transfer RMB',
    tagline: 'Bayar supplier China (Yuan) dengan kurs bersaing.',
    image: '/images/service-transfer-rmb.webp',
    icon: '<path d="M2 7v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/><path d="M6 12h.01"/><path d="M18 12h.01"/>',
    intro:
      'Bayar pabrik di China dalam Yuan (RMB) tanpa ribet. Kami berikan kurs lebih bersaing dari bank konvensional, proses cepat, dan bukti transfer sah.',
    specs: [
      { label: 'Estimasi', value: '< 1 hari kerja' },
      { label: 'Tujuan', value: 'Bank / Alipay / WeChat' },
      { label: 'Dokumen', value: 'Invoice tagihan supplier' },
    ],
    steps: [
      { t: 'Cek kurs & detail', d: 'Hubungi WhatsApp kami untuk kurs hari ini dan detail rekening supplier.' },
      { t: 'Transfer Rupiah', d: 'Anda transfer nominal setara dalam Rupiah ke rekening kami.' },
      { t: 'Proses remittance', d: 'Dana dikirim ke rekening bank China, Alipay, atau WeChat Pay supplier.' },
      { t: 'Bukti transfer', d: 'Kami kirimkan bukti transfer untuk diteruskan ke supplier.' },
    ],
    benefits: [
      { t: 'Kurs terbaik', d: 'Lebih murah dibanding bank konvensional.' },
      { t: 'Sangat cepat', d: 'Biasanya masuk di hari yang sama atau paling lambat H+1.' },
      { t: 'Transparan', d: 'Setiap transaksi disertai bukti transfer.' },
    ],
    faqs: [
      { q: 'Berapa lama masuk?', a: 'Normalnya sekitar 1×24 jam pada hari kerja.' },
      { q: 'Bisa ke Alipay pribadi?', a: 'Bisa, kami melayani Alipay, WeChat Pay, dan rekening bank di China.' },
      { q: 'Ada biaya admin?', a: 'Ada biaya admin flat yang terjangkau. Hubungi CS kami.' },
    ],
    meta: {
      title: 'Transfer RMB ke China — Bayar Supplier Aman | Trans Express',
      description: 'Jasa transfer RMB ke supplier China: kurs bersaing, proses cepat, bukti transfer jelas. Bank, Alipay, WeChat Pay.',
      keywords: 'jasa transfer rmb china, titip bayar supplier china, remittance yuan, transfer alipay wechat',
    },
  },
  {
    slug: 'transfer-usd',
    category: 'pembayaran',
    group: 'Transfer & Remittance',
    name: 'Transfer USD',
    tagline: 'Pembayaran internasional USD yang aman & cepat.',
    image: '/images/service-transfer-rmb.webp',
    icon: '<path d="M12 1v22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>',
    intro:
      'Solusi pembayaran internasional dalam Dolar AS (USD) dengan kurs bersaing. Proses cepat, sangat aman, dan selalu disertai dengan bukti transfer resmi.',
    specs: [
      { label: 'Estimasi', value: '1 – 2 hari kerja' },
      { label: 'Tujuan', value: 'Rekening internasional' },
      { label: 'Dokumen', value: 'Invoice / kontrak' },
    ],
    steps: [
      { t: 'Cek kurs & detail', d: 'Hubungi kami untuk kurs USD hari ini dan detail rekening tujuan.' },
      { t: 'Transfer Rupiah', d: 'Anda transfer nominal setara dalam Rupiah ke rekening kami.' },
      { t: 'Proses pengiriman', d: 'Dana dikirim ke rekening tujuan dalam USD.' },
      { t: 'Bukti transfer', d: 'Bukti transfer resmi kami kirimkan kepada Anda.' },
    ],
    benefits: [
      { t: 'Kurs bersaing', d: 'Lebih efisien dibanding telegraphic transfer bank.' },
      { t: 'Proses ringkas', d: 'Tanpa antrean dan dokumen bank yang berbelit.' },
      { t: 'Aman & tercatat', d: 'Setiap transaksi terdokumentasi dengan bukti resmi.' },
    ],
    faqs: [
      { q: 'Berapa lama prosesnya?', a: 'Umumnya 1–2 hari kerja, tergantung bank tujuan.' },
      { q: 'Untuk apa saja?', a: 'Pembayaran supplier, invoice internasional, atau mitra di luar negeri.' },
      { q: 'Ada minimal transfer?', a: 'Fleksibel. Hubungi CS kami untuk detail dan biaya admin.' },
    ],
    meta: {
      title: 'Transfer USD Internasional — Aman & Cepat | Trans Express',
      description: 'Jasa transfer USD internasional: kurs bersaing, proses 1–2 hari, disertai bukti transfer resmi.',
      keywords: 'jasa transfer usd, pembayaran internasional usd, remittance dolar, titip bayar supplier luar negeri',
    },
  },
];

export const byCategory = (c: Category) => services.filter((s) => s.category === c);
export const getService = (slug: string) => services.find((s) => s.slug === slug);
