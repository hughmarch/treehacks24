require('dotenv').config();

const url = 'https://api.together.xyz/v1/chat/completions';
const apiKey = process.env.API_KEY;

// parameters:
// message - the message we are looking for a response to, i.e. "can you help me with my homework"
// userPrompt - extra input by user, "I don't want to so I want to make an excuse", or empty string
// numSuggestedResponses - number of suggested responses to return
// returns:
// suggestedResponses - list of suggestions provided by LLM model
const getSuggestedResponses = async (message, userPrompt, numSuggestedResponses) => {

  const prompt = `
    Imagine you are texting your friend. Come up with a response to their text. Use exclusively lowercase
    and don't use any punctuation. Abbreviate words like "you" to "u", "right now" to "rn," etc. Provide
    your response and nothing else.

    FRIEND'S TEXT:
    ${message}
    
    ${userPrompt === "" ? "" : "HERE'S HOW YOU FEEL ABOUT IT:"}
    ${userPrompt}
    
    MAKE YOUR RESPONSES SIMILAR (CAPITALIZATION, MANNERISMS) TO:
    can u send me ur notes
    oh yea im down
    cant wait to get off
    what if i die fr
    why r u there
    u left me alone
    oh so niceeee
    when is he getting there
    daamn`;

  const headers = new Headers({
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${apiKey}`
  });

  const data = {
    model: 'mistralai/Mixtral-8x7B-Instruct-v0.1',
    max_tokens: 1024,
    messages: [
      {
        role: "user",
        content: prompt
      }
    ],
    temperature: 1.5,
    top_p: 0.7,
    top_k: 50,
    repetition_penalty: 1,
    n: numSuggestedResponses
  };

  const options = {
    method: 'POST',
    headers,
    body: JSON.stringify(data)
  };

  try {
    const response = await fetch(url, options);
    const json = await response.json();

    return json.choices
      .map((choice) => {
        return choice.message.content.replace(/\s+/g, ' ').trim();
      });
  } catch (e) {
    console.error('Error:', e);
    throw e;
  }
}

module.exports = getSuggestedResponses;
