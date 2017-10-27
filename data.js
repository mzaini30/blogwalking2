---
layout: compress
---

{% assign data = site.data | sort %}

data = [
{% for x in data %}
    "{{ x }}"{% unless forloop.last %},{% endunless %}
{% endfor %}
]