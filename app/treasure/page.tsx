// CONTAINS THE CONTENTS (MISSING A SCRIPT) OF THE ORIGINAL INDEX.HTML
import { Navigation } from "../navigation";
import { Socials } from "../socials";

export default function Treasure() {
  return (
    <body>
      <Navigation />
      <div className="flex flex-col h-full w-full items-center mt-24">
        <h1>Curated Event Map</h1>
        <p>Events Happening in Montreal</p>
        <iframe width="1200" height="600" frameBorder="0" scrolling="no" marginHeight={0} marginWidth={0} src="https://www.openstreetmap.org/export/embed.html?bbox=-249.25781250000003%2C15.961329081596647%2C11.601562500000002%2C85.89499095535737&amp;layer=mapnik" style={{border: "1px solid black"}}></iframe>
        <br/>
        <p id="test"> test text </p>
        <script async={true} src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js" type="text/javascript"></script>
      </div>
      <Socials />
    </body>
  );
}

// ORIGINAL CONTENT
/*
  <!DOCTYPE html>
  <html>
  <body>
  <h1>Curated Event Map</h1>
  <p>Events Happening in Montreal</p>

  <iframe width="1200" height="800" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=-249.25781250000003%2C15.961329081596647%2C11.601562500000002%2C85.89499095535737&amp;layer=mapnik" style="border: 1px solid black"></iframe><br/>

  <p id="test"> test text <p>

  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

  <script>

  $.getJSON('http://beta.arts2u.ca/api/events', function(data) {
    
    response = JSON.parse(data);
    
    console.log(response)
    
    document.getElementById("test").innerHTML = response[1].id;
  })

  </script>

  </body>
  </html>
*/