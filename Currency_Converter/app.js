const apiKey = "80dc6c288d09873d57ec4818";

    async function convertCurrency(){

        const amount =document.getElementById("amount").value;

        const fromCurrency = document.getElementById("from").value;
        
        const toCurrency = document.getElementById("to").value;

        if(!amount||isNaN(amount)||amount<=0){
            alert("Please enter a valid amount");
            return
        }
    

    const url = `https://v6.exchangerate-api.com/v6/${apiKey}/pair/${fromCurrency}/${toCurrency}/${amount}`;

    try{
        const response = await fetch(url);
        const data= await response.json();

        if (data.result==="success"){
                displayResult(data,amount,fromCurrency,toCurrency);
        }else{
              document.getElementById("result").innerHTML=`<p>Error:${data["error-type"]}</p>`;
        } }catch(error){
            document.getElementById("result").innerHTML=`<p>Error:${error.message}</p>`;
        }
        }
    function displayResult(data,amount,fromCurrency,toCurrency){
        const convertedAmount = data.conversion_result;
      const resultText = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
      document.getElementById("result").innerHTML = `<p>${resultText}</p>`;
    }