while (true) {
    if (input.soundLevel() > 150) {
        light.showAnimation(light.rainbowAnimation, 500)
    } else {
        light.clear()
    }
    
}
