---
published: true
mostRecentPost: true
category: web systems
title: Your website system is probably wildly out-of-date
lede: You don’t miss good tools until you have to use the old tools. When it comes to web development tools and publishing systems, there's a paradigm shift in effect. It'll not only make your website a better user experience, it'll be easier to maintain. It's just that you may have to wait until your current website system is painful enough before you believe me.
readingTime: 7
heroImage: https://res.cloudinary.com/pw-img-cdn/image/upload/v1552637124/okok/nara-dreamland-romain-veillon-architecture-theme-park-photography_dezeen_1704_col_3-bw.jpg
---

<!-- Build better websites with Reactive Javascript and the JAMstack -->

Last weekend, as I chatted to the mechanic who was diagnosing why our car wouldn’t start, he said “I charged my pressurised tyre jack last night but forgot to put it back in the truck. So this morning I’ve already done two manual tyre changes. What normally takes me five minutes took 25 minutes.” The clincher was what he said next:

> _You don’t miss good tools until you have to use the old tools._

The web is a quarter century young and all the tools we use to make the web are mutating works in progress. We're seeing platform maturity this decade after the Cambrian explosion of an entirely new medium. This maturity is the result of a second generation of tooling methods that have been driven by the platforms themselves, well honed in the battle for your eyeballs. Given this, it shouldn't surprise you if I tell you _there is a paradigm shift happening in modern web development_. The arrival of new tools is making the old tools painful.

<!-- ## The best tools for the job are ever-sharpening themselves -->
<!-- ## The platform wars spawned better tools -->
<!-- ## Proprietary web publishing has been unbundled by the platform wars -->

## Proprietary web publishing is being unbundled by new tools

