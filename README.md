# Name generator ~~Namecraft~~

LLMs are really bad at naming apps.
My theory is that this is not a limitation of the model, but something added in post,
like how everything DALL-E generates is hyper-saturated, or that ChatGPT keeps saying "delve".

This tool preloads Gemini with the names and descriptions of every GNOME app.
[GNOME apps are the only apps with good names](https://developer.gnome.org/hig/guidelines/app-naming.html).

Set the `GEMINI_API_KEY` environment variable to your Gemini API key, which you can [get from Google AI Studio](https://aistudio.google.com/app/apikey).

Optionally, set `GEMINI_MODEL` to the model you want to use. The default is `gemini-1.5-flash`.

Then:

```bash
bun .
```

You will be asked to provide a description of your app. The response should be better than what you'd get zero-shot.

~~This tool used to be named `good-name`, but it told me to call it Namecraft.~~ THAT'S A FUCKING TERRIBLE NAME
