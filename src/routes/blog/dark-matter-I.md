---
title: Quantum Physics I — the CERN data workflow in new Physics discoveries
subtitle: First part of the post series detailing work processes at CERN in dark matter analysis.
date: "2021-04-26"
thumbnail_url: "https://miro.medium.com/v2/format:webp/1*M46lihvbDfpJl6ZGY6tgXg.jpeg"
thumbnail_alt: Dark Matter at CERN
---

# Quantum Physics I — the CERN data workflow in new Physics discoveries.

> **_HOW DATA ANALYSIS AT CERN CAN HELP DETECT DARK MATTER_**

---

![](https://cdn-images-1.medium.com/max/2560/1*M46lihvbDfpJl6ZGY6tgXg.jpeg)

Are you interested in learning more about particle physics? You might have heard terms like _neutrinos_, _quarks_, or _dark matter_ mentioned before and want to know more about them. However, the literature and articles involved mainly use terms and concepts that the reader is supposed to already know, which makes them inaccessible to anyone not in this field.

In this article, I’ll provide an easy-to-understand explanation about everything you’d need to know to understand the main points of these articles: the main results, how they’ve been obtained, and the methodology behind their collection. It will be divided into two parts:

- The first one will focus on the basic concepts regarding this subject: a basic Standard Model (SM) overview and a description of dark matter and the Compact Muon Solenoid (CMS) detector.
- The second one will focus on the details of data collection and analysis at CERN; this one is where the Data Science component will be.

My experience with this subject comes from my undergraduate project in Physics dedicated to a dark matter model verification with LHC _Run 2_ data, where my love for experimental particle physics was consolidated. I hope this article will help you understand the basics of these studies at CERN and get you started in further publications on this topic.

---

## Standard Model Basics

We’ll start with a short description of the [Standard Model](https://en.wikipedia.org/wiki/Standard_Model#:~:text=The%20Standard%20Model%20of%20particle%20physics%20is%20the%20theory%20describing,classifying%20all%20known%20elementary%20particles.) (SM), the theory that describes the structure of matter and its interactions. It’s worth noting that the terminology _model_ comes from the 1970s, when this theory didn’t have enough experimental evidence to support it as such, while nowadays it does.

The SM postulates the existence of two kinds of particles: **fermions,** which compose all visible matter, and **baryons,** that mediate the fundamental interactions (ElectroMagnetism, Strong and Weak forces, and Gravity; integrating this last one is still one of the biggest mysteries of modern physics). According to this theory, every interaction between two particles is mediated via the exchange of a boson. Below you can see a simple diagram of these particles and their classifications. The main difference between these two types of particles is their spin: fermions have half-integer spins, while bosons have integer spins, and this is the main reason the physics around these particles are so different.

[![](https://cdn-images-1.medium.com/max/800/0*L2x32zyaBusWKKfN)](https://www.quantumdiaries.org/2014/03/14/the-standard-model-a-beautiful-but-flawed-theory/)

Standard Model (SM) particle overview.

Fermions are further divided into two families of 6 particles each: **leptons** (electron, muon, tau, and their respective neutrinos; these are particles with little mass and no electric charge that appear in the decay of their associated lepton) and **quarks**; the main difference between these is that quarks are affected by the Strong force, while leptons aren’t, and the reason for this comes from the charges of these particles. Another kind of particle not shown in the previous graphic is the **antiparticle**, which is the same particle, but with opposite electric charge; you may know this by its much cooler name of **antimatter**.

Furthermore, quarks cannot be found as independent particles and must form bigger particles called **hadrons**; the most famous ones being the proton and neutron, composed of quark configurations _uud_ and _udd_ respectively; this phenomenon of _hadronization_ of quarks is called [**confinement**](https://en.wikipedia.org/wiki/Color_confinement) and is a really interesting topic for those interested.

Since the fundamental interactions are mediated by bosons, these must _couple_ with the corresponding fermions, but that is only possible if they share the same type of charge. To further explain this, let’s examine each of these forces:

- ElectroMagnetism: this force is mediated by the **photon** (γ) between particles that share electric charge; this includes all quarks, all leptons except neutrinos, and both bosons W⁺ and W⁻.
- Weak force: this is the main force behind the _decay_ of some particles into others, like radioactivity, and is mediated by the bosons **W⁺**, **W⁻**, and the boson **Z⁰** (the superscript indicates their electric charge). The charge needed for this interaction is the weak charge, and all fermions have it.
- Strong force: this is the force that binds the atomic nucleus together, and is mediated by the **gluon** (_g_), which has no electric or weak charges. However, a big difference with the previous interactions is that the gluon possesses **colour** (this is the name given to the strong charge). Its name comes from the fact that this interaction is several times stronger than electromagnetism, thus showing how the nucleus can exist even when it’s made out of protons that should be repelling one another. Only quarks have colour, and as such are the only particles affected by the strong force.

The last piece of the puzzle in the SM is the **Higgs boson**, which couples to every particle (including itself!) except neutrinos, and is responsible for the mass of the particle.

This may seem like a lot of information at once, but don’t worry, the goal of this overview of the SM is to give some context and familiarise you with the forces and particles that rule our universe, you can always reread it later.

## What is Dark Matter?

We’ve talked about dark matter in this article before, but we haven’t really given any sort of description of it; we’ll tackle this briefly in this section, discussing the evidence that supports its existence as well.

Several sources, even going back as far as the 1930s, show that astronomical calculations involving galaxy masses and rotational speeds don’t match with the expected results from the observable masses they have. One example of this is the Cosmic Microwave Background or CMB, where we learned that baryonic matter (meaning stars, planets, humans, etc.) only makes up ~5% of the total universe mass; here is some documentation on [CMB](https://www.quantamagazine.org/how-the-cosmic-microwave-background-reveals-the-universes-contents-20200128/), [gravitational lensing](https://hubblesite.org/contents/articles/gravitational-lensing) and the [Hubble Law](https://science.nasa.gov/astrophysics/focus-areas/what-is-dark-energy) that expands on this matter.

Is there a possibility that this is actually some sort of known particle? Some possible candidates could be :

- Antimatter: this is impossible since the matter-antimatter annihilation process shows very characteristic 𝜸-rays, and these are not seen.
- Black holes: again, it can’t be since black holes curve light around them, and dark matter doesn’t affect photons.

So, now we know most of the universe is made out of some sort of matter/energy that doesn’t interact electromagnetically, which makes it pretty much invisible to most detectors on Earth, but does interact gravitationally; if it didn’t, then we wouldn’t even know it existed. Since this is the case, the naming convention for this new type of matter is **dark matter**, the _dark_ alluding to the fact that it doesn’t interact normally with baryonic matter.

As you can guess, knowing that around 90% of the universe is made out of something we don’t know makes this one of the main research topics of modern-day physics, including searches in particle accelerators like LHC.

## The CMS detector of the LHC

The LHC is the biggest, most powerful particle collider in the world, and provides the best opportunity to discover new particles, like dark matter. In this article, we’ll focus on CMS (_Compact Muon Solenoid_), but the data collection and general workflow apply to the other three main detectors: ATLAS, ALICE, and LHCb.

Its name comes from the muon chambers that, combined with the solenoid, offer the best muon detection resolution available today. There are several components in CMS that can detect all traces of different particles leaving the collision point; if you want a more detailed explanation take a look at [this article](https://arxiv.org/pdf/1306.6905.pdf). There are lots of components, as you can see, but the important thing you have to remember is that their purpose is to analyse the different tracks that different particles leave: electric charge, movement traces, energy, etc.

---

With all of these concepts introduced, we’re ready to dive deeper into the specifics of data collection at CERN in our second part!
