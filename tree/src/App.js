import React, { useEffect, useState } from "react";
import * as contentful from "contentful";
import {documentToHtmlString} from "@contentful/rich-text-html-renderer"

const client = contentful.createClient({
  space: "oigtux7rvvs3",
  accessToken: "qwEU1BWlAzmswAxjNlagSYndkPHBlYzoMUwhf01D9mM"
})


 
const Content = ({data}) => {
  console.log(data);

  let didUse = data.fields.didUse;
  let didNot = data.fields.didNotUse;

  let usePercentage = (didNot + didUse)
  console.log(usePercentage)
  return (
    <div>
    
      <p>{data.fields.name}</p>
      <p>{data.fields.rating}</p>




    
   
     
  </div>
  )
}
 
function App() {
  const [state, setstate] = useState()
 
  useEffect(() => {
    client.getEntries({
      'content_type': "beer"
    })
      .then((data) => {
        setstate(data)
        console.log(data)
      })
      .catch(console.error)
  }, [])
 
  return (
    <div className="App">
      {state && state.items.map((data) => (
        <Content data={data}></Content>
      ))}
    </div>
  );
}
 
export default App;