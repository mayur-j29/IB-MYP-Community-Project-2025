// Load DOM elements
const chatbox = document.getElementById("chatbox");
const userInputEl = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

// Function to send the message to your backend
async function getAIResponse(userMessage) {
  try {
    const response = await fetch("http://localhost:5000/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: userMessage }),
    });

    const data = await response.json();

    if (!response.ok) {
      // If backend sends error status, data will be error object
      return data.error || "Oops! Something went wrong.";
    }

    return data; // Normal AI response string
  } catch (error) {
    console.error("Error fetching AI response:", error);
    return "Oops! Backend connection failed. Make sure your server is running.";
  }
}

// Function to append a message div to the chatbox
function appendMessage(author, text) {
  const el = document.createElement("div");
  el.classList.add(author === "You" ? "user-message" : "ai-message");

  // If text is an object (like error), convert to readable string
  if (typeof text === "object" && text !== null) {
    text = JSON.stringify(text.error || text, null, 2);
  }

  el.textContent = `${author}: ${text}`;
  chatbox.appendChild(el);
  chatbox.scrollTop = chatbox.scrollHeight;
}

// Handle form submission
async function handleFormSubmit(event) {
  event.preventDefault();
  const userMessage = userInputEl.value.trim();
  if (!userMessage) return;

  appendMessage("You", userMessage);
  userInputEl.value = "";

  const aiReply = await getAIResponse(userMessage);
  appendMessage("AI", aiReply);
}

// Event listeners
sendBtn.addEventListener("click", handleFormSubmit);
userInputEl.addEventListener("keypress", e => {
  if (e.key === "Enter") handleFormSubmit(e);
});
