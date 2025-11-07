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
    ├── pte2022
    │       └── pte_english_result_penones_2022.pdf
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
**For ```anchor hypertext reference <a href>``` files**
Instead of using anchor hypertext reference mapped to a local path/folder, you can now take advantage of using  [jsDelivr](https://cdn.jsdelivr.net)
```
<a href="https://cdn.jsdelivr.net/gh/profile_name/repository_name@main/folder_name/filename.pdf" target="_blank" rel="noopener">
```
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

# Vercel CDN hosted repos rewrite rule
Most repositories are deployed via Vercel CDN using a JavaScript proxy ```index.js``` as the facade that serves as the presenter for each landing page.

The script is typically located inside the api folder of each repository, which is why URLs often include the ```/api``` path.

The sample JSON snippet below demonstrates how to rewrite URLs to present a more conventional and clean-looking address when accessing the landing page.
```
[
  { "source": "/", "destination": "/api/index" },
  { "source": "/communities", "destination": "/api/communities" }
]
```
Any vercel.json file should be saved in the root or main directory of the repository whenever hosting via CDN is required.

# Dropbox public API url
Taking advantage of public API url files like images and videos for direct download purposes in Dropbox is a game changer.

**Do not proceed with these steps if you do not wish to make the file accessible in public**

1. Upload the file to Dropbox.
2. Make sure it is shared to public.
3. Find the option for share and obtain the permalink 'Copy link' or somewhere that says 'Who has access' then set it to 'Anyone with link'.
4. You should get a sample permalink like this
```
https://www.dropbox.com/scl/fi/d7f623kj8uvdo8yr3jkzt/filname.png?rlkey=4piejew3f0ap8vgsrz0yxg7xk&st=qu4yr5cm&dl=0
```
Change the '0' to '1'
```
https://www.dropbox.com/scl/fi/d7f623kj8uvdo8yr3jkzt/filname.png?rlkey=4piejew3f0ap8vgsrz0yxg7xk&st=qu4yr5cm&dl=1
```
5. This will now be your downloadable public API url from Dropbox.
   
# Taglish tolonges gedli etneb version
Itong repository na ito ay para lang sa scripts at style assets — hindi ito para sa code review o flex-fest, bes. 
Hiwalay ito sa main codebase para mas malinis at mas madali i-maintain. 
At saka FYI lang ha? — minsan si GitHub, pinapakita lang ang pinakamalaking file sa pin previews, kaya nawawala iyong core idea ng project.

Bes, huwag kang bida-bida dito sa repo na ito — walang paandar dapat dito. Ginawa ko ito para imbakan lang ng assets at styling files, hindi para sa pa-Pull Request(PR) showdown mo. 
Kahit mag-PR ka pa ng sampung beses sa barangay niyo, hindi ko yan i-me-merge bes.

# [Ping me](https://ph.linkedin.com/in/ron-penones-241728247)

You can always find ways to reach out if in case you need clarification, mobiledropbox is a contributor account created by [aeronje](https://github.com/aeronje), responsbile for major branching, committing and pushing to origin.

The sole maintainer is still [aeronje](https://github.com/aeronje), so please reach out if you need further context.
