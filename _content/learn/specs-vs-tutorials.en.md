---
permalink: "/learn/specs-vs-tutorials.html"
locale: "en"
section: "learn"
layout: main.njk
title: Specifications vs. Tutorials
---

# Specifications vs. Tutorials

If you want to learn CSS from scratch, understand how a particular CSS property is used in practice, or understand browser support for CSS, then a specification may not be the best place to start. In this guide learn what specifications are, and who they are designed for.

## What is a CSS Specification?

A CSS specification - often referred to as a spec - is not a manual, or a guide to using CSS. It is primarily a document which details how features should be implemented by an engineer working on a browser, CSS authoring tool or other program which uses CSS. While there is value in people who write CSS learning to read specs, if you head into the specs with an assumption that they will teach you how to build a website, you are likely to become frustrated!

### Who are specs for?

Specifications need to serve two distinct audiences:

- **Implementers** - this refers to people implementing CSS in a _user agent_. A user agent might be a browser, a tool that turns HTML and CSS into a PDF for print, a EPUB reader, or something else.
- **Authors** - an author is a person who uses CSS, for example to style a webpage. If you are a web designer creating a website then you are within the group of authors.

It is important for implementers that every detail of how a feature works is clearly and precisely defined. This requires the use of some standard terminology to ensure clarity, and the referencing of other specifications. An implementer will be writing the code that makes a feature do what you expect it to in a browser. The fact that you can write `display: flex` in a stylesheet and the items start to behave like flex items, and do so in the same way in each browser, is down to someone writing code based on the specification.

Authors however, are less interested in the finer detail of the algorithm that causes a flex item to be a certain size. If you are an author, then you want to know how to use a feature, where you might be best to use it, whether it is supported in certain browsers. These things are not typically detailed in a spec, but are exactly the sort of thing you would find in a tutorial. A good CSS tutorial is likely to be task based, showing you how to use a feature and giving you tips about accessibility, and browser support along the way. If this is what you are looking for checkout [our resources](/learn/resources) for a curated list of places to find such information.

### Learning to read specifications

All that said, as you progress through learning CSS, understanding how to read a spec can be incredibly useful. You can be sure that the information you are getting is unfiltered by a tutorial writer, who may have misinterpreted something themselves. In terms of looking up things such as allowable values, or even digging a little deeper to understand why something behaves as it does, specs can be very helpful to the author.

If you want to understand the specifications in more detail, and learn how to read and even contribute to them see our guide to the specifications (TO DO: link to this section).
