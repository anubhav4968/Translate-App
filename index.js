
//helper functions 
function getid(value){
    return document.getElementById(value).value
}
let id;
 
function debounce(fnc,delay){
   if(id)
   {
       clearTimeout(id)
   }
   id=setTimeout(function(){
       fnc()
   },delay)

}





async function main(){
    
    //1.Text to translate;
  try{
        const text=getid("input-text")
        //    console.log(trxt)
        const input_lang=getid("input-language")

        const output_lang=getid("output-language")
        
        //POST REQUESt
        
        const res = await fetch("https://libretranslate.de/translate",{
            method:"POST",
            body: JSON.stringify({
                q:text,
                source:input_lang,
                target:output_lang,
                format:"text"
            }),
        //additional information about our request that server might need
            headers:{
                "Content-Type":"application/json",
            }
        });

    const {translatedText}=await res.json()
    if(translatedText==undefined){
        return false
    }
    console.log("data:",translatedText)
    document.getElementById("out_lang").innerText=translatedText
    //  a=translatedText
    }catch(err){
        console.log("err:",err)
    }
}



