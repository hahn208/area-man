# Area Man

A small fun project to apply some ubiquitous packages. Area Man will accept a birthday and return the results of whatever "area man" nonsense coincides with it. There is no data-harvesting with this.

![static-resp.png](public%2Fstatic-resp.png)

## Notes

* Running Next.js 14 with Tailwind.
* Streams content from ChatGPT using an edge function. A guide to ChatGPT + Edge can be found on [the Vercel blog](https://vercel.com/blog/gpt-3-app-next-js-vercel-edge-functions).

## Requirements

* Minimum Node v16.8
* OpenAI API key and prompt in `.env`

## TODO
* Error checking
* Introduce portal for the modal
* Allow link sharing
* Cancel stream when modal is closed

## Getting Started
1. Clone the repo.
2. `$ npm install`
3. Copy `.env` to `.env.local` and enter the [OpenAI auth](https://platform.openai.com/account/api-keys) for local dev. Sorry, I'm not providing the AI prompt I used-- spin your own and put in `[DATE]` where you want string replacement to happen.
4. `$ next dev` or `$ npm run dev` to get the localhost running.
5. Visit `localhost:3000`.

## Test Coverage

![coverage_2023-11-14.png](__tests__%2Fcoverage_2023-11-14.png)

## Lighthouse (Vercel production)

![lighthouse_2023-11-14.png](__tests__%2Flighthouse_2023-11-14.png)