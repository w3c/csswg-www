# A work in progress

I'm using this README as Rachel's random thoughts right now. Ultimately I'll have some better info for future contributors.

## Get Started

Check this out and run `npm install`.

Start running 11ty with `npm start` or `yarn start`

You should get two webservers running, one is 11ty (the site), one is a pattern library (the CSS broken down into components, uses [Fractal](https://fractal.build/)).

TO see the English homepage you will need to go to /en/ on a server we should just redirect that. Or we could put the en version into the root, it probably doesn't matter. But for now http://localhost:8080/en/ (assuming :8080 is what you get)

Templating for 11ty and the pattern library is [nunjucks](https://mozilla.github.io/nunjucks/).

The 11ty docs are [here](https://www.11ty.io/docs/). I've been pretty impressed by the docs, and how easy it is to do stuff with 11ty.

Following are some rough notes on where I am with this right now.

## CSS / Site Design

I have taken some liberties with the design mainly to try and stop it looking 10 years old. Flattened it out, removed all the drop shadows, used more modern RWD approaches. Also, I thought it would be nice to do a dark mode, use a variable font, custom properties and so on.

I have built out the main parts of the homepage in the pattern library although I'm not convincd that is the sort of stuff we want on the homepage in terms of content. I think we probably should build out the rest of the content and then look at what would be ideal homepage content and I'll go back to wrangling it then.

Unless you are changing CSS you can ignore the pattern library. If you are changing CSS you can probably just follow your nose. When you change anything in the CSS for a component, the output CSS file is regenerated both in the pattern library and on the site. So, any CSS in the pattern library will end up in the compiled CSS, the markup however is just for pattern library purposes.

It's currently pretty scrappy as until we have content I don't know what other components we need, so I'll keep refining it as we create content.

I am leaving adding fallbacks for older browsers until we are happy with the way everything looks, a lot of it I can do as a post-processing stage (for example sorting out fallbacks for custom properties), so I'm writing modern CSS and I'll sort it later :)

## Internationalization 

So we can support multiple translations the pages for the site are located in folders with a two letter language code. I've initially set up `/en/` and `/fr/` just to check it works. It's pretty straightforward to then use the current locale in templates and includes. You can see this happening in `header.njk` where I have separate includes for the two languages. I thought this approach would make it easier to have versions even if we don't have all the content translated. They can have their own nav etc.

You can include the locale info in templates too and create variables if an include can be more or less the same, but just needs a few words translated.

When creating a new locale it needs a json file with the locale in it in the language folder. Also add the language and locale information to `site.js`. This file is used to make the dropdown. Also the templates then pull in the correct title and so on. We should be able to use this data to make collections of things which are localized as well as translated - conferences, resources etc. so I think that covers all bases.

I'm not set on that lang-switch dropdown, what we use probably depends on how many translations there are.

## Markdown

You can use Markdown. You can mix Markdown and HTML. The parser is nobbled so you should be able to indent things without creating a code block. If you actually do need code output on the page then you will need to fence it with three backticks.
