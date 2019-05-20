The actual case studies are found in the `_case_studies` folder. The `index.html` file in this folder is what has the content for the [Case Studies page](https://communities.sunlightfoundation.com/case-studies/) on the site.

Each case study’s preview on this page draws its image, title, and city name from the case study’s `image_primary`, `title`, and `agency` metadata values, respectively.

To include a case study on this page, use code in the following format:

`{% include card-case-study.html slug='<your-slug-here>' %}`

where `<your-slug-here>` is replaced with the file name (minus `.md`) in the `_case_studies` folder. For example...

`{% include card-case-study.html slug='glendale-development' %}`

... will display the preview card for the `glendale-development.md` case study.
