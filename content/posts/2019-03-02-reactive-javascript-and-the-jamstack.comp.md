---
published: false
mostRecentPost: true
category: web systems
title: Modern web development
lede: Rather than understanding taste as the particular way a person does a thing, I will argue that it is a measurement of how well a person is able to see and act within a problem space. When business hinges on the user experience and how products make people feel, success or failure is often a matter of taste.
readingTime: 4
heroImage: https://res.cloudinary.com/pw-img-cdn/image/upload/v1538097848/post-taste-lynch_hutebj.jpg
heroImageMultiply: true
blockColor: transparent
---

<!-- Build better websites with Reactive Javascript and the Jamstack -->

Last weekend, as I chatted to the mechanic who was diagnosing why our car wouldn’t start, he said “I charged my pressurised tyre jack last night but forgot to put it back in the truck. So this morning I’ve already done two manual tyre changes. What normally takes me five minutes took 25 minutes.” The clincher was what he said next:

> _You don’t miss good tools until you have to use the old tools._



## The best tools for the job are ever-sharpening themselves

The web is a quarter century young and all the tools we use to make the web are mutating works in progress. We're seeing platform maturity this decade after the Cambrian explosion of an entirely new medium. This maturity is the result of a second generation of tooling methods that have been driven by the platforms themselves, well honed in the battle for your eyeballs. So it won't surprise you if I tell you _there is a paradigm shift happening in modern web development_.

<!-- ## Proprietary bundled legacy systems are being unbundled -->
## Proprietary web publishing is being unbundled

Let me give you an example. Some of my clients have small to medium sized legacy websites on Wordpress. By legacy, I mean that I've inherited the project and it's my job to maintain and extend it's lifespan. Because they need a website. _Despite all the social media publishing platforms available, a website is still where a business can retain most control over the presentation of their value proposition,_ and it's probably still the first thing a potential customer will click through to from a search.

The problem I've seen lately is that _these kinds of legacy websites are slow, graceless experiences and my client's audience are starting to sense it_. So they're asking me to upgrade these experiences but a quick glance at the codebase tells me 1) it's no wonder they're slow and graceless, and 2) I know there's a better way to do this.

And this better way starts by understanding two important facts:

- **APIs change everything.** In the past, bundling features into a web publishing tool made sense. It wasn't easy to integrate services with an external API because the technology wasn't available. But now it is. So instead waiting for your publishing platform to become a swiss army knife, you can choose to integrate an API-based service who lives and dies by doing that one service better they ever will.

- **Microservices can afford to do a better job.** In the past, your website publishing platform was probably what we now know as a CMS. Like Wordpress. This platform would handle not only the CMS but also the building of your user interfaces. Today the UI build doesn't need to be tied to the publishing platform, and there are better tools for that job that will never be integrated back into the older publishing systems bundled with features, because they have to be backward compatible with what originally made their system a success: they literally have too much legacy to overcome.

## So what exactly are these tools then?

