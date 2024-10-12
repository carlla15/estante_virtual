import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

// Configuração Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBWpOiiqdU3qzZ4xzwPX6kfIULSIozTBQY",
    authDomain: "estante-virtual2.firebaseapp.com",
    projectId: "estante-virtual2",
    storageBucket: "estante-virtual2.appspot.com",
    messagingSenderId: "381446631114",
    appId: "1:381446631114:web:62d2fb9024549aa9828e33"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const fetchBooks = async (query, maxResults = 100) => {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=${Math.min(maxResults, 40)}`;
    let books = [];
    let startIndex = 0;

    while (books.length < maxResults) {
        try {
            const response = await fetch(`${url}&startIndex=${startIndex}`);
            if (!response.ok) {
                console.log(`Erro ao acessar a API: ${response.status}`);
                break;
            }

            const data = await response.json();

            if (!data.items) {
                console.log("Nenhum livro encontrado.");
                break;
            }

            data.items.forEach(item => {
                const volumeInfo = item.volumeInfo || {};
                const book = {
                    title: volumeInfo.title || 'N/A',
                    authors: volumeInfo.authors || ['N/A'],
                    categories: volumeInfo.categories || ['N/A'],
                    description: volumeInfo.description || 'N/A',
                    page_count: volumeInfo.pageCount || 'N/A',
                    published_date: volumeInfo.publishedDate || 'N/A',
                    publisher: volumeInfo.publisher || 'N/A',
                    language: volumeInfo.language || 'N/A',
                    image_link: (volumeInfo.imageLinks && volumeInfo.imageLinks.thumbnail) || 'N/A',
                    file_link: (volumeInfo.imageLinks && volumeInfo.imageLinks.thumbnail) || '' // Link da capa
                };

                // Adicionar o livro ao Firestore
                addBookToFirestore(book);
                
                books.push(book);

                if (books.length >= maxResults) return;
            });

            startIndex += 40;
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