> We’re underinvested in developer tooling. Industry-wide, there are enormous efficiency gains still to be unlocked—tools today remain quite primitive.<br>**[Patrick Collison](https://twitter.com/patrickc/status/1100075444962033664?s=12), Stripe CEO**

<!-- ## Proprietary bundled legacy systems are being unbundled -->
<!-- ## Proprietary web publishing is being unbundled -->

Let me give you an example. Some of my clients have small- to medium-sized legacy websites on Wordpress. By legacy, I mean that these websites have been alive for a number of years, I've inherited the project and it's my job to maintain and extend it's lifespan. Because they need a website. _Despite all the social media publishing platforms available, a website is still where a business can retain most control over the presentation of their core value proposition,_ and it's probably still the first thing a potential customer will click to from a search.

_The problem I've seen lately is that these kinds of legacy websites are slow, graceless experiences and my client's audiences are starting to sense it_. So they're asking me to upgrade these experiences but a quick glance at the codebase tells me 1) it's no wonder they're slow and graceless, and 2) I know there's a better way to do this.

And this better way starts with understanding two important facts:

- _**APIs change everything.**_ In the past, bundling features into a web publishing tool made sense. It wasn't easy to integrate services with an external API because the technology wasn't available. But now it is. So instead waiting for your publishing platform to become a swiss army knife, you can choose to integrate an API-based service who lives and dies by doing that one service better they ever will.

- _**Microservices can afford to do a better job.**_ In the past, your website publishing platform was probably what we now know as a CMS. Like Wordpress. This platform would handle not only the CMS but also the building of your user interfaces. Today the UI build doesn't need to be tied to the publishing platform, and there are better tools for that job that will never be integrated back into the older publishing systems because backward-compatibility prevents it.

<!-- with what originally made their system a success: they literally have too much legacy to overcome. -->

<!-- ## The generational shift in modern web publishing -->

## The new web publishing tools

I think we’re seeing _a generational shift in web development between the proprietary bundled systems of the dominant web publishing platforms that emerged a decade or more ago as they struggle to modernise and compete against the fundamentally different approaches of modern web development,_ where a multiplicity of unbundled API services can be integrated together in a technology stack customised to business requirements.

<!-- And I don't think it's just a matter of  -->

If someone were to publish a new website today, so that it becomes a valuable asset tomorrow, what exactly are these better tools? And why?

<!-- ## The new tools—Reactive Javascript and the JAMstack -->
<!-- ## So what exactly are these better tools? -->
<!-- ## So what exactly are these better tools? -->

<!-- > And please, speak as you might to a young child, or a golden retriever. <br>**Jeremy Irons in [Margin Call](https://youtu.be/366DExfdQWM?t=53)** -->

<!-- unbundled dedicated API-based services -->

<!-- With the knowledge that proprietary web publishing systems can't compete with the quality and multitude of unbundled API services, let me introduce some new tools that will help you sidestep your legacy website and leverage this paradigm shift. -->

### The JAMstack

[JAMstack is an acronym (Javascript, APIs and Markup)](https://jamstack.org/) that symbolises an approach to building websites where each part of your website publishing system—interface building, content and services management, and hosting—is treated as a separate concern. These concerns are then integrated together within a web development workflow so that you can create your own customised ["technology stack"](https://mixpanel.com/topics/what-is-a-technology-stack/). Because each concern is isolated, it allows free choice of the best tool available for that concern within the context of your business requirements.

_In contrast to allowing a web publishing platform giant to determine the quality of your web development tools based on their priorities and their slow-moving feature set, the JAMstack method gives you the freedom to create a flexible, customised technology stack that exactly suits your needs_.

<!-- By using an interchangeable set of tools, you can choose the best ones for the job. You never need wait for the best interests of a web publishing platform to match your best interests. -->

### Building the frontend with Reactive Javascript libraries

What began as a [programming language built in just 10 days](https://thenewstack.io/brendan-eich-on-creating-javascript-in-10-days-and-what-hed-do-differently-today/) to allow Netscape to compete against Microsoft in 1995 (there's those platform wars again), Javascript has become the web's scripting language. When Node.js was created 2009, it allowed JavaScript to be run outside of a browser, instead of being stuck embedded within it. This set the platform for a "JavaScript everywhere" paradigm: the entire web development stack could use Javascript. There was no need to change languages between server-side (the backend) and client-side (the browser) environments.

<!-- As [websites become the new cities](https://pioneer.app/blog/2019-frontier-markets/), platforms have pushed for better tools to build interfaces that are robust, flexible and performant. The reactive programming paradigm is a solution to this problem.  -->

The increasing modularity of Javscript led to more experimentation by more developers. New techniques to manage user interface development emerged. Beginning in 2013 with Facebook's [React.js](https://reactjs.org/) and [Vue.js](https://vuejs.org/) 9 months later, _Reactive Javascript libraries have proven to be a faster, more performant and highly flexible method for building your user interface (UI)._ More than just handling templating, they efficiently manage interface "state"—how the UI reacts to interactions—to make code more predictable and easier to debug. They are now regarded as the go-to method for building performant interfaces, and you can easily hire programmers for them because of their [dominance within the programming language market.](https://insights.stackoverflow.com/survey/2018#technology-frameworks-libraries-and-tools)

<!-- approachable, versatile, performant, maintainable, testable -->

<!-- Publishing houses like Squarespace, Wordpress, et al. now all use these Reactive Javascript libraries to build their CMS interfaces, but they don't build your resulting UI with it because they have too much invested in the backward compatibility of their legacy systems that got them success in the first place. -->

### Serving prebuilt markup

<!-- We have briefly discussed how APIs allow best-in-class services to be unbundled from platforms and integrated in a modular fashion.  -->

<!-- Consumers expect the near instant delivery of content as part of a satisfying and considerate experience. -->

_Good web experiences get taken for granted. Bad web experiences get spoken about._ We all clearly understand that the first page load and subsequent delivery of content is crucial to the user's perceived experience of your website. If you fail the user with your initial page load, their opinion of you is immediately reduced. To deliver performant page loads, the most significant gains have been made by prebuilding web pages and serving them through a cached [Content Delivery Network](https://en.wikipedia.org/wiki/Content_delivery_network) (CDN).

<!-- , as well as subsequent page loads (which can be made completely instant by Single Page Applications cached in the browser) -->

<!-- to progressively load the most apprent content first, or  -->

<!-- The process of serving your website can have less to do with the host itself—where the market itself is now better differentiated by the quality of administration interfaces than by the standardised quality of servers—than what's being served and how. -->

This is where prebuilt markup (the JAMstack "M") comes into play. By prebuilding the markup—that is, the scripts, styles and information within each web page—it does away with dynamically building pages on-the-fly with calls between a database and a remote server during delivery, such as what happens with Wordpress. This simpler delivery method is not insignificant. When we serve a website with prebuilt markup _it's not just easier to create fast page loads, it's also far more secure, with a far lower cost of scaling, and it completely removes the need for a backend._

Yep, that's right: no backend operating systems, web servers, backend programming languages, or databases. The cost of understanding it, hiring for it, maintaining it, and having it weigh on your mind—all gone. Serverless cloud hosting is now a [utility](https://evolve.hiredthought.com/#landscape).

<!-- Like outsourcing services to third parties through an API, publishing is also outsourced by [WebHooks](https://en.wikipedia.org/wiki/Webhook) that prebuild a completely new version of the website on every publish. -->

<!-- The JAMstack also allows for any kind of interface building tools. Which is where I always slot in a Reactive Javascript library for the capabilities it affords, as I've briefly described above. -->

<!-- ### Combine good tools allows new systems

Once you have a website pulishing system made up of best-in-class tools, you can start to mix tools and methods contextually to create user experiences beyond what's been possible. And because the tools being used

Some examples include:

- Statically generated (prebuilt) websites that turn into Single Page Applications (SPAs) after the intial page load -->

<!-- For example, by building the interface with Reactive Javascript library and statically generating the site, we can serve a website that loads as a static site  combining a JAMstack architecture  of this is , serving a website made of static prebuilt markup on first lookup, but once loaded, the Reactive Javascript library takes over, runnign the website as a Single Page Application where by the entire site is cached within the browser. This allows for a user experience of instant pages load with no call to the website host's server. -->

<!-- and this can be done readily with tools that have been battle-tested in production and aren't sitting behind platform subscription services. They're open-source!  -->

<!-- This is made possible, once again, by using a Reactive Javascript library to build the interface. -->

<!-- Note that many of my clients moving off their legacy platforms (yes, it's happening) have raised concerns about the SEO performance of Vue and React powered "static sites". Suffice to say that's a priority of the Javascript community, and there are . Keep in mind, it is in Google's best interests to handle these new web development methods, and they have been able to index Javascript-powered websites for a while now (links here.)

Perhaps the best guide I've read to handling SEO on Javascript static sites is by [Storyblok](https://www.storyblok.com/tp/seo-in-times-of-headless-cms-and-spa). I while be writing on the subject shortly, but until then, these guys are pros.

It's also worth noting that I'm not unveiling anything new here. Reactive Javascript libraries and the JAMstack aren't shiny new objects, but rather website development techniques I've been playing with since 2013. -->

<!-- ## This shift is an opportunity -->
<!-- ## Don't let hindsight become painful -->

<!-- ## What happens next -->

<!-- As Patrick Collison noted above, we're not there yet. _The paradigm shift happening in web publishing tools will continue unabated, widening the gap between legacy web experiences and the new wave of crafted experiences_ built by a different generation of web developers who haven't been weighed down by unlearning the previous generation's best practises.

My biased advice is, of course, to _jump on the bandwagon_. Once you have a website publishing system made up of best-in-class tools, you can start to mix tools and methods contextually for your business needs, to create user experiences beyond what's been possible (and better than your competitors).

These new tools are simpler in many respects, removing significant and complex sections from the old tech stack paradigm. When there is less to remember, less to manage and reduced legacy tools to maintain, you make more space to focus on the value-adding parts of your business. -->

<!-- such as creating a continually better user experience for your customers.  -->

<!-- - Statically generated sites (SSGs) & SPAs … generates SEO-friendly HTML files that can be hosted anywhere. These HTML files are optimized to load as fast as possible. After the HTML is loaded Vue.js takes over the HTML and hydrates into a fully Vue-powered SPA. ([Hydration](https://gridsome.org/docs/how-it-works#client-side-hydration) refers to the client-side process during which Vue takes over the static HTML sent by the server and turns it into a dynamic DOM that can react to client-side data changes.)
- SEO
- Decoupled (headless) CMS: the content is integrated into the frontend via an API
- server-side rendering previews in realtime with Storyblok -->

<!-- After all, it's your shopfront in a digital city. -->

## Updating the shared reality of web development systems

As Patrick Collison noted above, the current paradigm of development tools will come to be seen as primitive in the near future. Which means _the paradigm shift happening in web publishing tools will continue unabated, widening the gap between legacy web experiences and the new wave of crafted experiences._

These crafted experiences are being built with new tools made by a different generation of web developers who haven't been weighed down by unlearning the previous generation's best practises.

<!-- These new tools are simpler in many respects, removing significant and complex sections from the old tech stack paradigm. When there is less to remember, less to manage and reduced legacy tools to maintain, you make more space to focus on the value-adding parts of your business. -->

> Paradigms are the sources of systems. From them, from shared social agreements about the nature of reality, come system goals and information flows, feedbacks, stocks, flows and everything else about systems.<br>**Donella Meadows, [Places to Intervene in a System](http://donellameadows.org/archives/leverage-points-places-to-intervene-in-a-system/)**

Yet you might be thinking, "if there's a paradigm shift in web publishing that's so obviously better, how come I'm not feeling the pain yet?" That really depends on what you're used to and your exposure to these new tools.

<!-- and the priorities within your workflow. -->

What I can say is that _without working with the nuance of the problem everday, it's difficult to see systemic change happening in the moment._ It's either too slow for us to notice in realtime, like a plant growing, or because we don't see the second- or third-order effects until well after the change has happened, when everyone else is doing it.

<!-- It's when the system's shift becomes social that change occurs. -->

<!-- Instead of letting [VUCA](https://en.wikipedia.org/wiki/Volatility,_uncertainty,_complexity_and_ambiguity) take hold, and put off thinking about the terrible nightmare of upgrading yourwebsite again, think of it as a really big opportunity. _The tools are already here, they’re just not evenly understood._  -->

<!-- Better tools make better websites, and a better website should equate to a better customer service.  -->

<!-- and we find ourselves looking in the rearview mirror of hindsight. -->

<!-- When it comes to the shared social agreements about the nature of web development systems, my advice is to take heed of the rumblings coming from within the web developer community. They're the ones at the coalface, working with the nuance of the problem everday.  -->

Now is the right time to jump on the bandwagon. _The new tools are better and they're already here. They’re just not evenly understood yet._ Like most paradigm shifts, however, we won't know this until time and experience grant us hard-won hindsight. Or until we have to go back and use the old tools.

<!-- Better modern web development tools are here. They’re just not evenly understood. But when the new tools become proven and normalised within the culture, then reverting back to old tools will become, well, painful. Just like my mechanic explained. Why wait until it’s obviously painful?

so that you can own a first class website experience without digging yourself into maintenance hell where you fear updating or publishing -->

<!-- ## RJ

They matter because they have proven to be a more productive method to building user interfaces. Reactive Javascript libraries make it much easier to write code that is modular, understandable, with less bugs. This means you spend less time managing problems and more time focussing on your business goals:

- When state management is handled _reactively_ within the library by it's virtual DOM engine, rather than being intermingled within the real DOM, you can write declarative code that is more predictable, easier to understand and easier to debug.
- Because we're using a scripting to language to build UI, we can write encapsulated components that manage their own state. And we can then compose them to make complex UIs. Any logic is written in JavaScript instead of templates, so we can easily pass rich data through the application and keep state out of the DOM.
- Reactive Javascript libraries are able to be rendered server-side. This does away with the historical complexity of old application frameworks that had huge setup and server management costs. And they were written in a completely different programming language, which you now don't need to learn or outsource for.
- Reactive Javascript can be adapted to any web technology: it’s modular. You can use it in VR as well as in a web page made of HTML. -->

<!-- <div class="HeadingSpace"><hr class="ParagraphSpace"><p class="fs-text-sm c-text-light"><span>1. API <a href="https://arxiv.org/abs/0812.4360">Link title</a> by J'urgen Schmidhuber.</span></p></div>

<div class=""><hr class="ParagraphSpace bg-transparent"><p class="fs-text-sm c-text-light"><span>2. CDN</span></p></div>

<div class=""><hr class="ParagraphSpace bg-transparent"><p class="fs-text-sm c-text-light"><span>3. Reactive Javascript libraries include React.js and Vue.js</span></p></div>
<div class=""><hr class="ParagraphSpace bg-transparent"><p class="fs-text-sm c-text-light"><span>3. SSG Static Site Generators</span></p></div> -->

<!-- CMS
Reactive Javascript
JAMstack
UIs, the information that is displayed on your browser screen -->