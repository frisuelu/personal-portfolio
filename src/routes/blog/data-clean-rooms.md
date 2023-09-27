---
title: Data Clean Rooms - the key to marketing success
subtitle: Data-driven marketing strategies employing new cookie-less approaches
date: "2023-01-24"
thumbnail_url: "src/lib/images/data-clean-rooms.jpg"
thumbnail_alt: Data Clean Rooms
---

# Data Clean Rooms - the key to marketing success

> **_Unlock the full potential of your data and remain compliant for a data-driven marketing strategy_**

---

In this new article we bring back the subject of **Data Clean Rooms** (DCR), which are becoming more and more of a topical challenge due to the regulatory changes regarding data that are coming in Europe and, eventually, throughout the world.

Data Clean Rooms are being adopted across all facets of data-driven marketing for many use cases, such as:

- **Direct partnerships** between media buyers and sellers to improve ROI and yield, respectively
- Providing a **framework** for media owners to scale and control their **1st party data**
- Creating one **transparent environment** to resolve identities in a unified manner
- Acting as a **2nd party Data Hub** to further enrich audience and identity profiles

The value of Data Clean Rooms goes further than the technical advantages, since from its implementation it quickly becomes a critical company asset. It showcases a future-proof data strategy aligned with the companies’ interests, ensuring both data quality and robustness in the analysis and decisions taken.

In this article, we will delve into the inner workings of a DCR and what to keep in mind when setting one up. Specifically, we will cover the following sections:

- **How does a DCR actually work?**
- **What technical characteristics does it have to ensure data privacy?**
- **What are some common use cases?**

---

#### **How does a Data Clean Room work?**

Data Clean Rooms are encrypted, secure and decentralised storage locations where first-party data is anonymised, layered, and matched between parties safely. This technology allows for future-proofed solutions safeguarded against new privacy changes while remaining in complete control of your data.

If you recall from our previous article, there are three main types of DCRs, mainly distinguished by using an existing one (e.g, walled gardens) or building your own DCR together with a partner. For the adventurous types reading this article, we will detail here what a DCR looks like and relevant points to take into account.

The first step is to decide the relevant 1st party data you want to add to the DCR, such as ecommerce transactions, CRM or CDP records. It’s important to note at this stage that PI and PII data **is read, encrypted and copied** to a client-specific DCR Cloud Storage; no movement of sensitive data is done, and inside the DCR only a “hashed” copy of the data is present. Data ownership remains on the client side, and no leak or exposure of data is risked while on the DCR platform.

