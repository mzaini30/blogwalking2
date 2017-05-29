---
layout: compress
---

data = [
{% for x in data %}
    "{{ x }}",
{% endfor %}
]

{
    judul: "{{ data }}",
    link: "http://gitlab.com/mzaini30/{{ data }}"
},