> And please, speak as you might to a young child, or a golden retriever. <br>**Jeremy Irons in [Margin Call](https://youtu.be/366DExfdQWM?t=53)**

With the knowledge that proprietary web publishing systems can't offer that in mind, let me introduce some new tools that will help you sidestep your legacy website and leverage this paradigm shift.

<!-- ## This shift is an opportunity -->
## Don't let hindsight become painful

I think we’re seeing _a generational shift in web development between the proprietary bundled legacy systems of the dominant web publishing platforms from 5-10 years ago as they struggle to modernise and compete against the fundamentally different approaches of modern web development,_ where a multiplicity of unbundled open-source and freemium services can be integrated together in a technology stack customised to business requirements.

Instead of letting [VUCA](https://en.wikipedia.org/wiki/Volatility,_uncertainty,_complexity_and_ambiguity) take hold, and put off thinking about the terrible nightmare of upgrading yourwebsite again, think of it as a really big opportunity. _The tools are here, they’re just not evenly understood._ Better tools make better websites, and a better website should equate to a better customer service. It's just, like most paradigm shifts, we won't know this until time and experience grant us hindsight. Or until we have to go back and use the old tools.

Better modern web development tools are here. They’re just not evenly understood. But when the new tools become proven and normalised within the culture, then reverting back to old tools will become, well, painful. Just like my mechanic explained. Why wait until it’s obviously painful? 

## The new tools—Reactive Javascript and the JAMstack

As [websites become the new cities](https://pioneer.app/blog/2019-frontier-markets/), platforms have pushed for better tools to build interactive web interfaces that are robust, flexible and performant. The reactive programming paradigm is a solution to this problem. Beginning in 2013 with React.js and Vue.js 9 months later, _Reactive Javascript libraries have proven to be a faster, more productive and highly flexible method for building user interfaces (UIs)._

Combining this approach with reusable APIs and prebuilt markup (that is, web pages are prebuilt and delivered to your browser with speed of a cached CDN, rather than be dynamically put built on the fly from a database and a remote server before delivery). This creates _a new way of building websites with not just the advantages of a better interfaces but also higher security, a far lower cost of scaling, a simpler developer experience and no backend._ 

Yep, that's right: no backend operating systems, specific web servers, backend programming languages, or databases. Like outsourcing services to third parties through an API, hosting is also outsourced by [WebHooks](https://en.wikipedia.org/wiki/Webhook) that prebuild a completely new version of the website on every publish.

_This approach to integrating and deploying content and services into your UI is called the [JAMstack](https://jamstack.org/)_: client-side JavaScript, reusable APIs and prebuilt Markup.

It's also worth noting that I'm not unveiling anything new here. Reactive Javascript libraries and the JAMstack aren't shiny new objects, but rather website development techniques I've been playing with since 2013.

## What do you mean by Reactive Javascript?

By Reactive Javascript, I'm talking javascript libraries that observe and react to the changing application state of a user interface (UI). You could also call Reactive Javascript libraries _virtual DOM libraries_. Rather than relying on just the browser engine, they use a DOM abstraction (called a "virtual DOM") to manage the browser DOM (which stands for Document Object Model, basically your browser window). 

Imagine you were writing a tweet. What you write changes the current state of the DOM. The data you have added has been bound to your browser window. Now imagine the flood other tweets also being written. While that data isn't being directly added from your screen, it will be added to your screen the moment you submit what you've written. This data has to be sent somewhere, sorted out then resent back to your browser window.

With a virtual DOM, a UI library can watch for changes in the state of the DOM and update only that part of the DOM that requires updating. Nothing more. A virtual DOM that reduces the amount of state updates to only those required creates a superior interface performance. 

## So what's the big deal?

> And please, speak as you might to a young child, or a golden retriever. <br>**Jeremy Irons in [Margin Call](https://youtu.be/366DExfdQWM?t=53)**

They matter because they have proven to be a more productive method to building user interfaces. Reactive Javascript libraries make it much easier to write code that is modular, understandable, with less bugs. This means you spend less time managing problems and more time focussing on your business goals:

- When state management is handled _reactively_ within the library by it's virtual DOM engine, rather than being intermingled within the real DOM, you can write declarative code that is more predictable, easier to understand and easier to debug.
- Because we're using a scripting to language to build UI, we can write encapsulated components that manage their own state. And we can then compose them to make complex UIs. Any logic is written in JavaScript instead of templates, so we can easily pass rich data through the application and keep state out of the DOM.
- Reactive Javascript libraries are able to be rendered server-side. This does away with the historical complexity of old application frameworks that had huge setup and server management costs. And they were written in a completely different programming language, which you now don't need to learn or outsource for.
- Reactive Javascript can be adapted to any web technology: it’s modular. You can use it in VR as well as in a web page made of HTML.

## What do you mean by jamstack?




## Stuff

than fighting against website systems that were dominant a decade ago but are certainly surpassed today.

so that you can own a first class website experience without digging yourself into maintenance hell where you fear updating or publishing

And yet, . As I chatted to the mechanic who was diagnosing why our car wasn’t starting last weekend, he said “I charged my pressurised tyre jack last night but forgot to put it back in the truck. So this morning I’ve already done 2 manual tyre changes. What normally takes me 5 minutes took 25. You don’t miss good tools until you have to use the old tools.”

In this post, I will explain how combining JAMstack with Reactive Javascript, you get the best tools and systems available. This in turn allows for better websites that can’t be emulated with the old tools and systems, allowing you to leverage a paradigm shift in web development  so that you can own a first class website experience without digging yourself into maintenance hell where you fear updating or publishing.

world, architecture based on client-side JavaScript, reusable APIs, and prebuilt Markup.
When we talk about “The Stack,” we no longer talk about operating systems, specific web servers, backend programming languages, or databases.

The JAMstack is not about specific technologies. It’s a new way of building websites and apps that delivers better performance, higher security, lower cost of scaling, and a better developer experience. 
FAQ
What is the JAMstack?
Why the JAMstack?
How do I get started?

Sometimes it's hard to see change happening in the moment. It's either too slow for us to notice in realtime, like a plant growing, or because we don't see the second- or third-order effects until well after the change has happened, like looking in the rearview mirror of hindsight.

This article is not a smashdown on Wordpress. Wordpress is obviously good at what it does. But good requires context. And I don't see that context for, well, any of my clients. 


~

## Refs

API
CMS
Reactive Javascript
JAMstack
UIs, the information that is displayed on your browser screen
