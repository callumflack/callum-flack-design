---
published: true
mostRecentPost: true
category: Web development
title: The paradigm shift in website publishing
lede: You don’t miss good tools until you have to use the old tools. When it comes to web development tools and publishing systems, there's a paradigm shift in effect. It'll not only make your website a better user experience, it'll be easier to maintain. It's just that you may have to wait until your current website system is painful enough before you believe me.
readingTime: 8
heroImage: https://res.cloudinary.com/pw-img-cdn/image/upload/v1552908874/okok/matt-artz-353295-unsplash-.jpg
blockColor: rgb(0,0,0)
---

<!-- Build better websites with Reactive Javascript and the JAMstack -->

Last weekend, as I chatted to the mechanic who was diagnosing why our car wouldn’t start, he said “I charged my pressurised tyre jack last night but forgot to put it back in the truck. So this morning I’ve already done two manual tyre changes. What normally takes me five minutes took 25 minutes.” The clincher was what he said next:

> _You don’t miss good tools until you have to use the old tools._

The web is a quarter century young and all the tools we use to make the web are mutating works in progress. We're starting to see platform maturity this decade and with this, a second generation of tooling methods has also matured, driven eagerly by the platforms themselves, well honed in the battle for your eyeballs. Given this, it shouldn't surprise you if I tell you _there is a paradigm shift happening in modern web development_.

The arrival of new tools is making the old tools painful. Web developers already understand this. And slowly, as a new breed of javascript-powered websites are using new techniques that result in no page loads, no server side rendering and pre-fetched assets—all of which result in signficantly better user interface performances—it's becoming obvious to audience and business alike that something is afoot.

## Proprietary web publishing is being overrun

> So for the past four years or so, this blog has been running on WordPress. It was as fast, as custom, and as free of plugins as I could possibly make it, but WordPress is cumbersome, and there's only so fast and pleasant to use you can make it.<br>**Tania Rascia, [The End of an Era: Migrating from WordPress](https://www.taniarascia.com/migrating-from-wordpress-to-gatsby/)**

I think we’re seeing _a generational shift in web development between the proprietary bundled systems of the dominant web publishing platforms that emerged a decade or more ago as they struggle to modernise and compete against the fundamentally different approaches of modern web development,_ where a multiplicity of unbundled API services can be integrated together in a technology stack customised to publishing requirements. And the divide will grow because the proprietary systems must use their legacy tech stack for the backward compatibility of all their mid- to long-term subscribers.

Let me give you an example of how this is happening. Some of my clients have small- to medium-sized legacy websites on Wordpress. By legacy, I mean these websites have been alive for a number of years, I've inherited the project and it's my job to maintain and extend it's lifespan. Because they need a website.<a href="#f-1" class="Footnote-marker u-linkClean">1</a>

The problem I've seen lately is that _these kinds of legacy websites are slow, graceless experiences and my clients and their audiences are starting to sense it_. So they're asking me to upgrade these experiences but a quick glance at the codebase tells me 1) it's no wonder they're slow and graceless, and 2) I know there's a better way to do this.

And this better way starts with understanding three important facts:

- _**APIs change everything.**_ In the past, bundling features into a web publishing tool made sense. It wasn't easy to integrate services with an external API because the technology wasn't available. But now it is. So instead waiting for your publishing platform to become a swiss army knife, you can choose to integrate an API-based service who lives and dies by doing that one service better they ever will.

- _**Microservices can afford to do a better job.**_ In the past, your website publishing platform was probably what we now know as a CMS. Like Wordpress. This platform would handle not only the CMS but also the building of your user interfaces. Today the UI build doesn't need to be tied to the publishing platform, and there are better tools for that job that will never be integrated back into the older publishing systems because backward-compatibility prevents it.

- _**Javascript is everywhere.**_ With the maturity of Node.js, developers haven't had to change languages between server-side (the backend) and client-side (the browser) environments for a while. That has allowed innovative new techniques to emerge and mature: code/data splitting, pre-loading, pre-caching, image optimisation and bucketloads of other enhancements—difficult or impossible to do with straight HTML, unheard of only a few years ago—are freely available in opensource frameworks.

<!-- with what originally made their system a success: they literally have too much legacy to overcome. -->

<!-- ## The generational shift in modern web publishing -->

## The new web publishing tools

