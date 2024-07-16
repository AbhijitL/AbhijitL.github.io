---
layout: blog_post
author: Abhijit Leihaorambam
title: Learning opengl part 1
thumb: /assets/img/blogs/programming/opengl/opengl1.png
description: We will be going to make some triangles!!
tags: [opengl, cpp, tutorial]
---

```In this blog i didn't specify how to setup the project!. There are lots of tutorial online on how to setup the libraries.```

This is from my journey on learning computer graphics with opengl 4.
As of my learning OpenGL is not a library but an interface to our graphics.
Where the actual implementation is done by different hardware manufacturers with same interface.
## Libraries
I use GLFW for window creation and handling and GLEW for OpenGl interfacing.
And I am using Visual Studio 2022.

GLFW handles the opengl context tied to a window on the OS.
GLEW makes sure we include the latest opengl headers and extensions.
## Creating a window

```cpp
#include <GL/glew.h>
#include <GLFW/glfw3.h>
#include <iostream>

int main(){

    return 0;
}
```
First of all let's include the headers for GLEW and GLFW, and make sure glew header is before the glfw otherwise it won't build.

In the main function.
```cpp
if (!glfwInit())
{
    fprintf(stderr, "Error could not start GLFW3\n");
    return 1;
}
```
[glfwInit()](https://www.glfw.org/docs/3.3/group__init.html#ga317aac130a235ab08c6db0834907d85e) starts up the GL context and OS window using GLFW helper lib.
It is put inside a if statement to see if the initilization is correct or not.
We use [fprintf()](https://cplusplus.com/reference/cstdio/fprintf/) to print the error code if failure and lastly return 1 to tell the program EXIT_FAILURE.

```cpp
GLFWwindow* window = glfwCreateWindow(640, 480, "Hello world", NULL, NULL);
if (!window)
{
    fprintf(stderr, "Error cannot open window with GLFW3\n");
    glfwTerminate();
    return EXIT_FAILURE;
}
glfwMakeContextCurrent(window);
```
[glfwCreateWindow](https://www.glfw.org/docs/3.3/group__window.html#ga3555a418df92ad53f917597fe2f64aeb)(int width, int height, const char* title, GLFWmonitor* monitor, GLFWwindow* share) creates a window taking the required paramters
we put null in monitor and share.
If the window creation is failed we print the errors and called [glfwTermate()](https://www.glfw.org/docs/3.3/group__init.html#gaaae48c0a18607ea4a4ba951d939f0901) to destroy all of the glfw stuffs. [glfwMakeContextCurrent()](https://www.glfw.org/docs/3.3/group__context.html#ga1c04dc242268f827290fe40aa1c91157) makes the current opengl context on the calling thread this must be at a single thread at a time and can be detached by passing NULL.

```cpp
glewExperimental = GL_TRUE;
glewInit();
glEnable(GL_DEPTH_TEST);
glDepthFunc(GL_LESS);
```
Now we start up the GLEW extention handler and initialize the glew.
glewExperimental allows extension entry points to be loaded even if it's not present.

``` opengl extension are means to provide new or expanded features that is not included in the core ```

glEnable() enables various capablities by passing the right enum such as GL_DEPTH_TEST.
GL_DEPTH_TEST enables depth testing.
glDepthFunc() is passed GL_LESS.
Here is a good [explanation](https://www.youtube.com/watch?v=uJzXDkgm5Fw) video of it.

```cpp
glClearColor(0.6f, 0.6f, 0.6f, 1.0f);
while (!glfwWindowShouldClose(window)) {
    glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);
    // later code here

    glfwPollEvents();
    glfwSwapBuffers(window);
}
```
[glClearColor()](https://registry.khronos.org/OpenGL-Refpages/gl4/html/glClearColor.xhtml) takes GLFloat value for red, green, blue, and alpha this functiona clears the color buffer with color specified.
We create a while loop where we put a function glfwWindowShouldClose() to make it run forever until and unless this function returns true.
Later we are going to use this function ```glfwSetWindowShouldClose(window, 1)``` to set the opengl to make the loop close.
glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT) this will clear the color buffer as well as the depth buffer, we will talk about this in later.
glfwPollEvents() listen inputs from the OS so that we can use it to handles things such as getting key pressed, mouse clicks, etc.
[glfwSwapBuffer(window)](https://www.glfw.org/docs/3.0/group__context.html#ga15a5a1ee5b3c2ca6b15ca209a12efd14) it swaps the front and the back buffer. Drawing is done in back buffer after it is done it is swap with the front which is what we see on the screen.

```cpp
glfwTerminate();
return 0;
```
After everything is done it is necessary to called the glfwTerminate().

According to the docs

```destroys all remaining windows and cursors, restores any modified gamma ramps and frees any other allocated resources.```


The completed code should look like this.

```cpp
#include <GL/glew.h>
#include <GLFW/glfw3.h>
#include <iostream>

int main() {

    if (!glfwInit())
    {
        fprintf(stderr, "Error could not start GLFW3\n");
        return 1;
    }
    GLFWwindow* window = glfwCreateWindow(640, 480, "Hello world", NULL, NULL);
    if (!window)
    {
        fprintf(stderr, "Error cannot open window with GLFW3\n");
        glfwTerminate();
        return EXIT_FAILURE;
    }
    glfwMakeContextCurrent(window);

    // Glew Init
    glewExperimental = GL_TRUE;
    glewInit();
    glEnable(GL_DEPTH_TEST);
    glDepthFunc(GL_LESS);

    glClearColor(0.6f, 0.6f, 0.6f, 1.0f);
    while (!glfwWindowShouldClose(window)) {
        glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);
        // later code here

        glfwPollEvents();
        glfwSwapBuffers(window);
    }
    glfwTerminate();
    return 0;
}
```
When you run the program you should get like this.

<img src="/assets/img/blogs/programming/opengl/opengl2.png"/>


# TO BE CONINUED....