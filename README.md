# FYI
This repository is dedicated for scripts and style assets, not for code review. Keeping it separated from the main codebase improves maintainability. 
GitHub highlights the largest file, which can hide the core idea of any repository or project.
```
mobiledropbox
└── landing_pages_scripts/
    ├── README.md
    ├── assets/
    │   └── images/
    │       ├── aeronje.jpg
    │       └── metafacebook.jpg
    ├── chocolatey_setup/
    │   ├── index.html
    │   ├── main.js
    │   └── styles.css
    ├── disable-built-in-laptop-mouse-trackpad-and-keyboard-in-ubuntu-linux/
    │   ├── main.js
    │   └── styles.css
    └── git_setup/
        ├── main.js
        └── styles.css
```
# Sample tags inserted to index.html hosted via CDN

**For ```<img>``` files**
Who does not love a little performance boost and flexing a clean HTML tag?
Here is how you can serve your images straight from your GitHub repo like a boss — via [jsDelivr](https://cdn.jsdelivr.net).

```
<img src="https://cdn.jsdelivr.net/gh/profile_name/repository_name@main/folder/image.png" alt="aeronje" class="author-img" />
```
If you prefer a cleaner, minimalist setup and you do not feel exposing the ```<img>``` description to the whole planet, you can simply get rid of the ```alt``` attribute.

Removing ```class``` attribute still allows the image to render for as long as no pre-defined ```CSS``` styling depends on it.

```
<img src="https://cdn.jsdelivr.net/gh/profile_name/repository_name@main/folder/image.png" />
```

**For JavaScript files**
```
<script src="https://cdn.jsdelivr.net/gh/profile_name/repository_name@main/folder_name/scriptName.js"></script>
```
**For CSS or styling files**
```
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/profile_name/repository_name@main/folder_name/style.css">
```
These tags use [jsDelivr](https://cdn.jsdelivr.net) CDN to load external resources instead of local files to improve accessibility and reducing load time.

# Taglish tolonges gedli etneb version
Itong repository na ito ay para lang sa scripts at style assets — hindi ito para sa code review o flex-fest, bes. 
Hiwalay ito sa main codebase para mas malinis at mas madali i-maintain. 
At saka FYI lang ha? — minsan si GitHub, pinapakita lang ang pinakamalaking file sa pin previews, kaya nawawala iyong core idea ng project.

Bes, huwag kang bida-bida dito sa repo na ito — walang paandar dapat dito. Ginawa ko ito para imbakan lang ng assets at styling files, hindi para sa pa-Pull Request(PR) showdown mo. 
Kahit mag-PR ka pa ng sampung beses sa barangay niyo, hindi ko yan i-me-merge bes.

# [Ping me](https://ph.linkedin.com/in/ron-penones-241728247)

You can always find ways to reach out if in case you need clarification, mobiledropbox is a contributor account created by [aeronje](https://github.com/aeronje), responsbile for major branching, committing and pushing to origin.

The sole maintainer is still [aeronje](https://github.com/aeronje), so please reach out if you need further context.

