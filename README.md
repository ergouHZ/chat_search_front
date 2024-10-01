# React Vite, Material UI Project

This project uses ChatGPT to generate target URLs, fetches data from OpenAlex, and uses Vite to proxy requests. It also includes caching and API key management.

## Getting Started

### Prerequisites

- Node.js
- npm
- Docker

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ergouHZ/chat_search_engine

2. Project directory:
   ```bash
   cd react_vite

3. Add API Keys
    In order to use the openAi serviece,
    Please change the API key in  
    ./service/chatGPTreq 
    ./service/chatGPTsummary

    Or create a '.env' file in root, and add 
   ```bash
    VITE_APP_API_KEY=YourAPIKey

4. Run the project directly(Node.js):
   ```bash
   cd react_vite
   npm install
   npm run dev

Docker run:
   ```bash
   docker build -t react_vite .
   docker run -p 5173:5173 react_vite



## Features

### Use ChatGPT to Generate Target URL
    Utilize ChatGPT to generate the target URL for fetching data from OpenAlex.

### Fetch Data from OpenAlex
    Fetch data from OpenAlex using the generated URL.

### Proxy Requests with Vite
    Use Vite's proxy feature to simplify requests.

### Cache Data
    Implement caching using localStorage or sessionStorage to improve performance.
