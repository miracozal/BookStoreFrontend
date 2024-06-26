export const apiUrl = 'https://localhost:7079';

export const endpoints = {
  books: {
    base: `${apiUrl}/Kitap`,
    getAll: `${apiUrl}/Kitaplar`,
    add: `${apiUrl}/KitapEkle`,
    update: `${apiUrl}/KitapGuncelle`,
    delete: `${apiUrl}/KitapSil`
  },
  users: {
    base: `${apiUrl}/Kullanici`,
    addUser: `${apiUrl}/Kullanici/KullaniciEkle`,
    addReview: `${apiUrl}/Kullanici/YorumEkle`
  },
  auth: {
    login: `${apiUrl}/Login/Login`
  },
  reviews: `${apiUrl}/Kullanici/YorumEkle`
};
