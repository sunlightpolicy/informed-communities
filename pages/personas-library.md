---
title: Library of user personas for open data
permalink: /personas-library/
layout: primary
lead: Explore user personas that cities and data intermediaries have developed.
content_wide: true
content_focus: false
banner_cta: true
gridless: true
---

The open data user personas library is an extension of Sunlight Open Cities' current focus on the community angle toward open data. To incentivize a paradigm of civic engagement that regularly harnesses publicly available data, open data stewards can adopt human-centered design practices.

User personas are a tool that facilitates the garnering ideas about the most pertinent community uses for open data, consulting experts and users, and distilling specific open data use cases. In this regard open data user personas are a valuable product of and asset to the actions in the [Refine stage](https://sunlight-foundation.gitbooks.io/tactical-data-engagement/content/2-refine.html) of the [Tactical Data Engagement](https://sunlightfoundation.com/policy/open-cities/tactical-data-engagement/) framework.

The  personas in this library range from specific departmental initiatives to addressing citywide objectives, to regional collaboration and data sharing. Furthermore, there is varying granularity among the sets of personas depending on how many iterations of user research went into the development of each set of personas.

Do you have personas for open data that aren't here? Email us at [opencities@sunlightfoundation.com](mailto:opencities@sunlightfoundation.com)!


{% for place in site.data.personas_places %}
  {% unless place.exclude == true %}
    {% include library-place.html
      place_code=place.place_code
      place_name=place.place_name
      place_desc=place.description
      links=place.links
      %}
  {% endunless %}
{% endfor %}
