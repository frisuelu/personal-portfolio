---
title: TRANSFORMERS - multi-purpose AI models in disguise (Part I)
subtitle: First part of the post series delving into the Transformer architecture and its applications outside of NLP.
date: "2022-01-09"
thumbnail_url: "https://miro.medium.com/v2/format:webp/1*wZOvEaKZ5CUCgyFlvYfh3w.jpeg"
thumbnail_alt: Transformers outside NLP
media: Posted on Medium
---

# TRANSFORMERS - multi-purpose AI models in disguise

### Novel applications of this powerful architecture set the bar for future AI advances

![Abstract wordcloud](https://cdn-images-1.medium.com/max/1200/1*wZOvEaKZ5CUCgyFlvYfh3w.jpeg)

---

If you have dug deep into _machine learning_ algorithms, you will probably have heard of terms such as _neural networks_ or _natural language processing_ (NLP). Regarding the latter, a powerful model architecture has appeared in the last few years that has disrupted the _text mining_ industry: **The Transformer**. This model has altered the way researchers focus on analysing texts, introducing a novel analysis that has improved the models used previously. In the NLP field, it has become the game-changer mechanism and it is the main focus of research around the world. This has brought the model wide recognition, especially through developments such as OpenAI’s GPT-3 model for the generation of text.

Moreover, it has also been concluded that the architecture of Transformers is highly adaptable, hence applicable to tasks that may seem totally unrelated to each other. These applications could drive the development of new _machine learning_ algorithms that rely on this technology.

> The goal of this article is to present the Transformer in this new light, showing common applications and solutions that employ this model, but also remarking on the new and novel uses of this architecture that take into account its many advantages and high versatility.

So, a brief introduction to the Transformer, its beginnings, and the most common uses will be presented next. In the second part of this article, we will delve deeper into the new advances being made by the research community, presenting some exciting new use cases and code examples along the way. So strap in and prepare for the ride!

It should be noted that AI solutions sometimes lack the responsibility and rigour required when practising _Data Science_. The undesired effect is that models can retain the inherent bias of the data sets used to train them, and this can lead to fiascos such as [Google’s Photos app](https://www.bbc.com/news/technology-33347866).

### TRANSFORMER: APPEARANCE & RESEARCH

NLP is one of the cornerstones of Data Science, and it is involved in most of our daily routines: web search engines, online translations, or social networks are just some examples where AI algorithms are applied in the understanding of textual data. Until 2017, most research in this field was focused on developing better models based on _recurrent_ and _convolutional neural networks_. These models were the highest performers in terms of accuracy and explainability at the time, albeit at the cost of enormous processing power and long training times. This meant the focus of the whole research community was on how to make these models perform better, or how to reduce the machine processing costs. However, a bottleneck was quickly being reached in terms of computational power, and novel ways of analysing text were needed more than ever.

In December 2017, the Transformer model architecture was proposed by Google Brain and Google Research members in the [paper](https://arxiv.org/abs/1706.03762) _Attention is all you need_, providing a new approach to NLP tasks through _self-attention_ technology. This architecture completely outperformed previous models, both in terms of accuracy and training time, and quickly became the state-of-the-art architecture for these applications.

One question may come to your mind: How does a Transformer work? How and why is it better? Although we will avoid highly technical explanations, a basic grasp of the fundamentals for each model is needed to understand its many advantages.

[![Figure 1: schema of a neural network.](https://cdn-images-1.medium.com/max/800/0*ybBwvf6QLBBQBHNE)](https://www.w3schools.com/ai/ai_neural_networks.asp)

Neural networks are connections of nodes that represent relationships between data. They consist of input nodes where data is introduced, intermediate layers where it is processed, and output nodes where the results are obtained. Each of these nodes performs an operation on the data (specifically a _regression_) that affects the final result.

[![Figure 2: Graphical comparison between a neural network and a RNN. The _loop_ provides the time dimension to the model.](https://cdn-images-1.medium.com/max/800/0*VTQMRILKk_FbJt83)](https://www.researchgate.net/figure/The-comparison-between-Recurrent-Neural-Network-RNN-and-Feed-Forward-Neural-Network_fig1_338672883)

_Recurrent neural networks_ or RNN also take into account the time dimension of the data, where the outcome is influenced by the previous value. This allows the previous state of the data to be kept and sent into the next value. A variation of the RNN named LSTM or _long short-term memory_ also takes into account multiple points, so the result avoids _short-term memory issues_ with the model that the RNN usually presents.

[![Figure 3: schematic view of a CNN. Feature learning involves the training process, while classification is the model output.](https://cdn-images-1.medium.com/max/800/0*kz3juzVJCTezz-YP)](https://towardsdatascience.com/a-comprehensive-guide-to-convolutional-neural-networks-the-eli5-way-3bd2b1164a53)

_Convolutional neural networks_ or CNN apply a mathematical transformation called _convolution_ to the data over a sliding window; this essentially looks at small sections of the data to understand its overall structure, finding patterns or features. The architecture is especially useful for Computer Vision applications, where objects are detected after looking at pieces of each picture.

_Recurrence_ is the main advantage of these models and makes them particularly suited for Computer Vision applications, but it becomes a burden when dealing with text analysis and NLP. The computational power increase when dealing with more complex word relationships and context quickly became a limiting factor for the direct application of these models.

The advantage of the Transformer is replacing **recurrence for Attention**. Attention in this context is a relation mechanism that works “word-to-word”, computing the relationship of each word with the rest, including itself. Since this mathematically means products between word vector components, the computational cost needed is lower than recurrence methods.

In the original Transformer architecture, this mechanism is actually _multi-headed attention_ that runs these operations in parallel to both speed the calculations, as well as to learn different interpretations for the same sentence. Although other factors are involved, this fact is the main reason why the Transformer takes less time to be trained and produces better results than its counterparts, and the reason why it is the predominant algorithm in NLP.

If you want to learn more about the original Transformer and its most famous variants, I suggest you take a look at _Transformers for Natural Language Processing_ by _Denis Rothman_; it includes a hands-on explanation and coding lines for each step performed by the model, which helps to understand its inner workings.

### **A SIMPLE AND QUICK USE**

Another great thing about the Transformer research community is the willingness to share and spread knowledge. The online community [HuggingFace](https://huggingface.co/) provides a model repository, a Python library, and plenty of documentation to use and train new models based on the available frameworks developed by researchers. They also provide a [course](https://huggingface.co/course/) for those interested in learning about their platform, so this should be the first stop for you, as an interested reader, if you aim to learn more about the current state-of-the-art models!

Using these models is also very easy with the help of their library, in just a few lines of code we can use pre-trained models for different tasks. One of those is the use of over 1000 translation models developed by the University of Helsinki:

```python
# Import the libraries
from transformers import MarianMTModel, MarianTokenizer
import torch

# Load a pretrained "English to Spanish" model
tokenizer = MarianTokenizer.from_pretrained(
    "Helsinki-NLP/opus-mt-en-es"
)

model = MarianMTModel.from_pretrained(
    "Helsinki-NLP/opus-mt-en-es"
)

# Input a sentence
input = tokenizer(
    (
        "Transformers are a really cool tool for multiple NLP tasks, "
        "but they can do so much more!!"
    ),
    return_tensors = 'pt',
    padding = True
)

# Print the results
print(
    tokenizer.batch_decode(
        model.generate(**input),
        skip_special_tokens=True)[0]
    )
```

The output is the sentence: **Los transformadores son una herramienta realmente genial para múltiples tareas NLP, pero pueden hacer mucho más!!**

Stay tuned for the next part of this article, where we will present cutting-edge uses of the Transformer in other areas of application of AI, where previously other models reigned supreme.
