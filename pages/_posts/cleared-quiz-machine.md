---
layout: post
category: projects
date: 2022-03-16
title: Building the Cleared Quiz Machine
lede: A case study in scoping, designing and building a scalable Allergy Diagnosis Quiz system for Cleared, a digital healthcare platform I've been working with.
readingTime: 6
assets:
  cover: /images/cleared-card.jpg
hero:
  showCover: false
  ratio: 8 / 16
  # imageBlend: 0.1
  titleInvert: false
nextPost:
  title: Is the Creative Director Dead?
  link: /blog/is-the-creative-director-dead
  hero: /images/post-creative-director-dead.jpg
tags:
  - engineering
  - product design
---

<!-- [insert picture here] — Callum -->

Cleared is a digital health startup, [recently acquired by LifeMD](https://www.globenewswire.com/news-release/2022/01/12/2365613/6480/en/LifeMD-Expands-Patient-Offerings-by-Acquiring-Leading-Allergy-Telehealth-Platform.html), that delivers allergy medications directly to your door. Our users visit the Cleared website, complete an allergy quiz, get custom recommendations, and then order treatments for delivery directly to their home address.

The Cleared Dev Team started Q3 2021 with a big scalability problem: each Cleared Quiz was a standalone piece of code, so it took forever to create a new one even though our product team wanted to spin up new quizzes quickly. Enter the quiz machine: a scalable, on-demand quiz system that allows the Cleared product team to quickly create quizzes with minimal developer involvement.

This post gives an overview of the pieces of the Quiz Machine and the biggest obstacles we faced that [Zach](https://www.linkedin.com/in/zahay/), [Barry](https://github.com/BarryPH) and myself wrote together as a development team.

To see an example of the Quiz Machine in action, checkout our [Environmental Allergy Quiz](https://portal.getcleared.com/start/environmental-allergy-quiz) or watch the 6 minute demo below.

<MediaVideo showControls src="693001127" ratio="720/1044">
  <p class="Note">Quiz Machine demo, February 2020</p>
</MediaVideo>

## Our Stack

There are three parts to our stack: the frontend, the backend, and Services. We use a NextJS application with Chakra and Formik on the fronted end. On the backend, we use ExpressJS with the [Bulletproof Architecture](https://softwareontheroad.com/ideal-nodejs-project-structure/) and Postgres. We host both the NextJS and ExpressJS apps on [Render](https://render.com/). 

There are a large number of 3rd-party services needed to make a digital health company like Cleared work properly. Here are some of the most important ones:

- Stripe for payments
- Capable Health as our quiz CMS
- MDIntegrations as our Medical DB/EHR

Both Capable Health and MDIntegrations are new services to the Cleared stack that are needed to make the Quiz Machine work.

## Pieces of the Quiz Machine

### The Frontend

The Quiz Machine has 5 phases on the frontend:

- an initial eligibility page to save the user spending time if they were not above a certain age or lived in a US state that was not eligible for our service
- the quiz form itself
- a product recommendations page, generated from the quiz answers
- a sign-up or login phase where we also collected a person’s proof of personal identity and pharmacy choice
- a checkout where a use can understand their order and manage their cart prior to purchase

We also incorporated bookmarking so that a signed-in user can leave the application, come back to their account, and receive a “todo” notice which will take them back to their bookmark within the specific Quiz Machine step.

Finally, the checkout is the cornerstone of the Cleared ecommerce system: having gone through the previous 4 Quiz Machine phases, we want to “tie the bow” on the Quiz Machine experience. We support many types of purchases:

- One-off purchases
- Subscription purchases (30 day and 90 day renewals)
- Over the counter treatments
- Doctor prescriptions

The checkout interface is multi-faceted: it has to group and clarify each product and clearly associate it with the listed totals to make it easy for a user to understand what they’re buying. 

And because we require a Doctor’s prescription (via the MDIntegrations EHR), we don’t charge these payments immediately. Instead we accept the payment details (via Stripe) and await the Doctor’s prescription before triggering a Stripe charge.

<MediaVideo frame src="693371475" ratio="8/10">
  <p class="Note">Custom checkout with multiple user options</p>
</MediaVideo>

### Capable Health: The Quiz CMS

Cleared quizzes have many features: HIPPA compliance, conditional flows, product recommendations, analytics and more. We wanted a CMS that would support such rich quizzes and allow our product team to easily create ones: enter [Capable Health](https://capablehealth.com/). 

Capable Health offers a survey product that allows our product team to log-in and create new quizzes on-demand. Our frontend then takes the quizzes created in Capable Health and renders them using the Cleared design language.

Two great benefits of Capable Health are product recommendations based on quiz responses (ie. If a user answer Yes to question 2, recommend treatment X) and quiz analytics. Both of these features are not provided in a typical CMS, especially quiz analytics. Setting up an easy-to-use dashboard of quiz stats and metrics was easy. This information is great for our marketing team to investigate things like the drop-off on each quiz.

Extending Capable Health, we were able to implement condition flows that allow quizzes to be dynamic based on users answers.

### MDIntegrations: The EHR

In the world of digital health, physicians need an Electronic Health Record (EHR) to manage sensitive patient data, handle patient cases and prescribe medications in a HIPAA compliant manner. We chose [MDIntegrations](https://mdintegrations.com/) as our new EHR replacing a legacy system.

One of the key benefits of MDIntegrations is webhooks. With webhooks, we no longer have to maintain our own system of cron jobs to periodically query the API. This is very useful for keeping synchronization between our server and our EHR system, saving the time of our doctors. When events reach our server in real time we can process cases without delay, meaning our doctors can approve medications, wait for payment and transmit the prescriptions all in one sitting. We also built a queue system to make the webhooks even more reliable. This adds the extra reliability of an [events endpoint](https://blog.sequin.io/events-not-webhooks) over webhooks.

MDIntegrations is an API based EHR. Being able to tightly integrate lets us reflect actions taken by doctors within the EHR in the Cleared portal. Doctors can recommend medications to a patient at any time without leaving MDIntegrations and a cart will automatically be created on the Cleared portal ready for the patient to checkout.

### Putting it all together

Our ExpressJS server coordinates between the frontend and all our services like MDIntegrations, Capable Health, and Stripe. Users interact directly with the Cleared frontend, while doctors can work within the tools they’re familiar with and handle cases entirely through MDIntegrations and the product team can create and modify quizzes in Capable Health.

## The biggest obstacles

Picking and then integrating with the right services for the quiz machine (ie. MDintegrations, Capable Health, and Stripe) was a large obstacle. In hindsight, we know exactly what is required to get the Quiz Machine working but making the right decisions among many different service options was a big challenge. One of the most important things we did during this period was developing close working relationships with the dev teams of MDIntegrations and Capable Health. Inevitably, things broke. And then we worked together to fix them. In using their product, we helped them scale their offering, and we got something that better suited our needs.

Here are some additional obstacles:

- managing scope creep as we discovered the service requirements;
- orchestrating external services together as a coherent user experience;
- [HIPAA compliance](https://www.hhs.gov/hipaa/for-professionals/security/laws-regulations/index.html) across our services to ensure the security of our patient health information;
- allowing quizzes to be created and managed at scale by a non-technical product team;

<Media ratio="440/1680" image="/images/cleared-quiz-machine-commits.jpg" caption="Code tempo visualisation with the final downhill slope representing release convergence" />

## Future Directions

The Quiz Machine has been a great improvement to the Cleared Stack but it isn’t finished yet. There are improvements to make and features to add. Here are some of the projects are team plans to work on in the future:

- Checkpointing + To-Dos. We want to make it easy for a user to pick back up where they left off on a quiz. If they only got halfway through a quiz, we want to send them an email reminder to finish. If they completed the quiz, we want to show them a to-do in their home screen to finish checkout on the quiz.
- Landing Pages. Each quiz needs a beautiful landing page that is easy to spin up. Right now, we can create landing pages but it takes a lot of time for both our designers and dev team. We need a more scalable solution.

While invention is fun, it only continues to exist if it’s maintainable. We did a good job of planning ahead for feature additions and maintenance in future by choosing to build base-level primitives (such as standardized query parameters). Whatever design decisions we made, we made with the intention of writing code that was as easy to understand—and extend or delete—as possible.

<PostButton link="https://www.getcleared.com" label="Visit Cleared" />

Written by [Barry Hood](https://github.com/BarryPH), [Zach Hay](https://www.linkedin.com/in/zahay/), and Callum Flack, March 2022 {.Note}

<script>
import Media from "../../src/components/Media";
import MediaVideo from "../../src/components/MediaVideo";
import PostButton from "../../src/components/PostButton";
export default {
  components: {
    Media,
    MediaVideo,
    PostButton
  }
}
</script>
