export async function query(data: any) {
    
    console.log("Query is: ", data)

	const response = await fetch(
        // "https://api-inference.huggingface.co/models/CohereForAI/c4ai-command-r-v01",
        // "https://api-inference.huggingface.co/models/openlm-research/open_llama_3b",
        // "https://api-inference.huggingface.co/models/keeeeenw/MicroLlama", // Nice small model
        "https://api-inference.huggingface.co/models/morenolq/bart-it",
		{
			headers: { Authorization: "Bearer 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" },
			method: "POST",
			body: JSON.stringify({
                ...data,
                options: {
                    max_new_tokens: 256,
                }
            }),
		}
	);
	const result = await response.json();
    console.log("result: ", JSON.stringify(result))
	return result[0]["generated_text"];
}



//      {
// 			headers: { Authorization: "Bearer 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" },
// 			method: "POST",
// 			body: JSON.stringify({
//                 ...data,
//                 options: {
//                     wait_for_model: true,
//                 }
//             }),
// 		}