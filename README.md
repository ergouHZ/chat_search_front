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

   ```

2. Project directory:
   ```bash
   cd react_vite
   ```
3. Add API Keys
   In order to use the openAi serviece,
   Please change the API key in

   ```bash
   ./service/chatGPTreq
   ./service/chatGPTsummary
   ```

   Or create a '.env' file in root, and add

   ```bash
    VITE_APP_API_KEY=YourAPIKey
   ```

4. Run the project directly(Node.js):

   ```bash
   cd react_vite
   npm install
   npm run dev
   ```

   Docker run:

   ```bash
   docker build -t react_vite .
   docker run -p 5173:5173 react_vite
   ```

## Features

**Processing Data Flow After Each Message Sent**

1. OpenAI fetches the URL (if there's no URL and the user's question is unrelated to article search, there is still a corresponding return and processing).
2. The URL retrieves data from the OpenAlex service.
3. The article is rendered in a page card.
4. Key information is extracted and sent to OpenAI for a brief summary.
5. All messages are returned.

## Project Structure

### Components Folder

This folder is used to store the basic components, mainly divided into three modules: message container, input area, and main framework. The main message and data processing aggregation are placed in the parent component of the chat layout, and data is transmitted to the child components using props.

The main hierarchical framework includes processing and filtering of the first returned message, primarily to get the URL. It also supports theme switching, local data clearing, and simple functions such as moving the page to the top or bottom.

Messages are temporarily stored locally to simulate the chat process, and each time the page loads, `useEffect` is used to retrieve data. During callback requests, it also stores and renders the data.


### Service Folder

This folder mainly stores the backend asynchronous functions interacting with AI and the OpenAlex database. There are two types of AI requests: the first is primarily responsible for obtaining URL links and implementing a dialogue function through a custom `openAiMessage` interface. The second OpenAI request is responsible for summarizing the articles.

Users can now query literature through conversation, for example:

- User: "Give me some literature related to artificial intelligence."
- AI: "Sure, can you provide me with more specific information?"
- User: "I want literature from 2021 onwards."
- AI: [Data...].

The main system prompt words are quite complex and have undergone multiple debugging sessions. Since the first AI service only needs to return the URL, and the second mainly returns summary information, exception handling has been added to ensure robustness.

For the articles brief summary(which is needed at the beginning of articles list in order to offer better experience), the method chosen was to extract an array of keywords and collect a set of keywords. Initially, we tried sending the abstract of each article to OpenAI for a brief summary, but the summary was too long and the effect was not ideal, with slow transmission efficiency.

Therefore, when obtaining article data through OpenAlex, the keywords array was extracted and sent to OpenAI for summarization, which yielded better results.


### Utils Folder

This folder contains the dark mode switching context to ensure a global theme, a clear algorithm for URL extraction, as well as the main entities and interfaces used.

It was finally decided to use different structures for the message array displayed on the page (including an article list) and the array sent to OpenAI, the data structures are different between. Therefore, custom classes and methods were also created for this purpose.
