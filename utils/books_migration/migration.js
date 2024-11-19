import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore/lite';

// Configuração Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBF6aowvCkRp_J2Xh7JETZliylDK7s1aGE",
    authDomain: "prateleira-inteligente.firebaseapp.com",
    projectId: "prateleira-inteligente",
    storageBucket: "prateleira-inteligente.firebasestorage.app",
    messagingSenderId: "394531712590",
    appId: "1:394531712590:web:d904fd79986954bd491d1f"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Função para buscar livros da API Open Library
const fetchBooks = async (query, maxResults = 100) => {
    const url = `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`;
    let books = [];
    let startIndex = 0;

    while (books.length < maxResults) {
        try {
            console.log(`Buscando livros na página: ${startIndex + 1}`);
            const response = await fetch(`${url}&page=${startIndex + 1}`);
            if (!response.ok) {
                console.error(`Erro ao acessar a API: ${response.status}`);
                break;
            }

            const data = await response.json();
            console.log(`Livros encontrados: ${data.docs.length}`);

            if (!data.docs || data.docs.length === 0) {
                console.log("Nenhum livro encontrado.");
                break;
            }

            data.docs.forEach(item => {
                const book = {
                    title: item.title || 'N/A',
                    authors: item.author_name || ['N/A'],
                    categories: item.subject || ['N/A'],
                    description: item.first_sentence ? item.first_sentence[0] : 'N/A',
                    page_count: item.number_of_pages_median || 'N/A',
                    published_date: item.first_publish_year || 'N/A',
                    publisher: item.publisher && item.publisher.length > 0 ? item.publisher[0] : 'N/A', // Apenas uma editora
                    language: item.language ? item.language[0] : 'N/A',
                    image_link: item.cover_i 
                        ? `https://covers.openlibrary.org/b/id/${item.cover_i}-L.jpg` 
                        : 'N/A' // Link da capa
                };

                // Adicionar o livro ao Firestore
                addBookToFirestore(book);

                books.push(book);
                if (books.length >= maxResults) return;
            });

            startIndex += 1;
        } catch (error) {
            console.error("Erro ao buscar dados:", error);
            break;
        }
    }

    return books;
};

// Função para adicionar o livro ao Firestore
async function addBookToFirestore(book) {
    try {
        const docRef = await addDoc(collection(db, "books"), book);
        console.log("Livro adicionado com ID: ", docRef.id);
    } catch (error) {
        console.error("Erro ao adicionar livro: ", error);
    }
}

// Chamar a função para buscar e adicionar livros ao Firestore
fetchBooks("fiction", 100);