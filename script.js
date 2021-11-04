// Function that fetches the desired data using async/await
let githubData = () => fetch("https://api.github.com/users/wbrooks8")

// Return data if response is fulfilled, otherwise throw Error
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("NETWORK RESPONSE ERROR");
    }
  })

  // Take returned data and set our data to what we want mounted on the screen, otherwise throw error and log
  .then(data => {
    displayGithubData(data)
  })
  .catch((error) => console.error("FETCH ERROR:", error))

  // Function that receives the response data and sets our values through document selectors
  let displayGithubData = (data) => {

    // Set a variable equal to the desired value from the fetch response
      const image = data.avatar_url

    // Get our element by id and set the src attribute to our image retrieved above
      document.getElementById('photo').src = image

      const profile = data.bio

      document.getElementById('me').innerHTML = profile;

      const hireStat = data.hireable

      if(hireStat == true) {
          document.getElementById("hireable").innerHTML = "Hireable Status: Hireable"
      }

  }

  // Call function to run
  githubData();