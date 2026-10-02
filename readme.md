# ALAZ TAKIMI MÜLAKAT PROJESİ
## Minimum gecikmeli socket sunucusu projesi

Bu proje İsmail AYDINLIK tarafından Alaz Takımı mülakat süreci kapsamında yazılmıştır.

Projenin amacı minimum gecikme ile istekleri parse etmek ve veri iletişimi sağlamaktır.


### Teknolojiler

- Node.js
- ws
- Javascript
- TCP_NODELAY

### Neden Node.js?
Evet diğer dillere göre epey yavaş çalışan Node.js'i kullandım, çünkü hiç bilmediğim bir dilde bunu becerebileceğime inanmadım. Yapay zeka ile yapabilirdim evet, ki bu kodu yazarken de yapay zekayla epey konuştum. Ama bir kodu anlamadan, öğrenmeden sisteme koyarsanız yarın yaşanacak en ufak hata felakete dönüşebilir.

### Proje Yapısı
```
alazproje/
│
├── server.js
├── test.js
├── package.json
├── package-lock.json
└── README.md
```

### Nasıl çalıştırılır?

Terminalden gerekli paketler indiriltikten sonra npm start yapın, proje başlayacaktır. Ardından başka bir terminal sekmesinde npm test yazın, istekler gönderilecektir. İsteklerin gecikmesini de ilk açtığımız terminalde görebilirsiniz.

```
PS C:\Users\ASUS\OneDrive\Desktop\alazproje> npm start

> alazproje@1.0.0 start
> node server.js

Server latency: 1.234 ms
Server latency: 2.373 ms
Server latency: 2.459 ms
Server latency: 2.554 ms
Server latency: 2.568 ms
Server latency: 0.645 ms
Server latency: 0.216 ms
Server latency: 0.190 ms
Server latency: 0.085 ms
Server latency: 0.130 ms
```