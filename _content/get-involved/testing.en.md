---
permalink: "/get-involved/testing.en.html"
locale: "en"
section: "get-involved"
layout: main.njk
title: Testing and WPT
---

# Testing and Web Platform Tests

If you were working on a large web application, with several people committing code, it would be very easy for one person to make a change that inadvertently broke some part of the application. They might not realise the fact that their change would cause a problem, due to not having a complete understanding of the entire codebase. To prevent this from happening, it is accepted good practice to write tests as well as code. The tests can then be run before the application is deployed.

Unless you start out from the beginning writing tests, and are very good at writing a test for every bit of code, it is likely that some issues do slip through from time to time. When this happens, a good approach is to not only fix the issue but also to write a test that would stop it ever happening again. That way the test suite improves over time and hopefully fewer issues happen. The web platform is essentially a giant, sprawling application, with a huge range of people working on it in different ways. There is therefore plenty of opportunity for issues to creep in, so it seems like having some way of writing tests and automating those tests on browsers would be a good thing. That, is what the [Web Platform Tests](https://web-platform-tests.org/) project has set out to achieve.

You can browse the test results for CSS at [wpt.fyi/results/css](https://wpt.fyi/results/css), and run the tests in your own browser at [wpt.live/css/](http://wpt.live/css/). Tests are organized by specification, and you will see that some specifications have more test coverage than others. There is plenty of scope for people to get involved and contribute to the test suites.

## Specifications and Tests

Once a specification reaches Candidate Recommendation (CR) Status, then any change to normative text should be accompanied by a test. A Candidate Recommendation is the status at which the Working Group officially request implementations of the spec, therefore it is reasonable to assume that any change may cause an interoperability issue. It is usually the case that representatives from all browsers will have discussed the change, so anyone who needs to change code will be aware. In this case the test allows them to check that their change passes and matches everyone else. Tests would also highlight the situation where a change to the spec caused an issue in a browser that otherwise wouldn’t be aware if it. Just as a test suite for your web application should alert a person committing code, that their change will cause a problem elsewhere.

## Contributing to The Test Suite

For anyone wanting to become more involved in improving the web platform, writing and reviewing tests is an excellent place to start. As soon as you commit your first test, you are helping to improve the interoperability of the platform. You will also learn a lot about CSS and browsers by working on tests. In order to write a good test, you will need to properly understand the feature you are testing. Your ability to read and understand specifications will very quickly improve.

## Get Started

The [documentation for Web Platform Tests](https://web-platform-tests.org/) is a good place to start. In addition Rachel Andrew's article, [Testing The Web Platform](https://24ways.org/2017/testing-the-web-platform/) concentrates on CSS tests.

There is an [IRC channel](http://irc.w3.org/?channels=testing) if you have questions about writing tests, or need some help to get set up with the various tools or find good tests to work on.
