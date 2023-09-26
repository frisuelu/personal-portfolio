---
title: TRANSFORMERS: multi-purpose AI models in disguise
---

TRANSFORMERS: multi-purpose AI models in disguise
=================================================

Novel applications of this powerful architecture set the bar for future AI advances.

* * *

### TRANSFORMERS: multi-purpose AI models in disguise

#### Novel applications of this powerful architecture set the bar for future AI advances.

![](https://cdn-images-1.medium.com/max/1200/1*-EKJaNY5il-iA-ytWc1HOw.jpeg)

In the first part of this article, we took a look at the Transformer model and its main use cases related to NLP, which have hopefully broadened your understanding of the topic at hand. If you have not read it yet, I suggest you give it a brief glance first since it will help you understand its current standing.

[**TRANSFORMERS: multi-purpose AI models in disguise**  
_Novel applications of this powerful architecture set the bar for future AI advances._manuel-souto.medium.com](https://manuel-souto.medium.com/transformers-multi-purpose-ai-models-in-disguise-978c48fdd973 "https://manuel-souto.medium.com/transformers-multi-purpose-ai-models-in-disguise-978c48fdd973")[](https://manuel-souto.medium.com/transformers-multi-purpose-ai-models-in-disguise-978c48fdd973)

In the second part of this article, we will present novel model architectures and research employing Transformers in several fields unrelated to NLP, as well as showing some code examples of the capabilities of these remarkable new approaches.

### HOW THE TRANSFORMER IS APPLIED TO OTHER AI TASKS

As previously mentioned, the Transformer architecture provides a suitable framework designed to take advantage of long-term relationships between words. This allows the model to find patterns and meanings in the sentences and makes it suited for many tasks in NLP. The most common ones are:

*   **Text classification** into categories, such as obtaining the sentiment of a text.
*   **Question answering**, where the model can extract information from a text when prompted to do so.
*   **Text generation**, such as GPT-3.
*   **Translation**; Google Translate already employs this technology.
*   **Summarization** of a text into few words or sentences.

After the success of the Transformer model applied to NLP tasks, people began to wonder: If it can find long-term relationships in the data and be trained efficiently, then **could it be as efficient in other tasks besides NLP**? This is the start of the current movement of research, where this model is used as the _backbone_ for many algorithms in AI and _machine learning_ previously dominated by other techniques. Some amazing contributions in other AI fields are:

#### **Lip reading and text transcription**

[![](https://cdn-images-1.medium.com/max/800/0*WsXnjjFjvkLUAXdk)](https://media.istockphoto.com/photos/woman-talking-with-alphabet-letters-coming-out-of-her-mouth-concept-picture-id675298456?k=20&m=675298456&s=612x612&w=0&h=0mIKvq4llWoxK2knLbqTqHLgclra6LCbD1mGkMlf3n0=)

A recurring problem in society is related to the transcription of texts, especially for hearing impaired people. The current advances are divided into two groups: using an audio track and transcribing it, or directly interpreting the words from the person’s lip movements. The latter problem is a lot harder to resolve since many factors are involved.

Potentially, this solution could provide help in situations where recording audio is impossible, such as in noisy areas. In this regard, most researchers use CNN or LSTM as the main model interpreting this as a pure _Computer Vision_ task. Recently, some [studies](https://ieeexplore.ieee.org/document/9172849) have been published where Transformer-based solutions to this problem are presented, providing better results than the current state-of-the-art solutions.

#### Traffic route prediction at sea

[![](https://cdn-images-1.medium.com/max/800/0*Puld-s2tGeyF5Hg6)](https://www.researchgate.net/figure/2015-worldwide-maritime-traffic-density-map-The-density-is-evaluated-as-the-number-of_fig1_317201419)

Figure 4: maritime traffic density map as of the year 2015.

One of the main focuses of AI models is the prediction of routes, either for individual people or traffic. However, in this regard, the models employed are mostly trained on land traffic since it is easier to obtain data and model it. Regarding sea traffic, the scarcity and dependence on external factors such as weather or sea currents makes it more difficult to provide accurate predictions for the next few hours.

Most of the employed models rely on LSTM or CNN for the same previous reasons, but these models struggle when dealing with long-term predictions and they don’t take into account the specific characteristics of data obtained at sea. A recent [study](https://arxiv.org/abs/2109.03958) presents a novel algorithm that takes into account the data’s nuances and provides a vessel trajectory prediction using a Transformer model. The accuracy of the predictions is well above the alternative models available, where long-term predictions are mandatory.

#### Object detection

This is a subset of Computer Vision and one of the most common AI tasks. In this task, the model can detect certain objects in an image or video and draw a box around them; some common examples are your phone’s face recognition functionality when you take a picture or unlock it, or CCTV detection of license plates.

In this regard, the models that have been employed in the past are mostly based on CNN since these excel at finding relationships in images; the most common ones being _SSD_ and _Faster R-CNN_. As a result, most algorithms currently used in these tasks have some variation of this model architecture.

However, as was the case for the other tasks, the Transformer architecture has also been experimented with for finding patterns in images. This has lead to several approaches where CNN and Transformer are used jointly, like Facebook’s [**DETR**](https://arxiv.org/abs/2005.12872), or purely Transformer-based architectures like [**Vision Transformer**](https://arxiv.org/abs/2010.11929). The most impactful research in the past few months has been the novel approach of _shifted windows_ in the [**Swin Transformer**](https://arxiv.org/abs/2103.14030), achieving cutting-edge results on a number of categories involving image analysis.

#### LEARN BY SEEING: OBJECT DETECTION WITH DETR

For most of these models, the code and training data are publicly available and open-sourced, which eases their use for inference and fine-tuning. As an example, we will show below how to load and use the DETR model for a specific image.

First, install the dependencies and load an image of your choosing using its URL:

\# Install dependencies  
!pip install -q transformers  
!pip install -q timm

\# Load the needed libraries to load images   
from PIL import Image  
import requests

\# In our case, we selected an image of a park  
url = 'https://www.burnaby.ca/sites/default/files/acquiadam/2021-06/Parks-Fraser-Foreshore.jpg'

im = Image.open(requests.get(url, stream=True).raw)

\# Show the image  
im

![](https://cdn-images-1.medium.com/max/800/0*skxNs07GaWuj_CCm)

Figure 5: Image of a park.

Then, we apply the feature extractor to resize and normalize the image so the model can interpret it correctly. This will use the simplest DETR model, with the ResNet-50 backbone:

from transformers import DetrFeatureExtractor

feature\_extractor = DetrFeatureExtractor.from\_pretrained("facebook/detr-resnet-50")

encoding = feature\_extractor(im, return\_tensors="pt")

encoding.keys()

Next, load the pre-trained model and pass the image through:

from transformers import DetrForObjectDetection

model = DetrForObjectDetection.from\_pretrained("facebook/detr-resnet-50")

outputs = model(\*\*encoding)

And that’s it! Now we only have to interpret the results and represent the detected objects with some boxes:

import matplotlib.pyplot as plt

\# colors for visualization

COLORS = \[\[0.000, 0.447, 0.741\], \[0.850, 0.325, 0.098\], \[0.929, 0.694, 0.125\],

\[0.494, 0.184, 0.556\], \[0.466, 0.674, 0.188\], \[0.301, 0.745, 0.933\]\]

\# Define an auxiliary plotting function  
def plot\_results(pil\_img, prob, boxes):

   plt.figure(figsize=(16,10))  
   plt.imshow(pil\_img)

   ax = plt.gca()  
   colors = COLORS \* 100

   for p, (xmin, ymin, xmax, ymax), c in zip(prob, boxes.tolist(),   colors):

      ax.add\_patch(plt.Rectangle((xmin, ymin), xmax - xmin, ymax -ymin, fill=False, color=c, linewidth=3))

      cl = p.argmax()  
      text = f'{model.config.id2label\[cl.item()\]}: {p\[cl\]:0.2f}'   
      ax.text(xmin, ymin, text, fontsize=15,

      bbox=dict(facecolor='yellow', alpha=0.5))  
      plt.axis('off')  
      plt.show()

import torch

\# keep only predictions of queries with 0.9+ confidence (excluding no-object class)  
probas = outputs.logits.softmax(-1)\[0, :, :-1\]  
keep = probas.max(-1).values > 0.9

\# rescale bounding boxes

target\_sizes = torch.tensor(im.size\[::-1\]).unsqueeze(0)

postprocessed\_outputs = feature\_extractor.post\_process(outputs, target\_sizes)

bboxes\_scaled = postprocessed\_outputs\[0\]\['boxes'\]\[keep\]

\# Show the detection results  
plot\_results(im, probas\[keep\], bboxes\_scaled)

![](https://cdn-images-1.medium.com/max/800/0*4vUBdKuSJoWvQgqB)

Figure 6: DETR object detection output. Bounding boxes appear around each object, where the value indicates the detection confidence.

The accuracy of these models is remarkable! Even smaller objects, which are harder to detect for the usual neural networks, are identified correctly. Thank you [Niels Rogge](https://github.com/NielsRogge) for the awesome [implementation](https://github.com/NielsRogge/Transformers-Tutorials) of these models in the _Transformers_ library!

These examples are just the tip of the iceberg of this research movement. The high flexibility of this architecture and the numerous advantages provided are well suited for a number of AI tasks, and multiple advances are being made on a daily basis on multiple fronts. Recently, Facebook AI published a new paper presenting the scalability of these models for CV tasks that has stirred the community quite a bit; you can also check it out [here](https://medium.com/syncedreview/a-leap-forward-in-computer-vision-facebook-ai-says-masked-autoencoders-are-scalable-vision-32c08fadd41f).

> Will this be the future of all AI models? Is the Transformer the best solution for all tasks, or will it be resigned to its NLP applications? One thing is for sure: For the time being, the Transformer is here to stay!

By [Manuel Souto Juan](https://medium.com/@manuel-souto) on [January 10, 2022](https://medium.com/p/afbc5b46fbc8).

[Canonical link](https://medium.com/@manuel-souto/transformers-multi-purpose-ai-models-in-disguise-afbc5b46fbc8)

Exported from [Medium](https://medium.com) on September 25, 2023.
