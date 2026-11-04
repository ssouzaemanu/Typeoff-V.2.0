// ==========================================================================
// Typeoff V2 - Configuração do Firebase (Ambiente Staging / Produção)
// ==========================================================================

// Substitua pelas suas credenciais do Firebase Staging/Dev
const firebaseConfig = {
  apiKey: "AIzaSyYOUR_STAGING_API_KEY",
  authDomain: "typeoff-dev.firebaseapp.com",
  projectId: "typeoff-dev",
  storageBucket: "typeoff-dev.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef123456"
};

// Exemplo de helper para salvar progresso do usuário no Firestore
function salvarProgressoFirebase(userId, unidadeId, pontuacao) {
  console.log(`[Firebase] Salvando progresso do usuário ${userId}: Unidade ${unidadeId} - Nota: ${pontuacao}%`);
  // firebase.firestore().collection("progresso").doc(userId).set(...)
}