> We’re underinvested in developer tooling. Industry-wide, there are enormous efficiency gains still to be unlocked—_tools today remain quite primitive._<br>**[Patrick Collison](https://twitter.com/patrickc/status/1100075444962033664?s=12), Stripe CEO**

<!-- And I don't think it's just a matter of  -->

If someone were to publish a new website today, so that it becomes a valuable asset tomorrow, what exactly are these better tools? And why?

### The JAMstack

[JAMstack is an acronym (Javascript, APIs and Markup)](https://jamstack.org/) that symbolises an approach to building websites where each part of your website publishing system—interface building, content and services management, and hosting—is treated as a separate concern. These concerns are then integrated together within a web development workflow so that you can create your own customised ["technology stack"](https://mixpanel.com/topics/what-is-a-technology-stack/). Because each concern is isolated, it allows free choice of the best tool available for that concern within the context of your business requirements.

_In contrast to allowing a web publishing platform to determine the quality of your web publishing workflow based on their priorities and subsequent slow-moving feature set, the JAMstack method gives you the freedom to create a flexible, customised technology stack that exactly suits your needs_.

### Building the front-end with Javascript

Beginning in 2013 with Facebook's [React.js](https://reactjs.org/) and [Vue.js](https://vuejs.org/) 9 months later, _Reactive Javascript libraries have proven to be a faster, more performant and highly flexible method for building your user interface (UI)._ More than just handling templating, they efficiently manage interface "state"—how the UI reacts to interactions—to make code more predictable and easier to debug. They are now regarded as the go-to method for building performant interfaces, and you can easily hire programmers for them because of their [dominance within the programming language market.](https://insights.stackoverflow.com/survey/2018#technology-frameworks-libraries-and-tools)

<!-- approachable, versatile, performant, maintainable, testable -->

<!-- Publishing houses like Squarespace, Wordpress, et al. now all use these Reactive Javascript libraries to build their CMS interfaces, but they don't build your resulting UI with it because they have too much invested in the backward compatibility of their legacy systems that got them success in the first place. -->

### Serving prebuilt markup

<!-- _Good web experiences get taken for granted. Bad web experiences get spoken about._  -->

The most significant gains in website loading speed have been made by prebuilding entirely flat web pages (that is, a "[statically generated site](https://www.staticgen.com/)") and serving them through a cached [Content Delivery Network](https://en.wikipedia.org/wiki/Content_delivery_network) (CDN). By prebuilding the markup—that is, the scripts, styles and information within each web page—it does away with dynamically building pages on-the-fly with calls between a database and a remote server during delivery (otherwise known as "server-side" rendering), such as what happens with Wordpress.

This simpler delivery method is not insignificant. Serving prebuilt markup _is not just easier to create fast page loads, it's also far more secure, with a far lower cost of scaling, and it completely removes the need for a backend._ Yep, that's right: no backend operating systems, web servers, databases or different programming languages. Serverless cloud hosting is now a [utility](https://evolve.hiredthought.com/#landscape).

### Publishing with automated webhooks

An ecosystem of deployment tools has also attached itself to your code repository, allowing easy, limitless publishing via Continuous Deployment (CD) methods. New builds—that is, a newly published website version—can be automatically triggered by [webhooks](https://developer.github.com/webhooks/) based on scripts that are run when committing code to your website's code repository.

By hooking these deployment systems into with "headless" or "decoupled" Content Management Systems (where your content is integrated into yoru website front-end via an API), _a robust, error-free deployment pipeline can triggered by anyone,_ developer or not, with a click. No more accidently overwriting the wrong file on your FTP and scrambling for the backup you didn't make.

<!-- ### Opensource -->

<!-- All of these chnages are filtering down to even simple consumer business websites because they're driven by opensource. Which means you can simply `yarn add` to integrate it into your website. And that means developers love it. -->

<!-- - Statically generated sites (SSGs) & SPAs … generates SEO-friendly HTML files that can be hosted anywhere. These HTML files are optimized to load as fast as possible. After the HTML is loaded Vue.js takes over the HTML and hydrates into a fully Vue-powered SPA. ([Hydration](https://gridsome.org/docs/how-it-works#client-side-hydration) refers to the client-side process during which Vue takes over the static HTML sent by the server and turns it into a dynamic DOM that can react to client-side data changes.)
- SEO
- Decoupled (headless) CMS: the content is integrated into the front-end via an API
- server-side rendering previews in realtime with Storyblok -->

<!-- After all, it's your shopfront in a digital city. -->

## Updating the shared beliefs of website publishing

_When a paradigm shift occurs it’s rarely because the old methods don't work or aren't popular anymore. It just that the old guard can't change their identity quickly enough to keep up with the opportunities the shift provides._ They'll want to keep playing to their prowess and strengths, but instead they accidently display their generational bias (a variation of the [Shirky principle](https://en.wikipedia.org/wiki/Clay_Shirky#Shirky_principle) but for first-gen web developers, if you will).

Meanwhile, the new breed of crafted web experiences are being built with new tools made by a different generation of web developers who haven't had to unlearn the previous generation's best practises.<a href="#f-2" class="Footnote-marker u-linkClean">2</a>

As Patrick Collison noted above, the current paradigm of development tools will come to be seen as primitive in the near future. Which means _the paradigm shift happening in web publishing tools will continue unabated, widening the gap between legacy web experiences and the new wave of crafted experiences._

<!-- These new tools are simpler in many respects, removing significant and complex sections from the old tech stack paradigm. When there is less to remember, less to manage and reduced legacy tools to maintain, you make more space to focus on the value-adding parts of your business. -->

> Paradigms are the sources of systems. From them, from shared social agreements about the nature of reality, come system goals and information flows, feedbacks, stocks, flows and everything else about systems.<br>**Donella Meadows, [Places to Intervene in a System](http://donellameadows.org/archives/leverage-points-places-to-intervene-in-a-system/)**

Now is the right time to jump on the bandwagon, where you'll get the optimism and efficiency of a new generation of tools which will help you create superior website interfaces that also easier and faster to manage, iterate on and scale. _The new tools are better and they're already here. They’re just not evenly understood yet._

<!-- Like most paradigm shifts, however, we won't know this until we either see everyone else doing it, or it hurts. -->

<!-- Or until we have to go back and use the old tools. -->

<div class="HeadingSpace" id="f-1"><hr class="ParagraphSpace"><p class="fs-text-sm c-text-light"><span>1. Despite all the social media publishing platforms available, a website is still where a business can retain most control over the presentation of their core value proposition, and it's probably still the first thing a potential customer will click to from a search. Oh and forget native apps for business brand & value proposition sites, web search well and truly beat them.</span></p></div>

<div class="" id="f-2"><hr class="ParagraphSpace bg-transparent"><p class="fs-text-sm c-text-light"><span>2. I’m not a born developer and I don’t have the baggage of having transferred out of a decade of PHP in the early 2010s. Instead, I was a graphic designer for well over a decade before I started learning to program. There was a lot I haven’t had to unlearn because I never learned it in the first place.</span></p></div>
