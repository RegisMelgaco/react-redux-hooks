export function requestArticles() {
    return fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
}