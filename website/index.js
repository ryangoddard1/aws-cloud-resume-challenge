fetch('https://4o7oa4usp4l6u7omm7r7g4czxy0cccml.lambda-url.us-east-1.on.aws/')
                  .then(response => response.json())
                  .then((data) => {
                document.getElementById('visitor_counter').innerText = data.Count
                  })