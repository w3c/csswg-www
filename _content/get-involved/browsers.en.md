---
permalink: "/get-involved/browsers.html"
locale: "en"
section: "get-involved"
layout: main.njk
title: Browsers
---

# CSS and Browsers

The CSS Working Group work closely with representatives of the various user agents that implement CSS, in fact many members are browser engineers. However, the WG do not control browsers, or the speed of implementation of features into browsers.

If a certain CSS feature has a spec but is not in browsers, or in a certain browser, the CSSWG won't be able to speed up the implementation. However, there are ways to help this process as described below.

## Why has (browser x) not implemented this property?

There are always far more new web platform features being designed than browser engineering teams can keep up with. CSS is just one part of the web platform. Browsers, just like any product, have to prioritize the features that they implement with the available time that the engineering teams have. Where they is a lag between one browser shipping a feature, and another doing so, it may well be that the current priorities for that browser are different.

In addition, various internal things might make it slower to ship a feature in one engine over another. Sometimes the feature was designed mostly by engineers at one browser. In the WG there would be input from other browsers, however it's likely that the company spearheading the work will ship first. Sometimes it is just harder to implement a certain feature in one browser over another, or the feature is held up behind some other work the browser engineers are doing to make it possible, or to improve part of their engine.

### Showing interest in a feature

Given that adding new features is a case of priorities it can be helpful for the community to show that there is interest in features being implemented. One way to do this is to go and star or favorite the bug in the browser bug tracker - see below for a list of links to those. In addition talking and writing about features, and using them where possible demonstrates that there is author interest and may well help to encourage implementation.

## Reporting bugs to browsers

If some CSS is not working at all in a certain browser then the most likely situation is that the feature isn't implemented yet. Check [CanIUse](https://caniuse.com) or the support information at the bottom of property pages on MDN (e.g. this is the page for [::marker](https://developer.mozilla.org/en-US/docs/Web/CSS/::marker)). These should tell you if a feature is implemented or not.

If a feature is working in a different way between two browsers then you may have found a bug in the implementation. It is very helpful if these bugs are reported to the browser in question.

### Check in a Nightly browser

Particularly when using very new CSS, it might be that your issue has already been fixed but the fix hasn't shipped to the released browser yet. Nightly or early preview browsers such as Firefox Nightly, Chrome Canary, or Safari Technology Preview let you use the very latest builds. If your problem does not exist then the bug is already fixed and will ultimately get to the shipping version.

### Create a reduced test case

One of the most useful skills for developers is to be able to create a reduced case of any issue, as explained in this article on [Test Case Reduction](https://webkit.org/test-case-reduction/). Creating a reduced test case means removing everything from your example that doesn't change the buggy behavior.Any JavaScript, any CSS, any HTML elements. Ideally you can go right down to just the component which is causing a problem. It can be useful to create this in an online tool such as CodePen or jsFiddle, as this will then be easy to share.

At this point you should have a reasonable idea of what is causing the problem. You may have even discovered it wasn't a browser bug at all, but instead something you were doing. For example, incorrect HTML or CSS might be interpreted differently by two browsers. Fix the code and the issue goes away. If you do think you have a bug, you can now see if it has already been reported.

### Browser bug trackers

You can find the various browser bug trackers at the links below, there is also the [Browser Bug Searcher](https://browser-issue-tracker-search.appspot.com/) site, which searches out issues from all browsers at once.

- [Chrome](https://bugs.chromium.org/p/chromium/issues/list)
- [Firefox](https://bugzilla.mozilla.org/)
- [Safari](https://bugs.webkit.org/)
- [Edge](https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/)

Search for the relevant property on the tracker for the browser you think has the problem, it can also be worth checking the other browser(s) in case the issue is actually theirs. If you find a likely issue, and you think your example adds some extra information you can comment. If you don't find an issue then you can raise one - including a link to your reduced test case to make it easy to reproduce. Avoid linking to your website and saying that the issue can be seen there. By the time an engineer gets to to work on the bug, your site may well have changed and the bug no longer appear. An online test case, or simply uploading the files is much more useful.

When you raise the issue mention the version of browsers you were testing in, and any other relevant information. For example, if you have already looked at the spec or information on MDN which indicates how the feature should work, link to that. The aim is to make it as easy as possible for an engineer to reproduce the problem and flag it up as a genuine bug.

### Be nice

It should go without saying that when reporting issues you should be polite. Browser engineers are regular developers like you or I. We don’t like it when our boss or client yells at us because something isn’t working, the same is true for people working on browsers. No-one wants bugs in any software. By working alongside the people who implement new things into our browsers we will find fewer things to cause us problems in the future.

### Further reading

- [How to file a good bug](https://developers.google.com/web/feedback/file-a-bug)
- [Help The Community! Report Browser Bugs!](https://www.smashingmagazine.com/2011/09/help-the-community-report-browser-bugs/) - a 2011 post so the links to browsers and so on are outdated, but Lea has some excellent advice in terms of reducing and reporting issues.
