BoxerJS
=======


Yet another jQuery lightbox plugin. Why make another one? Making a plugin teaches you Javascript modular pattern and DOM manipulation. Like many smart programmers would tell you. You learn more  by doing than just reading lessons on the matter. If you find my plugin helpful send me a tweet or a like.  Happy coding!



## Problem


>
> “The formulation of the problem is often more essential than its solution"
>                                                        - Albert Einstein
>                                                        - 


Like many projects, you start with the problem. With the problem in mind, you can set out with a roadmap that will keep you focused on the task.

How do I use jQuery to transform my image links into overlay previews?


## Limitations


Let's add restrictions. Limitations produce more creative ideas than freedom. So for this problem, I want the solution to be:

* a jQuery plugin
* proof-of-concept include images and thumbnails - formatted as "image.jpg" and "image_thumb.jpg" correspondingly
* content agnostic
* does not know anything about the images - size or compression.
* anchors are optional, but for semantic purposes and accessibility, thumbnails must be wrapped in anchor tags with a corresponding href to the target URL.
    e.g.

```html

    <a href="my_cool_image.png">
        <img src="my_cool_image_thumb.png" />
    </a>

```

* must iterate on a DOM block(div, p, section etc) and not the whole page. 



## Solution


The plugin will iterate on children of blocks converted to boxerJS blocks.  

```html

<div class="boxer">
    <h3>Thumbnails</h3>
    <a href="assets/dog1.jpg" title="Dog 1"><img src="assets/dog1_thumb.jpg" alt="dog 1"></a>
    <a href="assets/dog2.jpg" title="Dog 2"><img src="assets/dog2_thumb.jpg" alt="dog 2" data-pin-nopin="true"></a>
    <a href="assets/dog3.jpg" title="Dog 3"><img src="assets/dog3_thumb.jpg" alt="dog 3" data-pin-nopin="true"></a>
</div>

```


```javascript

    $(".boxer").boxer();

```


TO prevent performance issues, the callback must be attached to the parent, instead of the child elements.  This will optimize the event processing through event delegation.

### Create overlay

Using an overlay makes the solution a modal control. Modal meaning it prevents the user from accessing other portions of the page except for what's exposed by the modal control. 

## Installation


1. Download from [https://github.com/chrisbautista/boxerjs](https://github.com/chrisbautista/boxerjs)

```bash

> git clone https://github.com/chrisbautista/boxerjs

or

> wget https://github.com/chrisbautista/boxerjs/archive/master.zip

```


## Usage


1. Copy boxer.js, boxer.css, and close.png into your project
2. Include boxer.js and boxer.css
```html
<!-- inside <head></head> tag -->
    <link rel="stylesheet" href="js/boxer/boxer.min.css">
```

```html
<!-- near </body> tag -->

    <script src="http://code.jquery.com/jquery-1.11.2.min.js"></script>
    <script src="js/boxer/boxer.min.js"></script>
```
3. Wrap anchors in a container e.g. 

```html

<div class="boxer" > 
   <a href="picture.png" title="this is a picture" > <img src="picture_thumb.jpg" /> </a>
</div >

```

4. Run code 

```javascript

$(".boxer").boxer();

```

## Demo

http://chrisbautista.github.io/projects/boxerjs/build/index.html


## Roadmap

* loading indicator
* presentation mode
* previous and next image indicators

## Contributors

* Chris Bautista - [@chrisbautista](http://github.com/chrisbautista)

## Troubleshooting

If you find a bug, sent a pull request or thought of a great idea to extend  boxerjs, shoot me an email at chris at codespud dot com


