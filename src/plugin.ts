import * as limbo from "limbo";

export function activate() {
	// --- settings ---

	limbo.settings.register({
		id: "api-key",
		type: "text",
		title: "API Key",
		helpText: "Your OpenAI API key",
		variant: "password",
	});

	// --- llms ---

	limbo.llms.register({
		id: "gpt-4o-mini",
		title: "GPT-4o mini",
		description: "GPT-4o mini",
		generateText: async () => {
			const apiKey = limbo.settings.get("api-key");

			if (typeof apiKey !== "string") {
				limbo.notifications.show({
					message: "You must set your API key",
				});

				// todo need a safe way to cancel
				// maybe should just be error throwing or maybe you should be able to throw a notification optionally?

				throw new Error("temp error");
			}

			console.log("using api key to generate text", apiKey);

			return "hello world!";
		},
	});
}
