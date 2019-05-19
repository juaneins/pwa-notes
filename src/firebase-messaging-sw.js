//importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-app.js');
//importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-messaging.js');

//importScripts('https://www.gstatic.com/firebasejs/5.4.1/firebase-app.js');
//importScripts('https://www.gstatic.com/firebasejs/5.4.1/firebase-messaging.js');

importScripts('https://www.gstatic.com/firebasejs/5.9.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/5.9.1/firebase-messaging.js');

var config = {    
        apiKey: "AIzaSyDnmpTskySP4P3Y0M16-dS_TlLI9i6YM5M",
        authDomain: "platzinotas-81a9a.firebaseapp.com",
        databaseURL: "https://platzinotas-81a9a.firebaseio.com",
        projectId: "platzinotas-81a9a",
        storageBucket: "platzinotas-81a9a.appspot.com",
        messagingSenderId: "923284455412",
        appId: "1:923284455412:web:c9f74b73a668468b"   
}

firebase.initializeApp(config);

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {    
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    const notificationTitle = 'Background Message Title';
    const notificationOptions = {
        body: 'Background Message body.',
        icon: '/firebase-logo.png'
    };

    return self.registration.showNotification(notificationTitle,
        notificationOptions);
});