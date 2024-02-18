
// parameters:
// message - the message we are looking for a response to, i.e. "can you help me with my homework"
// prompt - extra input by user, "I don't want to so I want to make an excuse", or empty string
// exampleMessages - list of some text messages the user sent to get an idea for their texting style/mannerisms
// numSuggestedResponses - number of suggested responses to return
// returns:
// suggestedResponses - list of suggestions provided by LLM model
export default getSuggestedResponses = (message, prompt, exampleMessages, numSuggestedResponses) => {
  const mockedResponses = Array.from({ length: numSuggestedResponses }, (_, index) => `sample response ${index + 1}`);
  return mockedResponses;
}
