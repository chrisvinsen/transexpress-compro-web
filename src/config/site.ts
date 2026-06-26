// ─────────────────────────────────────────────────────────────────────────────
// Trans Express — single source of truth for brand & contact details.
// ⚠️ Values marked `TODO` are PLACEHOLDERS. Replace them with real data
//    before launch. Nothing here should be treated as a confirmed fact yet.
// ─────────────────────────────────────────────────────────────────────────────
export const siteConfig = {
  name: 'Trans Express',
  legalName: '', // TODO: isi nama badan hukum (mis. "PT Trans Express ...")
  tagline: 'Kirim Cepat. Sampai Aman.',
  description:
    'Trans Express — jasa import China ke Indonesia yang cepat dan terpercaya. Layanan door-to-door, pelacakan pengiriman, dan pengurusan kepabeanan tuntas. Sea freight LCL/FCL & air freight.',
  url: 'https://transexpress.id', // TODO: konfirmasi domain produksi

  contact: {
    whatsapp: {
      // TODO: ganti dengan nomor WhatsApp resmi Trans Express.
      primary: { number: '6285284578375', display: '085284578375' },
    },
    // TODO: ganti dengan email resmi Trans Express.
    email: { cs: 'transexpress2400@gmail.com' },
    address: {
      // TODO: ganti dengan alamat kantor Trans Express.
      street: 'Jakarta Barat',
      city: 'Indonesia',
      gmaps: 'https://www.google.com/maps/search/?api=1&query=Jakarta+Barat+Indonesia',
    },
    hours: {
      weekday: '08:00 - 17:00 WIB',
      saturday: 'Tutup',
      sunday: 'Tutup',
    },
  },

  social: {
    // TODO: ganti dengan akun media sosial resmi Trans Express.
    instagram: 'https://instagram.com/transexpresscargo',
    linkedin: 'https://linkedin.com/company/transexpress',
    tiktok: 'https://tiktok.com/@transexpress',
  },

  stats: {
    // TODO: ganti dengan angka resmi Trans Express.
    shipments: '10.000+',
    shipmentsLabel: 'Pengiriman Berhasil',
  },
};