![Figure 1. Infrastructure screenshot as one client, part of a multiple-partner collaboration](https://cdn-images-1.medium.com/max/800/0*2c6gsVOpcV5fWMWN)

Figure 1. Infrastructure screenshot as one client, part of a multiple-partner collaboration

The selected data sources are then read, encrypted and stored on the DCR provider, where it’s further anonymised and aggregated into user and demographic groups. This resulting data is then available in the DCR platform for further analysis or overlapping with additional data sources; one example of such is the audience matching between two brands using encrypted data inside the DCR.

In order to avoid fingerprinting and to keep the data anonymous, further mathematical techniques that introduce noise are applied to the dataset. This ensures the aggregate data queries are consistent, while maintaining the privacy of individuals and complying with all privacy regulations; it’s especially important when dealing with smaller audiences, since this effect increases. One simple example is the following:

> Suppose a particular person lives in Madrid. And suppose you are collaborating with a partner that wants to identify if this person is on your CRM.

> Without privacy controls, after uploading your CRM dataset to the DCR, they could upload a database of their own to their DCR instance, listing thousands of people who live in Barcelona and just this one person who lives in Madrid.

> Then, they could ask for statistics on the audience overlaps. If this report revealed that there was at least someone living in Madrid, then they would know that it was this very same person.

In collaboration scenarios, approved partners and advertisers are granted access to the anonymised data by the data owner on the client side, using mathematical models that contain no PII and are shared between the client’s DCR instances. The protected data can be used by partners and advertisers for data analytics, audience intelligence or data enrichment with identity providers, among others. More details on the actual data sharing are given in the section below.

![Figure 2. Data can also be matched on multiple IDs at once to eliminate the reliance on one type of identity resolution or partner](https://cdn-images-1.medium.com/max/800/0*T5klsNvV8HR66zCA)

Figure 2. Data can also be matched on multiple IDs at once to eliminate the reliance on one type of identity resolution or partner

Audience activation can be done directly from the DCR when connected through APIs to the programmatic stack, or the relevant insights can be taken outside of the platform to fuel campaign planning as an ad-hoc solution.

All in all, the main DCR providers offer a technological stack rooted on a decentralised and agnostic infrastructure, allowing the greatest degree of freedom suited to any need while maintaining full data ownership and control.

---

#### **How is data handled?**

As mentioned in the previous section, data remains on the client’s premises and is not stored inside the DCR itself. Instead, an encrypted hashed copy of the data is created and stored for analysis and sharing; but what does _hashing_ mean?

In simple terms, hashing refers to the act of changing a plain text value into an alphanumeric value by using a function. Hashing returns an anonymised version of the input value that can’t be reversed and acts as the first privacy wall against possible data leaks. It’s important to note that hashing always returns the same output for a given input, in order to keep consistency.

However, encrypted data is a two-way process, where a private key is generated for the specified data and it’s used in order to hash or scramble the data. Then, only someone with the **same key** can decrypt and access the raw data.

Data Clean Rooms go one step further and apply advanced mathematical models such as **homomorphic encryption** to ensure data is secure, but also allow the analysis of encrypted data without the need for the private key! Further detail on this model can be seen [here](https://www.statcan.gc.ca/en/data-science/network/homomorphic-encryption), but in short, it allows **operations on the encrypted data** that can be **directly translated to the unencrypted data**.

![Figure 3. Ordinary encryption process (left) versus homomorphic process (right)](https://cdn-images-1.medium.com/max/800/0*ugNdiaJEsjdbq8Ko)

Figure 3. Ordinary encryption process (left) versus homomorphic process (right)

Thus, data owners can share the encrypted data and perform analyses on top of them without the need to decrypt it. This is the fundamental piece of privacy that enables DCRs to comply with all privacy regulations and allow DCR users to stay ahead of the market.

![Figure 4. Example of audience matching and activation for a brand inside the DCR. Note that your hashed IDs are matched and activated by the partner **without any PII being shared**](https://cdn-images-1.medium.com/max/800/0*3cgJys9muk8qvq0F)

Figure 4. Example of audience matching and activation for a brand inside the DCR. Note that your hashed IDs are matched and activated by the partner **without any PII being shared**

---

#### **Relevant DCR use cases**

Now that we have reviewed how the internals of a DCR work, we will take a look at three use cases in the industry where DCRs present a competitive advantage for companies implementing or collaborating in them.

#### **Single customer view and breaking internal silos**

DCRs are the perfect tool for the digital transformation of companies, especially ones where there’s a disconnect of customer data sources and **information silos**. With DCRs, not only is this achievable, but the (sometimes) **internal politics** of the company that prevent data movement can be **circumvented**.

These silos can be the **internal departments** of a company, different companies that are part of the **same group**, or any similar entity structure where there’s reticence to share data but also a value in analysing it together.

Recall that **the actual data is not moved** between the instances and only the encrypted data is matched and analysed; in the end, these entities act as if they were different clients, so they can keep the ownership of their data while, in the meantime, allow cross collaboration.

![Figure 5. Different teams or departments can collaborate securely to allow a single customer view across their organisation](https://cdn-images-1.medium.com/max/800/0*Vk4OA951j4yt0A2K)

Figure 5. Different teams or departments can collaborate securely to allow a single customer view across their organisation

#### **Audience overlap**

One of the other common uses of DCRs is crossing 1st party consumer information between several parties in order to **broaden their perspective** on the behaviour of their own consumers.

This benefits all parties involved, as usually this information is both very personal (and therefore privacy compliance makes it difficult to analyse across companies) and a big asset for each brand involved, so a **private** and **secure** environment such as a DCR is the perfect fit for this.

One specific example could be a **retail** brand selling clothes that crossed their data with a **fashion** magazine. In this case, the added benefit for the brand is clear: they can understand if that channel is a relevant media source for their own consumer, and thus a way to improve their brand awareness and notoriety. For the magazine, the advantage is knowing more about their own readers through their fashion interests, providing further collaboration opportunities with other brands.

![Figure 6. Crossing 1st party data while remaining in such an environment allows brands to understand other interests of their consumers](https://cdn-images-1.medium.com/max/800/0*e8IGcXbPVyZ5iHK0)

Figure 6. Crossing 1st party data while remaining in such an environment allows brands to understand other interests of their consumers

#### **Monetisation of your owned data**

This is a relevant use case for **media owners and networks**, as the prospect of a **secure** environment and **standardised** procedures to share their 1st party data is critical to go one step further in their business model. In this use case, brands and interested parties would come to understand their consumers’ media interests and behaviour. The direct impact of this for brands is that media planning can then determine the **expected reach** of each channel with more certainty than using the common aggregated data sources currently used.

![Figure 7. Monetise your owned datasets in a safe manner, while allowing brands to enrich their own understanding of their consumers](https://cdn-images-1.medium.com/max/800/0*g8X7tqmtZ0VXcaca)

Figure 7. Monetise your owned datasets in a safe manner, while allowing brands to enrich their own understanding of their consumers

---

#### **Conclusion**

Data Clean Rooms are an incipient solution that is growing in demand and that many companies are currently garnering to their advantage. We hope this article has given you a new perspective into how a Data Clean Room could suit your organisation’s needs.
