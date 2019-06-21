---
published: true
category: Web development, web publishing
title: How to publish a newsletter so you own your writing
lede: Some hopefully helpful thoughts and tips on using a chain of web tools to streamline newsletter publishing, write in markdown, retain ownership and create a focus on writing. All without resorting to any product platform lock-in.
readingTime: 5
---

 <!-- (that's the crystallised line that clearly defines an idea, found in the littoral zone of one's mind) -->

I write a newsletter called [The Littoral Line](https://callumflack.design/the-littoral-line). It's mostly an outlet for me to summarise and clarify my thoughts about what I've found interesting, and to share them with other people. There is otherwise no real strategy. 

<!-- I am frankly not interested in growth hacking my human connections, I'm purely interested in ideas and their execution, on the internet. -->

I took the road less travelled when I set up my newsletter. Partly to play with the available systems. Mostly because _I was concerned about owning my writing._ That's not to say I thought it valuable, but that I just don't like the aesthetics of having it locked away on some platform. 

_I wanted it to be just a folder of files on my computer so that I could simply create a new blank document and start writing with the least friction possible._ But I also wanted those files to work as a publishing system with the least amount of friction in the process as possible.

What follows is a short explanation of how I do this.

## The newsletter system

So I own my writing, I create a website of newsletter posts which I published to a subdomain of this site:  [thelittoralline.callumflack.design](https://thelittoralline.callumflack.design). Then I import each post into Mailchimp via URL to create a new email campaign. 

_This means I never write within the email delivery platform. And all my letters are just markdown files_, just as they are on this website's blog.

Yes, I still use Mailchimp to send out the actual emails. I always try to defer to the best available tools for the job, and because I have no wish to learn about email delivery I definitely want to defer this difficult technical job to one of the many excellent freemium products available. 

<!-- At the moment, I use Mailchimp. The fact that they basically built the entire email newsletter industry and without ever taking outside funding is a sign they believe in what they do and they geniunely wish to provide a service. Oh and the founder, Ben Chestnut, wrote this great post [about inverting marketing funnels](https://tinyletter.com/ben/letters/why-i-hate-funnels) a while back. -->

For interest's sake, some other options I pondered included [button.email](https://buttondown.email/), [Substack](https://substack.com/) and [Revue](https://www.getrevue.co/).

Because the best writing tool for the web is markdown, I use Jekyll to build the newsletter site. There are other web publishing tools emerging—which I've actually [written about in my newsletter](https://thelittoralline.callumflack.design/LL10/)—but none allow me to keep the simplicity of an old school CSS file (the styles in emails need to be inline and the markup table-based for email clients to handle them). I also have some old projects on Jekyll, so I need to keep my hand in it.

<!-- This project was a lesson understanding user needs (in this case, mine, which was to reduce writing friction) in reduction -->

<!-- Nor did I want to go to great lengths to convert all the code splitting that Reactive Javascript libraries do back into email-friendly CSS and HTML -->

## Publishing a newsletter in two steps

_There's only two steps step I take to publish a newsletter edition: write it, then queue it._

### Write it directly on Github

I write directly on Github by creating a new markdown file in the `_posts` directory. When I save that file, I get a new post published on my website via some webhooks magic (this also points to Github being a pretty good CMS). 

Just remember to name the file correctly and to set Jekyll front-matter with the appropriate edition title and date. This isn't an extra step: you'd still need to configure a newsletter's title and metadata within a platform editor anyway.

### Queue it (via RSS)

Using the newly published website blog post URL, I queue up a new email campaign in Mailchimp using their "[import HTML from URL](https://mailchimp.com/help/import-html-from-url-to-create-a-campaign/)" option. Then I click "schedule" for the delivery.

When I have some more time I'll add an RSS feed to the website and point Mailchimp to watch this feed. This should cut out the Mailchimp queuing. But haven't tried this yet, so I can't say "from here on it's trivial…" just yet.

## Prerequisites

_There is some prior setup and configuration necessary._ If you were to [fork my repository](https://github.com/callumflack/the-littoral-line) and replicate my system, you'd need to:

* setup your own domain that is linked to a Github-based deployment service, such as [Zeit Now](https://zeit.co/now). 

* setup an account with any email service that allows you to create a newsletter campaign from a URL, such as [Mailchimp](https://mailchimp.com/). 

_Once you have this, you won't actually need to setup a local development environment._ You'd simply update the `alias` fields within the `now.json` config to match your website domain, create a new markdown file, and start writing.

## Running the writing system locally

If you don't like the Github writing experience, you can create a new markdown file in your local file system. That way you can write using your favourite code editor or indeed your favourite markdown editor. So long as your markdown file sits within your project's `_posts` directory, you're good to go.

If you want to preview the post as it would appear in the email, run a Jekyll development server with `bundle exec jekyll serve --watch`. I have this set as a bash alias under simply `js` so I don't need to remember the command. 

I also have `future: true` set in the Jekyll `config.yml` so that if the draft post has a future date, I'll see it when I run the Jekyll development server.

<!-- When you're happy, commit to your repository master branch so your awesome build system triggers an updated website deployment. -->

<!-- Once you're happy with the newsletter post, commit and push it to your Github repo. From here it gets automatically published, no further steps involved. -->

<!-- I use `JEKYLL_ENV=production` in the layout to easily turn on and off settings when using localhost. Mostly so I can navigate aorund the site in localhost and polish up the flow and styles if need be. This is set in the `.env` object within `now.json`, I have no need for an actual `.env` file because I have no API secrets. -->

## Publishing a Jekyll site with Zeit Now

Once I'm happy with a newsletter edition, I simply redeploy the website using Zeit's [Now deployments](https://zeit.co/now) to my `littoralline` subdomain. To do that, all I do is commit to Github.

<!-- I'll say that again: so I can highlight it -->

<!-- Let me repeat: _to publish, I don't do anything other than commit to Github._ -->

<!-- Modern website publishing is now a matter of simply committing to a   -->

Let me repeat: _to publish, I don't do anything other than commit to Github._

That's because I have a `now` webhook set for the Github repository. The [Now Github app](https://zeit.co/github) simply reads my `now.json` config and automatically does it's thing whenever I push a commit. Because it's a Jekyll site, I also have a `build.sh` file in the project root (taken from the [Now examples](https://github.com/zeit/now-examples/blob/master/jekyll/build.sh)). Now uses this script to run the Jekyll build on the Now servers.

This tiny piece of magic removes the forgetfully manual process of running `now && now alias` from the project root in my terminal and strips another layer of friction from publishing. And this is what _allows me to write directly in Github_.

<!-- (and runs any aliases) I can also run `now` in my terminal from the project root.  -->

<!-- If there's a problem, start by updating the rub gems with `bundle update`… I don't use the Ruby gems package system much these days, nor am I that interested in it, so I know only enough to keep it going. -->

<!-- As a redundancy, I can deployment manually without the `now` command by running `JEKYLL_ENV=production jekyll build --future` on my terminal then dragging the resulting `_site` folder to the Now desktop app. But there's no need to waste the time. It's just good to know if some script breaks down, I can still publish it now and fix the build system later. -->

## And that's a wrap

So that's how I publish a newsletter while always retaining ownership of my writing. It's a both a showcase of web tools and chance to play with them in context to see when they work, and when they don't. 

While this may sound counter-intuitive, it's also helped me think deeply about what my intent is when writing. As I progressed with this project, I came to an important realisation: _any reduction in the publishing process went directly into more time writing._

<!-- I'll probably add in an RSS feed shortly, so I can have Mailchimp automatically create a new email campaign. I'm unsure exactly how this works just yet, and although I'm sure it's quite simple, I'll leave it until the next hack session. -->

With this self-contained markdown-based publishing system, I can now happily keep my excuses for not writing to plain old procrastination.
