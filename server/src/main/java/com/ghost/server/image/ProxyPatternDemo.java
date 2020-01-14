package com.ghost.server.image;

public class ProxyPatternDemo {
    public static void main(String[] args) {
        Image image = new ProxyImage("image.jpg");

        image.display();
        System.out.println("Image will be loaded from disk");

        image.display();
        System.out.println("Image will not be loaded from disk");
    }
}

