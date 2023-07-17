 # Give rating challenge

 
The provided CSS code defines keyframes animations and selectors to apply different styles to elements with the class "to-right" based on their position. Let's break it down briefly:

The @keyframes right rule defines an animation that gradually moves an element to the right and changes its opacity.

The .to-right class sets the initial position and opacity of the elements.

The @for loop iterates from 1 through 4, creating classes .to-right:nth-of-type(1), .to-right:nth-of-type(2), and so on. These classes apply the to-center animation to each element, with a delay based on their position.

The @keyframes to-center rule defines an animation that brings the elements back to the center, reversing the initial transformation and gradually increasing their opacity.

In summary, the code applies different animations to elements with the class "to-right" based on their position. The elements initially start from a position far to the right and gradually move to the center while increasing opacity. Each element has a different animation delay, creating a staggered effect.


## Desktop Version :notebook:

 ![Rating desktop version](public/img/demo/rating1.png)
 ![Rating desktop version](public/img/demo/rating2.png)

 ## Mobile Version

 ![Rating desktop version](public/img/demo/mobile1.png)

 ## Animation 

 ![Rating desktop version](public/img/demo/gif.gif)



