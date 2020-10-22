# A work in progress

I'm using this README as Rachel's random thoughts right now. Ultimately I'll have some better info for future contributors.

## Get Started

Check this out and run `npm install`.

Start running 11ty with `npm start` or `yarn start`. Or to use language negotiation, use `yarn serve` or `npm run serve`. The language negotiation server doesn't watch and run builds so if you change things you need to stop it with Ctrl-C and start it up again to trigger a build.

If you want to work on the CSS in the Pattern Library, run `gulp watch patterns`. Any changes ot the CSS will be copied into the 11ty build so next time you run that the new stylesheet will be picked up,

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

I've hacked in the ability to do content negotation and use 11ty. We need to override the way 11ty would normally make pages so it is important to have all the bits in the header block on each page.

```
---
permalink: "/about/what.en.html"
locale: "en"
section: "about"
layout: main.njk
title: What We Do
---
```

## Markdown

You can use Markdown. You can mix Markdown and HTML. The parser is nobbled so you should be able to indent things without creating a code block. If you actually do need code output on the page then you will need to fence it with three backticks.

## Overview of What's What for the Clueless (i.e. people like fantasai)

* `_contents` is where the source content lives
* `_site` is where the output that gets served lives
* `_layouts` is where the overall page templates (“layouts”) live
* `_includes` is where the pieces imported into the layouts live
	* `l10n` is where the localization files live
* `patterns` is where the CSS and JS lives
	* `public` is where built files live

## Content Planning


* Goal: Make the CSSWG website useful to
  * CSSWG Members and regular contributors
  * People who want to get involved
  * People who want to read and understand our specs
  * People who need to follow the CSSWG's progress
  * People who are lost (redirect to MDN, etc.)

* Useful materials we currently have, to reuse/adapt:
  * http://www.w3.org/Style/CSS/current-work
  * http://fantasai.inkedblade.net/weblog/2011/inside-csswg/
  * http://www.w3.org/Style/CSS/read
  * https://rachelandrew.co.uk/archives/2017/04/24/refer-to-the-spec-what-is-all-that-stuff-at-the-top-of-the-spec/
  * https://rachelandrew.co.uk/archives/2017/05/01/whats-happening-in-css/
  * stuff on https://wiki.csswg.org/

### Content Outline

*   About CSSWG
    * Who we are
    * What we do
    * How we operate
    * Where to find us (IRC, www-style, GH, blog, wiki, etc.)
    * New Member Guide

*   Learn CSS
    * What is CSS
    * specs vs tutorials
    * where to learn (not here)
    * index of CSS conferences?
    * localized, not just translated

*   Read Our Specs
    * How to read specs
    * How CSS specs are organized
    * List of specs -> current-work
    * About spec status , advancement
    * Finding test suites

*   Get Involved
    * Process
    * Nature of discussions, decisions
    * How to report problems
    * Relationship to browsers (we don't control them) + how to file bugs
    * Testing 
  
