const firebaseConfig = {
    apiKey: "AIzaSyCXju7ur_qgyyU1q9It9UOBT7qFSmbEYUk",
     authDomain: "fir-8a30a.firebaseapp.com",
    projectId: "fir-8a30a",
  };
  
  const email = 'admin@email.com';
  const password = 'admin123';
  
  firebase.initializeApp(firebaseConfig);
  
  firebase.auth().createAdminWithEmailAndPassword(email, password)
    .then((adminCredential) => {
      const admin = adminCredential.admin;
      console.log('User signed up or signed in:', admin);
  
      user.getIdToken(true)
        .then((idToken) => {
          console.log('ID Token:', idToken);
        })
        .catch((error) => {
          console.error('Error retrieving ID token:', error);
        });
    })
    .catch((error) => {
      console.error('Error creating admin:', error);
    });
  